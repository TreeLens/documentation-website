---
id: 4
title: 📝 Meeting 4
date: 2026-10-01
---
📅 Date: 01-10-2026

📍 Place: IEETA

👥 Participants
- Francisco Baptista
- Inês Batista
- Luís Correia
- Maria Quinteiro
- Marcos Costa
- Vicente Barros
- Sebastião Teixeira

---

## 1. 🎯 Meeting Objective
- Review the feedback provided by Professor João Almeida after the MS1 presentation.
- Align the necessary for MS2, especially for the first week.

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* **Architecture Diagram**
- Architecture diagrams should be drawn so that they can be read either from top to bottom or from left to right.
- The diagram we presented in MS1 ​​was not incorrect, it was simply difficult to understand, as there was no logical flow of the data.
- When representing databases, be sure to use cylinders (for relational databases) or a book (for non-relational ones).
- For MS2, we need to submit an improved architecture diagram incorporating the required corrections that clearly illustrates the complete data flow at a glance and specifies the technologies to be used for each distinct block. Vicente recommends using svgl.app for icons. 

### *Topic 2:* **Functional and Non-Functional Requirements**
- Functional requirements must reflect the app's features not just the current ones, but everything the app will ultimately include.
- Non-functional requirements may not be directly related to the system's specific functions, yet they are essential for its proper operation.

### *Topic 3:* **Personas and Use Cases**
- Brainstorming of personas: system admin, cataloger, auditor, tree enthusiast (needs more thought, nothing definitive)
- Use cases should always begin with a verb, followed by the action to be demonstrated. We must pay close attention to their structure.
- For the MS2 presentation, it is suggested to show the use cases as a diagram rather than just reading through them (as this is more engaging and faster). For the report, however, we need to have them all written out in detail.

### *Topic 4:* **Mock-Ups**
- After weighing the pros and cons of creating mockups in Figma versus directly in React, the team decided to proceed with Figma first, as one team member was already comfortable with the task. This decision was made also because the project's UI is not extremely simple.
- Vicente recommended Shadcn for later UI development.

### *Topic 5:* **BDs Diagram**
- Came from Francisco's question about how to store the trees in the database, in relation to the system's potential expansion.
- The advisors recommend a tree based abstraction when storing data, this involves initially classifying everything stored in the system such as a "cataloging entity" as an object specialized into a "tree."
- If we start by cataloging everything as "tree" because the system requirements allow it, and later want to include other objects, it will be quite difficult to reverse that choice.

---

## 3. 📝 Task Assignments
Here is the division of tasks leading up to the next meeting with the team advisors:
- **Luís:** Architecture diagram and non-functional requirements
- **Maria:** Start on Figma mock-ups
- **Inês/Francisco:** Personas, use cases, user stories, Functional requirements
- **Marcos:** Continue the work within the model