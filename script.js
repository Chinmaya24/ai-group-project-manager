let tasks = [];

let history = {
  A: { delays: 0, completed: 0 },
  B: { delays: 0, completed: 0 }
};

let memoryLogs = [];

function addTask() {
  let text = document.getElementById("taskInput").value;
  let member = document.getElementById("memberSelect").value;

  tasks.push({ text, member, status: "pending" });

  memoryLogs.push(`Task "${text}" assigned to Member ${member}`);

  renderTasks();
}

function renderTasks() {
  let container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach((task, index) => {
    let div = document.createElement("div");
    div.className = "task";

    if (task.status === "delayed") div.classList.add("delayed");
    if (task.status === "completed") div.classList.add("completed");

    div.innerHTML = `
      <strong>${task.text}</strong><br>
      Assigned to: ${task.member}<br>
      <button onclick="completeTask(${index})">✅</button>
      <button onclick="delayTask(${index})">❌</button>
    `;

    container.appendChild(div);
  });

  updateAI();
}

function completeTask(index) {
  let member = tasks[index].member;
  tasks[index].status = "completed";
  history[member].completed++;

  memoryLogs.push(`Member ${member} completed task "${tasks[index].text}"`);

  renderTasks();
}

function delayTask(index) {
  let member = tasks[index].member;
  tasks[index].status = "delayed";
  history[member].delays++;

  memoryLogs.push(`Member ${member} delayed task "${tasks[index].text}"`);

  renderTasks();
}

function updateAI() {
  let suggestion = "All members performing well.";

  if (history.A.delays > 1) {
    suggestion = "⚠️ Member A is delaying tasks. Assign smaller tasks.";
  }
  if (history.B.delays > 1) {
    suggestion = "⚠️ Member B is delaying tasks. Assign smaller tasks.";
  }

  document.getElementById("suggestion").innerText = suggestion;

  document.getElementById("stats").innerText =
    `A → Completed: ${history.A.completed}, Delays: ${history.A.delays}
B → Completed: ${history.B.completed}, Delays: ${history.B.delays}`;

  let logList = document.getElementById("memoryLog");
  logList.innerHTML = "";

  memoryLogs.slice(-5).forEach(log => {
    let li = document.createElement("li");
    li.innerText = log;
    logList.appendChild(li);
  });
}