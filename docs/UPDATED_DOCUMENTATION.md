```markdown
# API Documentation

This document provides details on the available API endpoints.

## Configuration

To run this project, you need to set up your environment variables. Copy the `.env.example` file to a new file named `.env` and fill in the required values.

```bash
cp .env.example .env
```

The following variables are required:

-   `GOOGLE_GENAI_USE_VERTEXAI`: Set to `TRUE` to use Vertex AI, or `FALSE` to use the standard Google Generative AI services.
-   `GOOGLE_API_KEY`: Your API key for Google AI.
-   `GOOGLE_CLOUD_LOCATION`: Your Google Cloud project region (e.g., `us-central1`).
-   `GOOGLE_CLOUD_PROJECT`: Your Google Cloud project ID.
-   `PROJECT_ID`: Your Google Cloud project ID.

## Automated Documentation

This project includes an AI-powered agent that automatically updates this documentation. The agent, defined in `ai/autoDocAgent.js`, has been refactored for better modularity and robustness.

### How It Works

1.  **Detects Changes**: The agent runs `git diff HEAD~1 HEAD` to find recent code changes. If no changes are found, it exits.
2.  **Generates Updates**: It sends the code diff and the current documentation to the Google Gemini Pro model, prompting it to intelligently update only the relevant sections.
3.  **Applies Changes**: The AI returns an updated version of the documentation. The script checks if the changes are significant before writing the new content to `docs/UPDATED_DOCUMENTATION.md`.
4.  **Commits and Pushes**: Finally, the agent automatically adds, commits, and pushes the updated documentation file to the repository.

This process, now featuring improved logging and error handling, ensures that the API documentation stays in sync with the source code with minimal manual intervention.

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