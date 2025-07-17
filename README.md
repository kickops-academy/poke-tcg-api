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

2. **Install p5.js on VS Code:**
   - For more details, see the [official p5.js VS Code setup guide](https://p5js.org/tutorials/setting-up-your-environment/#vscode)

## Getting Started

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the app:**
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
http://localhost:3000/card/pokemon/random?name=pikachu&category=Pokemon&amount=2
```

- Replace `pikachu` with the card name you want.
- Replace `Pokemon` with the category you want. Available categories: `Pokemon`, `Energy`, `Trainer`.
- Set `amount` to the number of cards you want returned.

You should see a JSON response from the API, e.g.:

```json
[
  {
    "category": "Pokemon",
    "id": "swsh3-136",
    "illustrator": "tetsuya koizumi",
    "image": "https://assets.tcgdex.net/en/swsh/swsh3/136",
    "localId": "136",
    "name": "Furret",
    "rarity": "Uncommon",
    "set": {
      "cardCount": {
        "official": 189,
        "total": 201
      },
      "id": "swsh3",
      "logo": "https://assets.tcgdex.net/en/swsh/swsh3/logo",
      "name": "Darkness Ablaze",
      "symbol": "https://assets.tcgdex.net/univ/swsh/swsh3/symbol"
    },
    "variants": {
      "firstEdition": false,
      "holo": false,
      "normal": true,
      "reverse": true,
      "wPromo": false
    },
    "hp": 110,
    "types": [
      "Colorless"
    ],
    "evolveFrom": "Sentret",
    "description": "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter.",
    "stage": "Stage1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Feelin' Fine",
        "effect": "Draw 3 cards."
      },
      {
        "cost": [
          "Colorless"
        ],
        "name": "Tail Smash",
        "effect": "Flip a coin. If tails, this attack does nothing.",
        "damage": 90
      }
    ],
    "weaknesses": [
      {
        "type": "Fighting",
        "value": "×2"
      }
    ],
    "retreat": 1,
    "regulationMark": "D",
    "legal": {
      "standard": false,
      "expanded": true
    }
  }
]
```