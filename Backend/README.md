# CRM Backend Boilerplate

A Node.js/Express backend boilerplate for Customer Relationship Management (CRM) system with authentication, customer management, leads, and opportunities.

## Features

- **Authentication**: JWT-based authentication with user registration and login
- **User Management**: Role-based access control (admin, manager, sales_rep)
- **Customer Management**: CRUD operations for customers with notes and tags
- **Lead Management**: Lead tracking with conversion to customers
- **Opportunity Management**: Sales opportunity tracking with stages and probabilities
- **Real-time Communication**: Socket.io integration for real-time updates
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Real-time**: Socket.io
- **Environment**: dotenv

## Project Structure

```
Backend/src/
├── config/
│   └── database.js          # Database connection configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── customerController.js # Customer CRUD operations
│   ├── leadController.js    # Lead management
│   └── opportunityController.js # Opportunity management
├── middleware/
│   └── auth.js              # Authentication middleware
├── models/
│   ├── User.js              # User schema
│   ├── Customer.js          # Customer schema
│   ├── Lead.js              # Lead schema
│   └── Opportunity.js       # Opportunity schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── customers.js         # Customer routes
│   ├── leads.js             # Lead routes
│   └── opportunities.js     # Opportunity routes
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── server.js                # Main server file
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd Backend/src
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/crm
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

4. Start MongoDB service (if using local MongoDB)

5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Customers
- `GET /api/customers` - Get all customers (protected)
- `GET /api/customers/:id` - Get customer by ID (protected)
- `POST /api/customers` - Create new customer (protected)
- `PUT /api/customers/:id` - Update customer (protected)
- `DELETE /api/customers/:id` - Delete customer (protected)
- `POST /api/customers/:id/notes` - Add note to customer (protected)

### Leads
- `GET /api/leads` - Get all leads (protected)
- `GET /api/leads/:id` - Get lead by ID (protected)
- `POST /api/leads` - Create new lead (protected)
- `PUT /api/leads/:id` - Update lead (protected)
- `DELETE /api/leads/:id` - Delete lead (protected)
- `POST /api/leads/:id/convert` - Convert lead to customer (protected)
- `POST /api/leads/:id/notes` - Add note to lead (protected)

### Opportunities
- `GET /api/opportunities` - Get all opportunities (protected)
- `GET /api/opportunities/:id` - Get opportunity by ID (protected)
- `POST /api/opportunities` - Create new opportunity (protected)
- `PUT /api/opportunities/:id` - Update opportunity (protected)
- `DELETE /api/opportunities/:id` - Delete opportunity (protected)
- `POST /api/opportunities/:id/notes` - Add note to opportunity (protected)
- `GET /api/opportunities/customer/:customerId` - Get opportunities by customer (protected)

## Data Models

### User
- name: String (required)
- email: String (required, unique)
- password: String (required, hashed)
- role: String (admin/manager/sales_rep)
- isActive: Boolean

### Customer
- name: String (required)
- email: String (required, unique)
- phone: String
- company: String
- address: Object
- industry: String
- website: String
- status: String (active/inactive/prospect)
- assignedTo: ObjectId (User reference)
- notes: Array of note objects
- tags: Array of strings

### Lead
- name: String (required)
- email: String (required)
- phone: String
- company: String
- source: String (website/referral/social_media/cold_call/trade_show/other)
- status: String (new/contacted/qualified/proposal/negotiation/closed_won/closed_lost)
- value: Number
- assignedTo: ObjectId (User reference)
- notes: Array of note objects
- followUpDate: Date
- tags: Array of strings

### Opportunity
- title: String (required)
- description: String
- customer: ObjectId (Customer reference, required)
- value: Number (required)
- currency: String
- stage: String (prospecting/qualification/proposal/negotiation/closed_won/closed_lost)
- probability: Number (0-100)
- expectedCloseDate: Date
- assignedTo: ObjectId (User reference)
- products: Array of product objects
- notes: Array of note objects
- tags: Array of strings

## Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Development

- Use `npm run dev` for development with auto-restart
- Use `npm start` for production
- MongoDB should be running locally or update `MONGODB_URI` for cloud database

## Security Notes

- Change the `JWT_SECRET` in production
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Use environment variables for sensitive data

## Next Steps

1. Add input validation with libraries like Joi or express-validator
2. Implement rate limiting
3. Add comprehensive error handling
4. Create unit and integration tests
5. Add API documentation with Swagger
6. Implement file upload for customer documents
7. Add email notifications
8. Create dashboard analytics endpoints