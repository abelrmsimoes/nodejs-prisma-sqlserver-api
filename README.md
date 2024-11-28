# Node.js + Prisma + SQL Server API

This is a case study project demonstrating the integration between Node.js, Prisma ORM, and SQL Server.

## 🚀 Technologies

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- SQL Server

## 📋 Prerequisites

- Node.js installed
- SQL Server instance running

## 🔧 Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a `.env` file based on the `.env.example` file
4. Run the migrations with `npx prisma migrate dev`

## 📦 Running the application

1. Start the application with `npm run start`
2. The application will be available at `http://localhost:3000`

## 📡 API Endpoints

Clientes
- GET `/clientes`: List all customers.
- GET `/clientes/:id`: Get a specific customer by ID.
- POST `/clientes`: Add a new customer.
- PUT `/clientes/:id`: Update a specific customer by ID.
- DELETE `/clientes/:id`: Delete a specific customer by ID.

## 📝 Request Body Example

```json
{
  "Nome": "John Doe",
  "Idade": 30,
  "UF": "PR"
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

