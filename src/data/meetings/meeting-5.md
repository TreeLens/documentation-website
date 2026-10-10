---
id: 4
title: 📝 Meeting 5
date: 2026-10-08
---
📅 Date: 08-10-2026

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
- Validation of the work done since the last meeting.
- Defining the start of system construction in terms of code.
- Preparation of the mind map for creating the MS2 slides.

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* **Validation**
- Some of the requirements we noted as functional should be reclassified as non-functional. For example, authentication and role-based access control should be included in the NFRs, since they do not add value to the product. Regarding NFRs, we must be careful with promises that do not depend solely on us, such as uptime percentages. 
- Actors are validated.
- We should really avoid using "AND" or "OR" in use cases. We still use them in some instances, but it is incorrect. They need to be more detailed for reporting purposes.
- Some user stories should be eliminated since they add no value to the project. We must focus on demonstrating value to the client.

### *Topic 2:* **Diagrams**
- The architecture diagram is correct in terms of flow. This was corrected following the previous meeting.
- We need to change the queue in the diagram so that it is represented horizontally.
- It lacks color-coding for modules and the addition of logos for the technologies to be used.

### *Topic 3:* **Start of the System's Construction**
- From the first week of the project until now, it has been quite difficult to find annotated datasets that align with our intended direction. They are all very limited and bear no resemblance to our pilot sites. All the datasets proposed by Sebastião also deviated from the objective.
- Therefore, we decided to set aside detection for the very early stages. We will build the entire system manually prior to the MVP. This approach creates a timeframe that includes code integration and development while also allowing a buffer for this exploration.
- We spoke with Professor João Almeida about this issue, which significantly hinders the delivery of the product we aim to produce, and a possible meeting with a councilor from the Aveiro City Council was suggested. He took responsibility for contacting the councilor and scheduling the meeting. 
- We hope that the city council officials have, at least in a rudimentary way, some cataloging of the city of Aveiro.
- Leading up to the meeting, the team was responsible for developing the manual system.

### *Topic 4:* **GitHub Organization Structure**
- As a team, we discussed how to organize our code. Based on past experience building multi-module software, we found that managing Pull Requests becomes very difficult turning development into a process of resolving merge conflicts rather than actual coding when the frontend, backend, data management, and the entire system are all in the same repository.
- Vicente recommended development using GitHub submodules.

---

## 3. 🖥️ Tips for an MS2 Presentation
- Maintain the same aesthetic.
- The project context slide is extremely important.
- A more in-depth look at the state of the art compared to the previous presentation.
- Capture attention using diagrams rather than just continuous text for use cases and user stories.
- Mention the issue of datasets and the lack of prior inclusion of ML.
- Prints of mockups are sufficient, as long as they are part of an interface that is valuable to customers (including mobile-friendly versions is also important).