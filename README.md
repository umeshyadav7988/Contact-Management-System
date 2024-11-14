# Contact Management System

A full-stack Contact Management System built with a **ReactJS** frontend using **Material UI (MUI)** components and a **Node.js** backend connected to a **MySQL** database.

## Features

### Frontend (ReactJS with Material UI)
- **Contact Form**: Capture new contacts with fields for First Name, Last Name, Email, Phone Number, Company, and Job Title.
- **Contacts Table**: Display all contacts with columns for each attribute, plus action buttons for editing and deleting contacts.
- **Pagination & Sorting**: Enhance usability of the contacts table with pagination and sorting options.

### Backend (Node.js and Express)
- **API Endpoints**:
  - `POST /contacts`: Create a new contact.
  - `GET /contacts`: Retrieve all contacts.
  - `PUT /contacts/:id`: Update a contact by ID.
  - `DELETE /contacts/:id`: Delete a contact by ID.
- **Error Handling**: Validate required fields, handle duplicate entries, and provide appropriate error messages for API failures.

### Database (MySQL)
- **Data Storage**: Contact information is stored in a MySQL database with constraints to ensure data integrity.

## Installation

### Prerequisites
- **Node.js** and **npm** installed
- **MySQL** installed and configured

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Contact-Management-System.git
   cd Contact-Management-System
   ```

2. **Install Dependencies**:

   - **Backend**:
     ```bash
     cd server
     npm install
     ```

   - **Frontend**:
     ```bash
     cd ../client
     npm install
     ```

3. **Configure MySQL Database**:
   - Create a MySQL database (e.g., `contacts_db`).
   - Update the database credentials in the backend configuration file (e.g., `server/config.js`).

4. **Run the Application**:

   - **Backend**:
     ```bash
     cd ../server
     npm start
     ```

   - **Frontend**:
     ```bash
     cd ../client
     npm start
     ```

5. **Access the Application**:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Project Structure

```
Contact-Management-System
├── client           
│   ├── public
│   └── src
│       ├── ContactForm.jsx
│       ├── ContactsTable.jsx
│       └── App.js
├── server             
│   ├── db.js      
│   └── server.js
└── README.md
```

## Technologies Used

- **Frontend**: ReactJS, Material UI
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Other**: Axios, dotenv


