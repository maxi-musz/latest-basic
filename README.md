# HNG Stage 0 Backend Task

## Description
This is a public API that returns the following information in JSON format:
- Registered email address
- Current datetime in ISO 8601 format
- GitHub URL of the project's codebase

## API Endpoint
- **GET** `/api`

## Response Format
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/your-username/your-repo-name"
}