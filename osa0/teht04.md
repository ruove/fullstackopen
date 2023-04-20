```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server<--browser: 302
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    
    

```
