# Poke TCG API

A simple NestJS API with layered architecture (controller, service, model) for Pokemon TCG cards.

## Prerequisites

1. **Install Node.js:**

   - **Windows:**
     Download and install from [nodejs.org](https://nodejs.org/)

   - **macOS:**
     ```bash
     brew install node
     ```
     (Requires [Homebrew](https://brew.sh/))

   - **Ubuntu/Linux:**
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

## Getting Started

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npm run start
   ```
   Or for hot-reload during development:
   ```bash
   npm run start:dev
   ```

## Example Request

Once the server is running, you can access the API endpoints exposed by the controller. For example, to get a random Pokemon card by name and category, open your browser and go to:

```
http://localhost:3000/card/pokemon/random?name=pikachu&category=Pokemon
```

- Replace `pikachu` with the card name you want.
- Replace `Pokemon` with the category you want. Available categories: `Pokemon`, `Energy`, `Trainer`.

You should see a JSON response from the API, e.g.:

```json
[
  {
    "id": "basep-1",
    "localId": "1",
    "name": "Pikachu",
    "image": "https://assets.tcgdex.net/en/base/basep/1"
  },
  {
    "id": "xyp-XY95",
    "localId": "XY95",
    "name": "Pikachu",
    "image": "https://assets.tcgdex.net/en/xy/xyp/XY95"
  }
]
```