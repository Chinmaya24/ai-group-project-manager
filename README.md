# AI Group Project Manager (with Hindsight Memory)

## Overview
We built an AI-powered project manager that helps student teams coordinate tasks, track progress, and improve collaboration over time using persistent memory.

Unlike traditional tools, this system **learns from past team behavior** using Hindsight and continuously improves task allocation and decision-making.

---

## Problem
Students working on group projects often face:
- Poor task coordination
- Lack of accountability
- Repeated mistakes
- Missed deadlines

Most tools don’t remember past interactions or learn from them.

---

## Solution
Our AI agent uses **Hindsight memory** to:
- Store past team interactions (tasks, meetings, deadlines)
- Recall relevant project history
- Learn patterns in team behavior

This allows the system to act like an **intelligent project manager**.

---

## Features
- Smart task assignment based on past performance
- Automatic meeting summaries
- Deadline tracking & reminders
- Learning from past mistakes
- Productivity insights for team members

---

## How Hindsight is Used
We use Hindsight as the core memory system:
- **Retain:** Store team actions (task assignments, completions, discussions)
- **Recall:** Retrieve relevant past events during decision making
- **Learn:** Improve recommendations over time

Example:
If a team member frequently delays tasks, the system learns this and assigns critical tasks to more reliable members.

---

## Tech Stack
- Frontend: React
- Backend: Node.js / FastAPI
- AI: LLM (Groq / OpenAI)
- Memory: Hindsight
- Database: MongoDB

---

## Demo Flow
1. Create project
2. Assign tasks
3. Conduct meeting → AI stores discussion
4. Next session → AI suggests improved task allocation

---

## Future Scope
- Integration with Slack / Teams
- Real-time collaboration tracking
- Predictive deadline risk analysis

---

## Conclusion
This project demonstrates how **AI agents with memory** can significantly improve collaboration by learning from experience.
