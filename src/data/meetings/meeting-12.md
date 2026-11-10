---
id: 12
title: 📝 Meeting 12
date: 2026-11-10
---
📅 Date: 10-11-2026

📍 Place: IEETA 

👥 Participants
- Francisco Baptista
- Inês Batista
- Marcos Costa
- Maria Quinteiro
- Luís Correia
- Vicente Barros

---

## 1. 🎯 Meeting Objective
- End of sprint meeting
- Discussion of issues that came up during the sprint
- Planning the next sprint

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* Where to locate the tests/ directory
- Considering that certain components are required for some tests located in the project root, while other tests never require them, the following has been decided.
- The core-api/tests directory contains unit and integration tests for the isolated service. The treelens/tests directory contains only e2e tests, which verify that the services function together using real authentication and span multiple components. 

### *Topic 2:* Keycloak Login/Sign Up Services
- It is normal to arrive at the implementation logic we reached in this sprint, for the Keycloak validation of application user data to take place in the browser, outside of the application itself.
- Maria and Francisco, as frontend developers, asked about the possibility of adapting this mechanism so that it’s integrated directly into the application itself, given that the current approach somewhat disrupts the user's workflow.
- Vicente stated that, in its current state of development, it is perfect for an MVP. While this could certainly be considered in the future, he noted that, given that data is securely stored and authenticated, and the role-based access system is functioning correctly, the priority now is to proceed with the development of the application's remaining features.

### *Topic 3:* Survey Zones VS XP-Zones
- Marcos questioned, from a logical standpoint, how the divisions between XP-zones and Survey zones would function, for instance, what types of tasks distinguish the two, and what steps are necessary to keep them separate, given that they are intended for different types of actors.
- For now, the agreement is that the logic for both will be exactly the same, while their specific objectives will differ, they will serve the same ultimate purpose.
- Both will exist to provide the administrator, upon noticing areas with sparse cataloging, the opportunity to expand the inventory for their municipality in those locations. 
- What will differ between the two zones is the actor targeted at them, the interface in which they will be presented, and the lack of gamification present for the field survey. In other words, for now, the distinction in the code should be handled using different messages.

### *Topic 4:* Profile Pictures for the users
- Given that the team does not wish to assume responsibility for any inappropriate profile photos that users might choose within the application, it has been decided to use a set of predefined avatars. This approach avoids the need for additional validation, which we currently believe adds no value to the project.
- Vicente suggested a few sources where we could get these avatars: gravatar/photorobot/avataridenticons/robohash

### *Topic 5:* Potencial spam on the Report Button
- Francisco pointed out that having a Report button for illegal submissions, which might have slipped through the validation process due to an oversight, creates an opening for malicious users to disrupt the proper functioning of the app.
- Mechanisms for detecting such users were therefore devised, intended for future implementation, once a stable MVP is complete.
