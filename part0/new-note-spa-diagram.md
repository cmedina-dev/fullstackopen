Exercise 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    actor Client
    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of Client: Payload sent to server during POST. Form's default functionality prevented with e.preventDefault().
    Server-->>Browser: RESPONSE 201: {"message":"note created"}
    Note right of Server: JavaScript redraws the notes with updated JSON data.
```
