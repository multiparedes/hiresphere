# HireSphere 

---

### **Objective**:

✨ Develop a Job Board API that facilitates interaction between employers and job seekers, allowing employers to post jobs and manage applications, while job seekers can search, apply, and track their job applications

---

### **Actors**:
1. **Admin**: 👨‍💻 Oversees the system, manages users and postings.
2. **Employer**: 💼 Posts jobs, views applications, and manages hiring processes.
3. **Applicant**: 🌐 Searches for jobs, applies, and tracks application statuses.

---

### **Core Features**:

#### **Employer Capabilities**:
- **Job Posting**:
    - Create job posts with details (title, description, skills, salary, location, type, etc.).
    - Update or delete job postings.
- **Application Management**:
    - View applications for a specific job.
    - Update application status (e.g., Pending, Accepted, Rejected).

#### **Applicant Capabilities**:
- **Job Search**:
    - Browse and search for jobs using filters (e.g., job type, salary, location).
    - View detailed job descriptions.
- **Application Management**:
    - Apply to jobs with resume and optional cover letter.
    - Track the status of their applications.

#### **Admin Capabilities**:
- **User Management**:
    - View and moderate user accounts (Employers and Applicants).
- **Job Moderation**:
    - Approve, reject, or delete job postings.
- **Application Review**:
    - Monitor and manage all applications.

---

### **System Constraints**:
1. **Authentication**:
    - All users must log in to access features.
    - Employers and applicants have distinct roles.
2. **File Handling**:
    - Resumes and company logos must be securely stored.
3. **Search and Filters**:
    - Optimize job searches for quick filtering by title, location, and salary range.

---

### **Extensions (Optional)**:
- **Analytics**:
    - Track the number of applications per job.
    - Provide employers with insights into hiring trends.
- **Notifications**:
    - Email notifications for applicants when application statuses change.
    - Alerts for employers when new applications are submitted.
