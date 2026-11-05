---
id: 11
title: 📝 Meeting 11
date: 2026-11-05
---
📅 Date: 05-11-2026

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
- Validation of the communication carried out up to this point with the Municipal Council
- Address an issue we are experiencing regarding the application of rule sets to the branches that have been created

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* Municipal Council
- Vicente reached out and received a response, however, in order to provide them with a comprehensive overview of our project, we were asked to send a report. This report should outline the project, tailored to be understood by those outside the field of software development, explaining what the project aims to do and the objectives it intends to achieve.
- For this reason, a basic structure was decided upon:
    * Introduction
    * Complete **State of the Art**
    * The main focus on the features to be developed
    * Just a **simple overview of the architecture**
    * Focus also on developing **flow diagrams** that demonstrate the usage flow of a typical user
    * Schedule through to the end of development
- Inês was tasked with writing this report over the weekend so that it could be validated by the supervisors in the following days, in order for it to be forwarded to the municipal council for the purpose for which it was requested.
- This is an addition to the sprint so all other tasks remain as they are.

### *Topic 2:* Branchs ruleset problems
- It has been observed that when opening a PR, specifically when selecting reviewers to ensure the work is validated by team members other than the developer, the system only allows requesting a single reviewer, even though the ruleset requires a minimum of two reviewers for the PR to be merged.
- We have determined that the defined rules are not being applied, because the TreeLens organization is not included in the GitHub Teams plan.
- It was therefore decided that the minimum number of reviews will be just 1, as that is the limit permitted—with the stipulation that the reviewer must not have actively participated in developing the code for the PR in question. Furthermore, it remains the case that no code may be pushed directly to either the main or dev.
