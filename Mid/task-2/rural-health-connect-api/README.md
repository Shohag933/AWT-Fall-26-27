# Rural Health Connect API (NestJS Lab Task 2)

## Student details
- Name: ______
- ID: ______
- Section: ______

## About
A NestJS REST API for the Rural Health Connect project. It has three entities:
**Patient**, **Doctor** and **ClinicAdmin**. Data is stored in PostgreSQL with TypeORM.
Tables are created with database migrations.

## Requirements
Node.js 22 or newer, pnpm, PostgreSQL.

## Setup and run
1. Create an empty PostgreSQL database named `rural_health_connect`.
2. Copy the sample settings: `cp .env.example .env`
3. Open `.env` and set `DB_PASSWORD` to your PostgreSQL password.
4. Install the packages: `pnpm install`
5. Create the tables: `pnpm migration:run`
6. Start the app: `pnpm start:dev` (runs on http://localhost:5001)

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | /patients | Create a patient |
| GET | /patients | List all patients |
| POST | /doctors | Create a doctor (verificationStatus starts as pending) |
| GET | /doctors | List all doctors |
| POST | /clinic-admins | Create a clinic admin (status starts as active) |
| GET | /clinic-admins | List all clinic admins |

Required fields use `@IsNotEmpty()`. An empty field returns 400 Bad Request,
and a repeated phone number returns 409 Conflict.