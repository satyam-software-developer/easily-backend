# Job Portal Website

## Project Overview

This job portal website is built using Node.js, including libraries and modules such as Express and Nodemailer. The project aims to provide a user-friendly platform for recruiters to manage job listings and for job seekers to find and apply for suitable roles.

## Overview of Functionality

- **MVC Architecture:** Implements a Model-View-Controller architecture using ExpressJS.
- **Templating Engine:** Uses EJS for server-side templating to generate dynamic HTML.
- **ES6 Modules:** Maintains code modularity and organization using ES6 modules.
- **User Sessions:** Manages user sessions and tracks the last visit with Express sessions and cookies.
- **Data Handling:** Utilizes in-memory data structures for user and job management operations.

## Key Features

- **Recruiter System:** Login and registration system for recruiters.
- **Job Seeker Interface:** Allows job seekers to view and apply for jobs, providing necessary details.
- **Recruiter Operations:** Enables recruiters to create, update, delete, and view job postings with field validation.
- **Applicant Management:** Recruiters can view and delete all applicants for a job, including their submitted resume files.
- **Email System:** Implements an email system to send confirmation emails to job applicants.
- **Middleware Usage:** Utilizes middleware for authentication, file uploads, and sending confirmation emails.

## API Details

### Routes

- **Homepage:** `/` - Displays the homepage.
- **Jobs Page:** `/jobs` - Shows a list of available jobs.
- **Login Page:** `/login` - Provides the login page.
- **Registration:** `/register` - Handles user registration.
- **Login Post:** `/login` - Processes user login.
- **Logout:** `/logout` - Logs the user out.
- **Post Job Page:** `/postjob` - Displays the page for posting a job (authentication required).
- **Job Details Page:** `/jobs/:id` - Shows details of a specific job.
- **Post Job:** `/postjob` - Handles job posting (authentication required).
- **Apply Job:** `/apply/:id` - Handles job applications, including resume upload.
- **Job Applicants:** `/jobs/applicants/:id` - Displays a list of applicants for a specific job (authentication required).
- **Update Job:** `/update/:id` - Shows the update job view (authentication required).
- **Post Update Job:** `/update/:id` - Handles updating a job (authentication required).
- **Delete Job:** `/delete/:id` - Deletes a job (authentication required).
- **Search Jobs:** `/search/` - Displays search results for jobs.
- **Delete Applicant:** `/applicants/delete/:param` - Deletes a job applicant (authentication required).

### Middleware

- **Error Handling:** Handles invalid routes and errors.
- **File Upload:** Handles file uploads using Multer middleware.
- **Authentication:** Handles user authentication using a custom middleware.
- **Cookie Handling:** Uses middleware to track and set the last visit.

## Project Setup

Below steps have been followed to set up and build the project:

1. Set up an Express.js application with its configurations.
2. Install project dependencies based on the required functionalities.
3. Configure EJS as the templating engine and create views for job seekers and recruiters.
4. Create User and Job models with functions for user and job management.
5. Develop User and Job controllers to handle user authentication, job operations, and applicant management.
6. Implement routes for user and job operations.
7. Set up session-based user authentication for recruiters.
8. Implement middleware for resume uploads, confirmation emails, and tracking visits.
9. Ensure the code is well-documented for easy understanding of functionalities and organization.

## Live Website
- https://easily-job-portal.onrender.com/

## Author

- **Gautam**
- **Github ID:** [gautamuniverse](https://github.com/gautamuniverse)
- **Contact Email:** gautamthapameriid@gmail.com
- **Instagram ID:** [@gautamuniverse.in](https://www.instagram.com/gautamuniverse.in/)
