A new section describing the updated functionality of the `autoDocAgent.js` has been added. The existing documentation on environment variables remains unchanged as it is still relevant.

### Automated Documentation Agent (`autoDocAgent.js`)

The `autoDocAgent.js` script has been enhanced to perform intelligent, incremental updates to the technical documentation. Previously, the agent would generate documentation from scratch. The new workflow is as follows:

1.  **Reads Git Diff**: The agent retrieves the latest code changes using `git diff`.
2.  **Loads Existing Documentation**: It now reads the current `docs/UPDATED_DOCUMENTATION.md` file to understand the existing content.
3.  **Generates Intelligent Update**: Both the git diff and the existing documentation are sent to the Gemini AI model. The model is specifically prompted to **modify only the relevant sections** of the documentation, preserving the existing content that is still valid.
4.  **Writes and Commits**: The updated Markdown is written back to the file, and the changes are automatically committed and pushed to the repository.

This change ensures that documentation evolves with the codebase without losing context or requiring complete rewrites for minor changes.

### Environment Variable Configuration

The environment variable setup has been updated to support both the Google AI Gemini API and Vertex AI. The `.env` file configuration has changed from a single `GEMINI_API_KEY` to a more detailed setup.

The previous `GEMINI_API_KEY` variable is now deprecated.

Update your environment configuration file (e.g., `.env`) with the following variables:

```env
GOOGLE_GENAI_USE_VERTEXAI=FALSE
GOOGLE_API_KEY=<<your API KEY>>
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_PROJECT=<<your project id>>
PROJECT_ID=<<your project id>>
```

**Variable Explanations:**

*   `GOOGLE_GENAI_USE_VERTEXAI`: Set to `TRUE` to use Vertex AI or `FALSE` to use the standard Google AI Generative Language API (Gemini).
*   `GOOGLE_API_KEY`: Your API key for authenticating with Google AI services. This replaces the old `GEMINI_API_KEY`.
*   `GOOGLE_CLOUD_LOCATION`: The specific Google Cloud region for your project (e.g., `us-central1`).
*   `GOOGLE_CLOUD_PROJECT`: Your Google Cloud project ID.
*   `PROJECT_ID`: Your Google Cloud project ID.