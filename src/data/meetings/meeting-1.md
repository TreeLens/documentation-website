---
id: 1
title: 📝 Meeting 1
date: 2026-09-23
---
📅 Date: 23-09-2026

📍 Place: IEETA

👥 Participants
- Francisco Baptista
- Inês Batista
- Maria Quinteiro
- Marcos Costa
- Prof. João Almeida
- Vicente Barros
- Sebastião Teixeira

---

## 1. 🎯 Meeting Objective
- Definition of project specifications, goals, expected results, and development tasks. 
- Specification of deliverables for Milestone 1.

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* **Problem and Solution**
- **Problem:** In Portugal, law No. 59/2021 requires municipalities to maintain an inventory of urban trees. However, the survey is conducted in the field, tree by tree, making the process slow, costly, and quickly outdated, which hinders municipalities from complying with the law and effectively managing the city's tree assets.
- **Solution:** TreeLens is an application that automates this process, automatically detecting, locating, and recording each tree on the city map. It builds and maintains a georeferenced inventory avoiding duplicate entries for the same tree seen in multiple images and closes the learning loop by using corrections made on the platform to retrain the model.
- **App users:** TreeLens users, such as municipal technicians or engaged citizens, can explore an interactive map, view the record for each tree (including source images), manually validate and correct detections, track statistics by street or district, compare surveys to identify new or removed trees.

### *Topic 2:* **Documentation Website**
- To expedite the implementation process, the decision was made to use the Astro Wind template. Inês was responsible for customizing the template to align with the project's visual identity and for setting up the content.

### *Topic 3:* **Discussion on State of the Art**
- Given the scarcity of known resources in this area, we were encouraged to highlight in M1 the frequent use of rudimentary methods unsuited to the technological age (Excel Sheets, Paper Files).
- We are indeed responsible for seeking out other methods similar to the solution we intend to implement even if they are merely standalone services in order to gather as many examples as possible to demonstrate the importance of our system.

### *Topic 4:* **BrainStorming on Architecture**
- The usage of technologies like PostGis e rustfs was mentioned for our specific use cases, and regarding the language python was recommended since the project consists of a lot of Machine Learning.
- For auth keycloack was also recommended.

### *Topic 5:* **Data Sources to use**
- The mentioned data sources consisted of street view images and images/videos taken on site.

---

## 3. 📝 Observations and Comments
- Suggestion to create a Discord server with the entire team (students and advisors/collaborators) for better and more constant communication.
