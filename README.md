# Library Management System API

# lib-track-backend

## Description

The Library Management System API is a backend API designed to streamline library operations, allowing library staff and members to manage books, memberships, and borrowing activities. It provides essential CRUD operations and endpoints for borrowing and returning books, making library workflows efficient and organized.

## Live URL

[Library Management System API Live URL](https://lib-track-backend.vercel.app)

## Technology Stack & Packages

- **Backend Framework**: Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Runtime Environment**: Express.js
- **UUID Generation**: UUID for unique identification of records
- **Date Handling**: JavaScript Date and Moment.js for overdue calculations (if used)

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/abuhosain/lib-track-backend.git
   cd lib-track-backend

   ```

2. **Run this project**:
   ```bash
   yarn dev
   ```

## API Endpoints

### Book Management

- **Create**: `POST /api/books`
- **Read All**: `GET /api/books`
- **Read by ID**: `GET /api/books/:bookId`
- **Update**: `PUT /api/books/:bookId`
- **Delete**: `DELETE /api/books/:bookId`

### Member Management

- **Create**: `POST /api/members`
- **Read All**: `GET /api/members`
- **Read by ID**: `GET /api/members/:memberId`
- **Update**: `PUT /api/members/:memberId`
- **Delete**: `DELETE /api/members/:memberId`

### Borrow & Return Management

- **Borrow a Book**: `POST /api/borrow`
- **Return a Book**: `POST /api/return`

### Overdue Borrow List

- **Get Overdue List**: `GET /api/borrow/overdue`
