---
id: 9
title: 📝 Meeting 9
date: 2026-11-02
---
📅 Date: 02-11-2026

📍 Place: IEETA - 1.04

👥 Participants
- Francisco Baptista
- Inês Batista
- Marcos Costa
- Maria Quinteiro
- Luís Correia
- Vicente Barros
- Sebastião Teixeira

---

## 1. 🎯 Meeting Objective
- Brainstorming questions that arose during the work carried out over the last week
- Planing the next sprint (1st for MS4)

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* Question regarding the deletion of entered data
- Francisco raised the question of how to handle a specific scenario: given that the law requires us to provide users with the option to delete all their data from the platform, including photos they have submitted, is it possible to remove all of a user's personal data from a photo they submitted before incorporating it into the dataset?
- Sebastião believes it is possible to do this by removing the user_id from the submitted photo before it enters the dataset pipeline, while also ensuring compliance with the RGPD, specifically by incorporating the blurring of faces and vehicle license plates into the pipeline, as previously discussed.
- The key takeaway is that we can keep the photo in the dataset, provided it complies with the GDPR and that it is impossible, based on the photo itself, to trace it back to the user who uploaded it.
- However, there should be an option to report a photo if it does not comply with the app's rules.

### *Topic 2:* YOLOx
- YOLO can be difficult to use due to the AGPL.
- Marcos suggested using YOLOx, as it does not have the same usage limitations as the previous one.
- Its license should be reviewed so that it can be incorporated into the document containing the licenses to be submitted to MS3.

### *Topic 3:* How we ensure RGPD compliance in the MVP
- Inês questioned how to ensure RGPD compliance by the MVP deadline, given that integrating it into the project would require starting the development of the pipeline.
- Vicente suggested starting by implementing a pending review queue that only accepts submissions where the photo does not contain faces or vehicle license plates, before automating this process, thereby ensuring the integrity of the submitted information.

### *Topic 4:* Private profiles
- Francisco highlighted the importance of having an option to create private profiles, given that there may be users under the age of 13, or simply users who do not wish for their submissions to be included in the interactive map used by the community.
- The logic chosen for this implementation is that these users can make submissions which will go through the same pipeline, but will not be integrated into the public dataset, meaning this information will not be accessible to all other users. By having a public profile, I still retain the ability to access information from other public users.

### *Topic 5:* HTML Semantics
- Maria presented the usability issues required by the MS3 deliverables, specifically the changes that needed to be implemented.
- Vicente recommended using semantic HTML to achieve the stated objective.
- In the presentation, it is recommended to show before and after Figma mockups, illustrating a problem that was identified and the attempt to resolve it.

### *Topic 6:* Keyclock configurations
- Marcos presented the configuration developed over the past week, but Sebastião identified several issues with it, most notably, the lack of a specified data.
- Sebastião agreed to help Marcos complete the configuration of this technology for the project.

---

## 2. 📈 Sprint Planning (03/11 - 10/11)
- See project's backlog on Jira (click on the navbar button)