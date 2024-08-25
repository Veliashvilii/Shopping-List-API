# Shopping-List-API

The **Shopping-List-API** is a Node.js application designed to manage shopping lists collaboratively. The API supports user authentication, real-time updates via WebSockets, and CRUD operations on shopping lists. The backend is built with Express.js, MongoDB, and Socket.io, ensuring a scalable and responsive experience.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Shopping Lists](#shopping-lists)
  - [User Management](#user-management)
- [Socket Events](#socket-events)
- [Dependencies](#dependencies)
- [Testing with Postman](#testing-with-postman)
- [License](#license)

## Features

- **User Authentication:** Register, login, and manage user profiles securely using JWT.
- **Shopping List Management:** Create, retrieve, update, and delete shopping lists.
- **Real-Time Collaboration:** Use Socket.io for real-time updates when items are added or removed from shopping lists.
- **Password Recovery:** Forgot password functionality.
- **Secure:** Validation and secure handling of user data.

## Project Structure

```
Shopping-List-API/
│
├── App/
│   ├── index.js               # Entry point of the application
│
├── Config/
│   ├── Database.js            # MongoDB connection configuration
│
├── Controllers/
│   ├── Auth/
│   │   ├── ForgotPassword.js  # Controller for handling forgotten passwords
│   │   ├── Login.js           # Controller for user login
│   │   ├── Register.js        # Controller for user registration
│   ├── Shopping List/
│   │   ├── CreateShoppingList.js  # Controller for creating shopping lists
│   │   ├── DeleteShoppingList.js  # Controller for deleting shopping lists
│   │   ├── GetShoppingList.js     # Controller for retrieving shopping lists
│   ├── User/
│       ├── GetMe.js               # Controller for getting user profile
│       ├── GetMyShoppingLists.js  # Controller for retrieving user's shopping lists
│       ├── UpdateMyPassword.js    # Controller for updating user password
│       ├── UserUpdateMe.js        # Controller for updating user profile
│
├── Middleware/
│   ├── Auth.js                # JWT authentication middleware
│
├── Models/
│   ├── Auth/
│   │   ├── Auth.js            # User authentication schema
│   ├── Shopping List/
│       ├── ShoppingList.js    # Shopping list schema
│
├── Routers/
│   ├── Auth/
│   │   ├── ForgotPassword.js  # Routes for password recovery
│   │   ├── Login.js           # Routes for login
│   │   ├── Register.js        # Routes for registration
│   ├── Shopping List/
│   │   ├── CreateShoppingList.js  # Routes for creating shopping lists
│   │   ├── DeleteShoppingList.js  # Routes for deleting shopping lists
│   │   ├── GetShoppingList.js     # Routes for retrieving shopping lists
│   ├── User/
│       ├── GetMe.js               # Routes for retrieving user profile
│       ├── GetMyShoppingLists.js  # Routes for retrieving user's shopping lists
│       ├── UpdateMyPassword.js    # Routes for updating user password
│       ├── UserUpdateMe.js        # Routes for updating user profile
│
├── Sockets/
│   ├── Events/
│   │   ├── AddItem.js         # Event handler for adding items to shopping lists
│   │   ├── Connection.js      # Event handler for managing socket connections
│   │   ├── RemoveItem.js      # Event handler for removing items from shopping lists
│   ├── Socket.js              # Main socket handler
│
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── package-lock.json
├── package.json               # Project dependencies and scripts
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/shopping-list-api.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd shopping-list-api
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT = 3000
MONGO_URI = your_mongodb_connection_string
SECRET_TOKEN = your_jwt_secret_token
```

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user.
- **POST** `/api/auth/login` - Login with user credentials.
- **POST** `/api/auth/forgot-password` - Handle password recovery.

### Shopping Lists

- **POST** `/api/create-shopping-list` - Create a new shopping list.
- **GET** `/api/shopping-list` - Retrieve an existing shopping list.
- **DELETE** `/api/shopping-list` - Delete a shopping list.

### User Management

- **GET** `/api/me` - Retrieve user profile.
- **GET** `/api/my-shopping-lists` - Retrieve all shopping lists for the logged-in user.
- **PUT** `/api/update-my-password` - Update user password.
- **PUT** `/api/me` - Update user profile.

## Socket Events

- **`connection`** - Triggered when a user connects.
- **`addItem`** - Triggered to add an item to a shopping list.
- **`removeItem`** - Triggered to remove an item from a shopping list.
- **`disconnect`** - Triggered when a user disconnects.

## Dependencies

- **bcryptjs**: Password hashing and verification.
- **cors**: Middleware for enabling CORS.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **jsonwebtoken**: For creating and verifying JWT tokens.
- **mongoose**: MongoDB object modeling tool.
- **socket.io**: Real-time bidirectional event-based communication.
- **uuid**: For generating unique identifiers.

## Testing with Postman

To test the API using Postman, follow these steps:

1. **Import the API collection**:
   - You can import the provided [Postman collection](./Shopping-List-API.postman_collection.json) into your Postman application.

2. **Set up your environment**:
   - Configure your environment variables in Postman, including the `BASE_URL` (e.g., `http://localhost:3000`) and `TOKEN`.

3. **Authenticate**:
   - Use the `/api/auth/login` endpoint to log in and retrieve a token.
   - Set the `TOKEN` variable in your environment to the token value.

4. **Test the endpoints**:
   - Test each endpoint by selecting it from the imported collection and clicking "Send". Ensure that you include the necessary headers and body parameters.

5. **Socket.io testing**:
   - Use the [Postman WebSocket](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/websocket/) feature to test real-time events such as `addItem` and `removeItem`. Connect to your server (e.g., `ws://localhost:3000`) and emit events with the required data.

## License

This project is licensed under the ISC License. See the [ISC License](https://opensource.org/licenses/ISC) for more details.

The ISC License is a permissive open-source license that is functionally similar to the MIT License. It allows for software to be freely used, modified, and distributed, provided that the license and copyright notice are included in all copies or substantial portions of the software.

### Key Points of ISC License

- **Permissions:** Allows for copying, modifying, merging, publishing, distributing, sublicensing, and selling the software.
- **Conditions:** Must include the original copyright notice and license text in all copies or substantial portions of the software.
- **Limitation:** The software is provided "as is," without warranty of any kind.
