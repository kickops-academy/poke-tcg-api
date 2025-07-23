# :beginner: `poke-tcg-api`

> Uma API NestJS simples, utilizando arquitetura em camadas, para cartas do 
> Pokémon TCG.

Olá!

Este repositório contém o código da API apresentada nos encontros III e V da 
segunda semana do First Build!

É uma API Simples, usando NestJS e Express, com arquitetura em camadas 
(controller, service, model, etc.), atuando como middleman na comunicação com 
uma API especializada em cartas do Pokémon TCG.

---

## Requisitos

- [**Node.js**](https://nodejs.org/en/download/) `v23.x.x+` instalado

  Para instalar o Node.js:
   - **Windows:**
     Baixe o instalador diretamente de [nodejs.org](https://nodejs.org/)

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
- Extensão **p5.js** no VS Code
  - Para mais detalhes, veja a [documentação oficial](https://p5js.org/tutorials/setting-up-your-environment/#vscode)

---

## Instruções

- Clone este repositório ou baixe o arquivo ZIP;
- Abra o terminal na pasta do projeto;
- Com o **Node** já instalado, execute o comando `npm install` para instalar as dependências;
- Execute o comando `npm run start:dev` para iniciar o servidor de desenvolvimento;
- Abra o navegador e acesse `http://localhost:3000/` para ver se o projeto está sendo executado;
- Edite os arquivos em `src` ou `p5`, e atualize seu navegador para visualizar alterações;
- Divirta-se!;

---

## Como usar

Uma vez que o servidor está sendo executado, você pode acessar endpoints da API expostos no controller.

Caso deseje solicitar uma carta aleatória pelo nome, e categoria, abra seu navegador e entre em:

```
http://localhost:3000/card/pokemon/random?name=pikachu&category=Pokemon&amount=2
```

- Troque `pikachu` pelo nome da carta desejada;
- Troque `Pokemon` pela categoria de cartas que desejar, entre: `Pokemon`, `Energy`, `Trainer`.
- Defina `amount` para o número de cartas que deseja retornar;

A API deverá entregar uma resposta JSON similar a:

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

---

## Informações adicionais

Para auxiliar, e exemplificar como ferramentas e bibliotecas podem ajudar o desenvolvedor, adicionamos **Swagger** ao projeto.

O que é o Swagger? Melhor ver em primeira mão do que ter uma explicação!

Com o projeto em execução, acesse a seguinte URL em seu navegador:

```http://localhost:3000/docs```

Bacana, né?

À medida em que trabalhamos em projetos, podemos criar endpoints, documentar e exemplificar seu uso com ele, mas tem mais coisas além do que foi mostrado 
aqui, e recomendamos codar e experimentar para conhecer melhor a ferramenta! :wink:
