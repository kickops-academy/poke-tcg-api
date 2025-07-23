let cartas = [];
let cartasFiltradas = [];
let carregandoImagem = false;

const types = {
  Colorless: "⚪️",
  Darkness: "🌑",
  Dragon: "🐉",
  Fairy: "🧚",
  Fighting: "🥊",
  Fire: "🔥",
  Grass: "🌿",
  Lightning: "⚡️",
  Metal: "⚙️",
  Psychic: "🔮",
  Water: "💧",
};

async function buscaCartas() {
  try {
    const res = await fetch(
      "http://localhost:3000/card/pokemon/random?&category=Pokemon&amount=10"
    );
    const json = await res.json();
    cartas = await Promise.all(
      json
        .filter((c) => c.image !== null && c.image !== undefined)
        .map(async (c) => {
          c.image = await carregarImagem(c.image);
          return c;
        })
    );
    cartasFiltradas = cartas;
    console.log(cartas);
  } catch (e) {
    errorMessage = "Erro ao buscar a carta.";
    console.error(e);
  }
}

async function setup() {
  // Temporarily create a canvas, will resize after loading cards
  createCanvas(2000, 550);
  fill(0);

  button = createButton("Mostrar outras!");
  button.position(30, 20);
  button.mousePressed(() => buscaCartas());

  let x = 170;
  for (const tipo in types) {
    button = createButton(types[tipo] + " " + tipo);
    button.position(x, 20);
    button.mousePressed(() => filtrarPorTipo(tipo));
    x += button.width + 10;
  }

  // Fetch cards and resize canvas after loading
  await buscaCartas();
  resizeCanvas(30 + cartasFiltradas.length * 270, 550);
}

function draw() {
  background(0);

  if (carregandoImagem) {
    fill(255);
    textSize(15);
    text("Carregando imagem...", 30, 60);
  }

  if (cartasFiltradas) {
    mostraCarta();
  }
}

function mostraCarta() {
  if (!cartasFiltradas || cartasFiltradas.length === 0) {
    return;
  }
  for (let i = 0; i < cartasFiltradas.length; i++) {
    const c = cartasFiltradas[i];

    if (
      c.image &&
      typeof c.image === "object" &&
      typeof c.image.width === "number" &&
      c.image.width > 0 &&
      !carregandoImagem
    ) {
      const x = 30 + i * 270;
      image(c.image, x, 50, 250, 450);
      fill(255);
      textSize(24);
      textAlign(CENTER);
      text(`dexId: ${c.dexId}`, x + 125, 530);
    }
  }
}

function carregarImagem(url) {
  carregandoImagem = true;
  return new Promise((resolve, reject) => {
    loadImage(
      url + "/high.png",
      (img) => {
        carregandoImagem = false;
        resolve(img);
      },
      (err) => {
        console.error("Erro ao carregar imagem:", err);
        resolve(null); // Evita quebrar o fluxo
      }
    );
  });
}

function filtrarPorTipo(tipo) {
  cartasFiltradas = [];
  for (let i = 0; i < cartas.length; i++) {
    let type = cartas[i].types[0];
    if (type === tipo) {
      cartasFiltradas.push(cartas[i]);
    }
  }
  resizeCanvas(30 + cartasFiltradas.length * 270, 550);
}
