# Lab Task 3 - User Registration API

Standalone NestJS project implementing DTO-based registration validation.

## Run

```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:3000` by default.

## Postman demonstrations

Import `postman/Lab-Task-3-Registration.postman_collection.json` into Postman. It contains the five required requests and status assertions. Run the API first, then run the collection. A valid request returns `201 Created`; invalid email, weak password, age below 18, and an unexpected `isAdmin` property each return `400 Bad Request`.

The response includes the user's full name, email, age, and account type. It never returns the submitted password.
