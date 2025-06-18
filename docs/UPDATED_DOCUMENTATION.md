```markdown
# API Documentation

This document provides details on the available API endpoints.

## API Endpoints

### `GET /health`

Checks the health of the server. Returns a status message indicating the server is running.

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "message": "Server is up and running"
  }
  ```

### User Endpoints

Endpoints for managing user resources. The base path is `/api/users`. These operations are based on the sample `userRoutes.js` and `userController.js` files.

#### `GET /api/users`

Retrieves a list of all users.

**Success Response:**

- **Code:** `200 OK`
- **Content:** An array of user objects.
  ```json
  [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
  ```

#### `POST /api/users`

Creates a new user.

**Request Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

**Success Response:**

- **Code:** `201 Created`
- **Content:** The newly created user object.

#### `GET /api/users/:id`

Retrieves a single user by their ID.

**Success Response:**

- **Code:** `200 OK`
- **Content:** The requested user object.

#### `PUT /api/users/:id`

Updates an existing user's information by their ID.

**Request Body:**

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com"
}
```

**Success Response:**

- **Code:** `200 OK`
- **Content:** The updated user object.

#### `DELETE /api/users/:id`

Deletes a user by their ID.

**Success Response:**

- **Code:** `204 No Content`

## 🙋‍♂️ Maintainer & 👨‍💻 Author
Sourav Maji — AI Automation Engineer & Backend Developer

[**GitHub**](https://github.com/sourav-maji) | [**Linkedin**](https://www.linkedin.com/in/souravmajiwb/)
```