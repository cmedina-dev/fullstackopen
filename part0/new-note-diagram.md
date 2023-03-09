Here is a simple flow chart:

```mermaid
sequenceDiagram
    actor Client
    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server-->>Browser: 302 REDIRECT https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of Server: The POST data has been pushed into the notes array
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    
```
