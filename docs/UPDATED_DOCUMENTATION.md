Based on the provided diff, the environment variable configuration has been updated.

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