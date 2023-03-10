Here is a simple flow chart:

```mermaid
sequenceDiagram
    actor Client
    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server-->>Browser: 302 REDIRECT https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of Server: The POST data has been pushed into the notes array
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server->>Browser: HTML document
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: CSS Stylesheet
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server->>Browser: JavaScript
    Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Note right of Server: This is a request generated from the main.js file XHTTP
    Server->>Browser: JSON data with updated notes array
```
