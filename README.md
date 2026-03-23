# 🧠 AI Group Project Manager (with Hindsight Memory)

> Most project management tools track work.  
> This one learns from it.

---

## 🚀 Overview
We built an AI-powered project manager that helps student teams coordinate tasks, track progress, and improve collaboration over time using persistent memory.

Unlike traditional tools, this system doesn’t reset after every session. It **remembers past interactions, learns team behavior, and adapts decisions over time** using Hindsight.

---

## ❗ Problem

Students working on group projects often face:
- Poor task coordination  
- Lack of accountability  
- Repeated mistakes  
- Missed deadlines  

Existing tools (Trello, Notion, etc.) only track tasks — they **don’t learn from past behavior**.

---

## 💡 Solution

We built an AI agent that:
- Stores past team interactions  
- Recalls relevant history during decisions  
- Learns patterns in team performance  

This allows the system to act like an **adaptive project manager**, not just a tracking tool.

---

### Workflow:
1. User assigns/completes tasks  
2. Data is stored in Hindsight  
3. AI retrieves similar past events  
4. System makes improved decisions  

---

## 🧠 How Hindsight is Used

We use Hindsight as the core memory layer:

- **Retain:** Store team actions (tasks, deadlines, discussions)  
- **Recall:** Retrieve relevant past interactions  
- **Learn:** Improve future decisions  

---

## 🧩 Example: Memory Storage

```json
{
  "member": "A",
  "task": "Frontend UI",
  "status": "Delayed",
  "timestamp": "2026-03-20"
}
function assignTask(member, history) {
  if (history[member].delays > 2) {
    return "Assign low priority task";
  }
  return "Assign critical task";
}
## ⚙️ How It Works
