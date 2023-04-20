```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML
    browser->>server: main.css/spa.js
    server-->>browser: Javascript gets executed
    browser->>server: GET data.json
    server-->>browser: data returned   

```
