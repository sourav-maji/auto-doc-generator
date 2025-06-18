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
```