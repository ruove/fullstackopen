```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: 302 URL redirect
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: Notes-page reload
    browser->>server: GET main.css/main.js/data.json
    
    

```
