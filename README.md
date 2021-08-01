# Maintain Your Recipes!

This project was created as a place for you to upload and maintain different recipes you may have, particularly secret ones!

## Installation

- Clone from the master branch
- execute `npm install`
- execute `yarn start` or `npm start` to run the website

## Usage

When on the website you will be greeted with a login and signup page. Once you have created or logged into your user, you will see a base set or recipies. You can edit or delete them and add your own recipies if you choose. We also have a search bar if you want to locate that special recipe!

## Contributing

For any changes you decide to make, first create an issue and branch prefaced with the type of issue you will be fixing. For example, if you have an enhancement your branch should be named `enhancement/enhancement-title`. Lastly, just make a pull request and select a reviewer.

## Architecture of Code

- `App.js` is used to render different components using Private Routes and React Router.
- Components that take up an entire page are located in the folder `views`. Some examples would be the login page, signin page, and home page.
- The other react components are stored in the `components` folder that you can navigate.
- A majority of the styling for the website was done using Material UI.

# Base URL: https://secret-family-recipes6.herokuapp.com

Below are the endpoints used in our backend.

## Login and Register

| Type | Endpoint           | Description         | Protected | Required                  | Returns |
| ---- | ------------------ | ------------------- | --------- | ------------------------- | ------- |
| POST | /api/auth/register | Create new user     | No        | username, password, email |         |
| POST | /api/auth/login    | Login existing user | No        | username, password        |         |

### Token is required for all endpoints listed below

## recipes

| Type | Endpoint              | Description                                 | Protected | Required                         | Returns |
| ---- | --------------------- | ------------------------------------------- | --------- | -------------------------------- | ------- |
| GET  | /api/recipes/user/:id | Fetch all Recipes by user_id                | Yes       | valid user_id                    |         |
| GET  | /api/recipes/:id      | Fetch one Recipe by recipe_id               | Yes       | valid recipe_id                  |         |
| POST | /api/recipes/user/:id | Add a new user Recipe by user_id            | Yes       | valid user_id, recipe_name       |         |
| POST | /api/recipes/:id/inst | Add an Instruction to a Recipe by recipe_id | Yes       | valid recipe_id                  |         |
| POST | /api/recipes/:id/ing  | Add an ingredient to a Recipe by recipe_id  | Yes       | valid recipe_id, ingredient_name |         |
| PUT  | /api/recipes/:id      | Update a Recipe by recipe_id                | Yes       | valid recipe_id, recipe_name     |         |
| DEL  | /api/recipes/:id      | Delete a Recipe by recipe_id                | Yes       | valid recipe_id                  |         |

## ingredients

| Type | Endpoint     | Description                                    | Protected | Required            | Returns |
| ---- | ------------ | ---------------------------------------------- | --------- | ------------------- | ------- |
| GET  | /api/ing/:id | Get an Ingredient by ingredient_id             | Yes       | valid ingredient_id |         |
| PUT  | /api/ing/:id | Update an existing Ingredient by ingredient_id | Yes       | valid ingredient_id |         |
| DEL  | /api/ing/:id | Remove an existing Ingredient by ingredient_id | Yes       | valid ingredient_id |         |

## instructions

| Type | Endpoint      | Description                                      | Protected | Required             | Returns |
| ---- | ------------- | ------------------------------------------------ | --------- | -------------------- | ------- |
| GET  | /api/inst/:id | Get an existing Instruction by instruction_id    | Yes       | valid instruction_id |         |
| PUT  | /api/inst/:id | Update an existing Instruction by instruction_id | Yes       | valid instruction_id |         |
| DEL  | /api/inst/:id | Remove an existing Instruction by instruction_id | Yes       | valid instruction_id |         |

##### \*\*perhaps for administrative use

## users

| Type | Endpoint       | Description                        | Protected | Required      | Returns                         |
| ---- | -------------- | ---------------------------------- | --------- | ------------- | ------------------------------- |
| GET  | /api/users/    | Get all Users                      | Yes       | nothing       |                                 |
| GET  | /api/users/:id | Get User by user_id                | Yes       | valid user_id | (nothing returns on invalid id) |
| xPUT | /api/users/:id | Update an existing user by user_id | Yes       | valid user_id |                                 |
| DEL  | /api/users/:id | Remove an existing user by user_id | Yes       | valid user_id |                                 |
