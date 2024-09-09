# Food Truck Server

Welcome to the Food Truck Server project! This is a simple REST API that allows you to manage food trucks and comments. The server is built using Node.js, Express, TypeScript, Postgres, and TypeORM. The project follows the Clean Architecture pattern to maintain a clear separation of concerns and make the codebase more maintainable and testable. The database is populated with a csv file containing food truck data, and the server provides endpoints to retrieve food trucks, create comments, and delete comments.

## Why Clean Architecture?

My initial thought was to buld a REST-API based on MVC(Model-View-Controller), but I decided to use Clean Artichture, although it may be a bit overkill for something so simple, it turns out to be a very interesting exercise. Some reasons why to use this architecture are:

- Maintainable: Easier to update and extend without breaking existing functionality.
- Testable: Core logic can be tested independently of external systems.
- Flexible: Adapt to changes, like swapping frameworks or databases, with minimal impact.
- Decoupled: Clear boundaries make the code easier to understand and manage.

## Typescript vs Javascript

Once the architecture was defined, I thought that typescript, being a super set of javascript that adds typing, would be better for me to implement this server and also be a little more strict. Reasons to choose typescript instead of javascript:

- Type Safety: Catches errors at compile time, reducing runtime bugs.
- Better Tooling: Enhanced IDE support with autocomplete, navigation, and refactoring.
- Readability and Maintenance: Type annotations make the code clearer and easier to maintain.
- Scalability: Supports interfaces, generics, and better code organization for growing projects.
- Error Detection: Finds issues early, leading to fewer production bugs.
- Modern Features: Use the latest JavaScript features with backward compatibility.
- Consistent Codebase: Enforces coding standards, improving overall code quality.

## Postgres & TypeORM

Postgres is a SQL database that I have experience with and it adapts well to what I had in mind. I also decided to use it with TypeORM to use the tools it has to improve the development experience.

### Database Design

| Table        | Column Name       | Data Type     |
| ------------ | ----------------- | ------------- |
| food-trucks  | id                | String        |
|              | applicant         | String        |
|              | locationDescri    | String        |
|              | address           | String        |
|              | foodItems         | String        |
| ------------ | ----------------- | ------------- |
| Comments     | id                | GUID          |
|              | foodtruckId       | String        |
|              | comment           | Text          |
|              | createdAt         | Timestamp     |
|              | updatedAt         | Timestamp     |

## Thinks I would like to improve or add with more time

- Add a user entity to the database to associate comments with users. Implement authentication and authorization using JWT.
- Add more unit and integration tests for the services and controllers to ensure the code works as expected, take advantage of the clean architecture to make it easier to test, I can decouple the business logic from the external systems and mock dependencies. Also implement an testing database to run the tests.

## Technologies

- Node.js
- Express
- TypeScript
- Postgres
- TypeORM

## Requirements

To run this project, you will need to have the following installed:

- Node.js
- NPM
- Postgres

## Installation and local setup

To get started with the Food Truck Server, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Delete .sample from .env.sample and fill in the required environment variables. Make sura that you have a postgres database created and the connection is correct.
4. Install the required dependencies by running `npm install`.
5. Run the seed script to populate the database with sample data by running `npm run seed`.
6. Start the server by running `npm dev`.

## Building and Deploy for production (CI/CD)

Execute the following commands in order in your pipeline in order to deploy the server:

1. Add the required environment variables to the server.
2. Install the required dependencies by running `npm install`.
3. Run linting and tests by running `npm run lint` and `npm run test`.
4. Run the seed script to populate the database with sample data by running `npm run seed`.
5. Build the project for production by running `npm run build`.

This will compile the TypeScript code into JavaScript and output it to the `dist` directory. You can serve that build code in whatever environment you choose, remembering to set the required environment variables.

## Usage

Once the server is up and running, you can access the following APIs:

- `/food-trucks`: GET Retrieve a list of all food trucks.
- `/food-trucks/{id}`: GET Retrieve details of a specific food truck.
- `/comments/food-truck/:foodTruckId`: POST Create a new comment for a specific food truck.
- `/comments/:id`: DELETE Delete a specific comment.

Feel free to explore and interact with the APIs using your preferred HTTP client.
