```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: 201 Note created
    
     Note right of browser: The browser executes JavaScript from the SPA
    
```
