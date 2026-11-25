# Product Management API (NestJS Lab Task 1)

## Student details
- SL: ______
- Name: ______
- ID: ______
- Section: ______

## About
A small NestJS REST API for a shop. It manages **products** and **employees**
(create, get all, get one, update, delete). Data is saved in PostgreSQL with TypeORM.
The password field of an employee is a dummy value, as the task says.

## Requirements
- Node.js 22 or newer
- pnpm (install with `npm install -g pnpm` if you do not have it)
- PostgreSQL

## Setup and run
1. Create an empty PostgreSQL database named `product_management`.
2. Copy the sample settings: `cp .env.example .env`
3. Open `.env` and set `DB_PASSWORD` to your PostgreSQL password.
4. Install the packages: `pnpm install`
5. Create the tables: `pnpm migration:run`
6. Start the app: `pnpm start:dev` (it runs on http://localhost:5001)

## Endpoints

### Products (fields: id, name, category, price, quantity)
| Method | Endpoint | Description |
|---|---|---|
| POST | /products | Create and save a product |
| GET | /products | Return all products |
| GET | /products/:id | Return one product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

### Employees (fields: id, name, email, phone, password, age, yearsOfWorking)
| Method | Endpoint | Description |
|---|---|---|
| POST | /employees | Create and save an employee |
| GET | /employees | Return all employees |
| GET | /employees/:id | Return one employee |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

Wrong data gives 400 Bad Request, and an unknown id gives 404 Not Found.

## Screenshots
Postman screenshots are in the `screenshots` folder: `01-create.png` to
`07-confirm-delete.png` for products, and `employee-01-create.png` to
`employee-07-confirm-delete.png` for employees.