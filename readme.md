# YAUS 
### *Yet another URL Shortener*
A simple in-memory URL shortener, made for fun.

### Development
```sh
npm ci
npm run dev
```

### Usage
![Demo](https://user-images.githubusercontent.com/37233846/185725646-2d3d0e14-6082-44a0-8e30-9aabfc7d96ec.gif)

### API Overview

```
POST /shorten

Request: 
- headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
- body: { url: string },

Response:
  - 400
  - 200
    - Content-Type: application/json; charset=utf-8,
    - body: { shortened: string }
```

```
GET /:id

Response:
  - 302
    - Redirects to saved url
  - 400
    - URL not found
```
