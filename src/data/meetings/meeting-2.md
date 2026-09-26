---
id: 2
title: 📝 Meeting 2
date: 2026-09-24
---
📅 Date: 24-09-2026

👥 Participants
- Francisco Baptista
- Inês Batista
- Maria Quinteiro
- Marcos Costa

---

## 1. 🎯 Meeting Objective
- Resolved issues that arose during the deployment of the documentation site. Dependencies from the Astro Wind template caused some conflicts, but these were resolved, and the site is now deployed via a CD.
- Clearly define the following topics required for the first milestone presentation: project context, problems, goals, tasks, and expected results.
- Presentation of the processing pipeline by Marcos. Discussion of the pipeline and consolidation of the project's rudimentary primary architecture.

---

## 2. 💬 Discussion and Decisions
### *Topic 1:* **Processing Pipeline**
- The workflow begins with image preprocessing, where video frames are extracted. This is followed by machine learning-based classification, which detects trees in the images using an object detection model (YOLOv8), then coordinate estimation, which calculates the geographic position of each tree via triangulation across multiple views of the same area, and finally deduplication, which merges repeated detections of the same tree seen in different images by combining geographic proximity with visual similarity using embeddings. 
- From a technical standpoint, the pipeline relies on PyTorch, YOLOv8, OpenCV, NumPy, and scikit-learn, with final results written to PostgreSQL/PostGIS for location data, Object Storage for images, and MongoDB for metadata and job status. 
- The learning loop remains to be closed, as manual corrections made on the platform are intended to eventually feed back into model retraining.

### *Topic 2:* **High Level Architecture**
- Users interact with a web application via an interactive map. Requests pass through an Nginx layer that handles security and traffic limiting before reaching the API, which in turn coordinates the rest of the system. 
- Whenever an image or video is submitted, the API publishes a task to a message queue rather than processing it immediately, allowing the tree detection pipeline to run asynchronously and scalably in the background. This pipeline analyzes the incoming content, estimates the location of each tree, and prevents duplicates, subsequently storing the results in a data layer comprising a relational database with geospatial support, an object storage system for the original images and videos, and a non-relational database for metadata and processing status.

---

## 3. 📝 Task Assignments
- **Marcos** - High-level architecture diagrams and diagrams of the model retraining process to be used
- **Maria**/**Francisco** - Based on what was discussed in the meeting, draft a comprehensive document on project context, problems, goals, tasks, and expected results to serve as the foundation for the entire project development and for creating the slides.
- **Inês** - Update the documentation website to include the task schedule for the first semester of project development, presentations from the two meetings held so far, and a display of all information and deliverables gathered for the first milestone.