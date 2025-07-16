let cartas = [];
let carregandoImagem = false;

async function buscaCartas() {
  try {
    const res = await fetch("http://localhost:3000/card/pokemon/random?&category=Pokemon&amount=15");
    const json = await res.json();
    cartas = await Promise.all(
      json
        .filter(c => c.image !== null && c.image !== undefined)
        .map(async c => {
          c.image = await carregarImagem(c.image);
          return c;
        })
    );
    console.log(cartas)
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

  // Fetch cards and resize canvas after loading
  await buscaCartas();
  resizeCanvas(30 + cartas.length * 270, 550);
}

function draw() {
  background(0);
  
  if (carregandoImagem) {
    fill(255);
    textSize(15);
    text('Carregando imagem...', 30, 60);
  }

  if (cartas) {
    mostraCarta();
  }
}

function mostraCarta() {
  if (!cartas || cartas.length === 0) {
    return;
  }
  for (let i = 0; i < cartas.length; i++) {
    const c = cartas[i];
    // Only render if c.image is a valid p5.Image and is loaded
    if (
      c.image &&
      typeof c.image === 'object' &&
      typeof c.image.width === 'number' &&
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
      url + '/high.png',
      img => {
        carregandoImagem = false;
        resolve(img);
      },
      err => {
        console.error("Erro ao carregar imagem:", err);
        resolve(null); // Evita quebrar o fluxo
      }
    );
  });
}

// TODO 1. como usar dict
// TODO 2. filterMethodByType com dict criando botões legais com emoji
// TODO 3. como funciona e implementa uma pilha
// TODO 4. reverseString com pilha implementada