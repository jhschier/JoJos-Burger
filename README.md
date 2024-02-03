# JoJo's Burger - Backend



## Overview
The JoJo's Burger Backend serves as the backbone for a comprehensive restaurant order management application. This system encompasses user authentication, efficient product and category management, seamless order tracking, and leverages both PostgreSQL and MongoDB databases. Developed with Node.js and Express, it follows the MVC (Model-View-Controller) pattern, with an emphasis on the Model and Controller components. Additionally, MongoDB is used for order storage through Mongoose.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [File Uploads](#file-uploads)
- [Middleware](#middleware)
- [Note](#note)

---

## Technologies Used
- **Node.js:** A robust JavaScript runtime for scalable server-side applications.
- **Express:** A minimal and flexible Node.js web application framework.
- **Sequelize:** A promise-based Node.js ORM for PostgreSQL, facilitating relational database model management and migrations.
- **PostgreSQL:** A powerful open-source relational database system.
- **MongoDB:** A NoSQL database employed for storing order-related data, with Mongoose as the ODM (Object-Document Mapper).
- **JWT (JSON Web Tokens):** Ensures secure user authentication and authorization.
- **Yup:** A JavaScript schema builder aiding in value parsing and validation.
- **Multer:** A middleware proficient in handling file uploads.
- **Docker:** Utilized for containerization and efficient management of PostgreSQL database instances.
- **Postman:** A popular API testing tool instrumental for validating requests and responses.
- **Postbird:** A PostgreSQL client for seamless database management and inspection.
- **MongoDB Compass:** A MongoDB client offering a visual interface for exploration and interaction with MongoDB databases.
- **Yarn:** A fast, reliable, and secure dependency manager for Node.js.

---

## Getting Started
1. **Clone the repository:** `git clone https://github.com/jhschier/JoJos-Burger.git`
2. **Install dependencies:** `yarn install`
3. **Set up a PostgreSQL database:** Configure the connection in the `database.js` file.
4. **Create necessary tables and migrations using Sequelize:** `yarn sequelize db:migrate`
5. **Set up a MongoDB database:** Configure the connection in the `Order.js` schema file.
6. **Run the application:** `yarn dev`

---

## API Endpoints
- **/users:** 
  - **POST:** Create a new user.
- **/sessions:** 
  - **POST:** Authenticate and log in a user.
- **/products:** 
  - **POST:** Create a new product.
  - **GET:** Retrieve all products.
  - **PUT:** Update a product.
- **/categories:** 
  - **POST:** Create a new category.
  - **GET:** Retrieve all categories.
  - **PUT:** Update a category.
- **/orders:** 
  - **POST:** Place a new order.
  - **GET:** Retrieve all orders.
  - **PUT:** Update an order.

---

## Authentication
The system employs JWT for user authentication. Users are categorized as admins or normal users. Admins have authority over product and category management, while normal users can place orders. The JWT token is included in most routes (products, categories, and orders) to prevent third parties from accessing information about purchases and orders from other users.

---

## File Uploads
Multer is utilized to manage file uploads. Product and category images are stored in the `uploads` directory.

---

## Middleware
The application incorporates middleware for JWT-based authentication, ensuring secure access to routes requiring authorization.

---

## Note
- The current repository focuses on the backend (Model and Controller) aspects. The frontend (View) is being developed separately using React.
- This README provides a high-level overview. Follow the setup steps in the "Getting Started" section and configure the necessary databases and dependencies accordingly.

