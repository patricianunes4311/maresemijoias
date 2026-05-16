/**
 * Sistema de Produtos - Mar.é Semi Jóias
 * Geração dinâmica de cards + busca em tempo real
 */

// ─── CATÁLOGO DE PRODUTOS ───────────────────────────────────────────────────
// Para adicionar produtos: copie um bloco { } e preencha os campos.
// Para trocar a imagem: altere o valor de "img" com o nome do arquivo em /Imagens/

const produtos = [
  // BRINCOS
  { id: 1,  nome: "Brinco Gota Dourada",      categoria: "Brincos",   preco: "R$ 49,90", img: "./Imagens/kidsbrinco.png" },
  { id: 2,  nome: "Brinco Argola Fina",        categoria: "Brincos",   preco: "R$ 39,90", img: "./Imagens/kidsbrinco.png" },
  { id: 3,  nome: "Brinco Pérola Branca",      categoria: "Brincos",   preco: "R$ 54,90", img: "./Imagens/kidsbrinco.png" },
  { id: 4,  nome: "Brinco Estrela do Mar",     categoria: "Brincos",   preco: "R$ 44,90", img: "./Imagens/kidsbrinco.png" },
  { id: 5,  nome: "Brinco Maré Alta",          categoria: "Brincos",   preco: "R$ 59,90", img: "./Imagens/kidsbrinco.png" },
  { id: 6,  nome: "Brinco Concha Rosé",        categoria: "Brincos",   preco: "R$ 47,90", img: "./Imagens/kidsbrinco.png" },

  // COLARES
  { id: 7,  nome: "Colar Ondas Douradas",      categoria: "Colares",   preco: "R$ 89,90", img: "./Imagens/kidsbrinco.png" },
  { id: 8,  nome: "Colar Pérola Simples",      categoria: "Colares",   preco: "R$ 74,90", img: "./Imagens/kidsbrinco.png" },
  { id: 9,  nome: "Colar Coração Aberto",      categoria: "Colares",   preco: "R$ 69,90", img: "./Imagens/kidsbrinco.png" },
  { id: 10, nome: "Colar Mar Profundo",        categoria: "Colares",   preco: "R$ 94,90", img: "./Imagens/kidsbrinco.png" },
  { id: 11, nome: "Colar Choker Delicado",     categoria: "Colares",   preco: "R$ 64,90", img: "./Imagens/kidsbrinco.png" },
  { id: 12, nome: "Colar Gota Cristal",        categoria: "Colares",   preco: "R$ 79,90", img: "./Imagens/kidsbrinco.png" },

  // PULSEIRAS
  { id: 13, nome: "Pulseira Onda Fina",        categoria: "Pulseiras", preco: "R$ 59,90", img: "./Imagens/kidsbrinco.png" },
  { id: 14, nome: "Pulseira Berloques Mar",    categoria: "Pulseiras", preco: "R$ 69,90", img: "./Imagens/kidsbrinco.png" },
  { id: 15, nome: "Pulseira Riviera Rosé",     categoria: "Pulseiras", preco: "R$ 54,90", img: "./Imagens/kidsbrinco.png" },
  { id: 16, nome: "Pulseira Corrente Dupla",   categoria: "Pulseiras", preco: "R$ 64,90", img: "./Imagens/kidsbrinco.png" },
  { id: 17, nome: "Pulseira Estrela",          categoria: "Pulseiras", preco: "R$ 49,90", img: "./Imagens/kidsbrinco.png" },
  { id: 18, nome: "Pulseira Concha Dourada",   categoria: "Pulseiras", preco: "R$ 74,90", img: "./Imagens/kidsbrinco.png" },

  // ANÉIS
  { id: 19, nome: "Anel Solitário Pérola",     categoria: "Anéis",     preco: "R$ 44,90", img: "./Imagens/kidsbrinco.png" },
  { id: 20, nome: "Anel Onda Minimalista",     categoria: "Anéis",     preco: "R$ 39,90", img: "./Imagens/kidsbrinco.png" },
  { id: 21, nome: "Anel Coração Aberto",       categoria: "Anéis",     preco: "R$ 49,90", img: "./Imagens/kidsbrinco.png" },
  { id: 22, nome: "Anel Ajustável Flor",       categoria: "Anéis",     preco: "R$ 34,90", img: "./Imagens/kidsbrinco.png" },
  { id: 23, nome: "Anel Duo Faixas",           categoria: "Anéis",     preco: "R$ 54,90", img: "./Imagens/kidsbrinco.png" },
  { id: 24, nome: "Anel Cristal Azul",         categoria: "Anéis",     preco: "R$ 59,90", img: "./Imagens/kidsbrinco.png" },

  // CONJUNTOS
  { id: 25, nome: "Conjunto Maré Dourada",     categoria: "Conjuntos", preco: "R$ 129,90", img: "./Imagens/kidsbrinco.png" },
  { id: 26, nome: "Conjunto Pérola Clássico",  categoria: "Conjuntos", preco: "R$ 149,90", img: "./Imagens/kidsbrinco.png" },
  { id: 27, nome: "Conjunto Ondas Rosé",       categoria: "Conjuntos", preco: "R$ 139,90", img: "./Imagens/kidsbrinco.png" },
  { id: 28, nome: "Conjunto Mar e Sol",        categoria: "Conjuntos", preco: "R$ 159,90", img: "./Imagens/kidsbrinco.png" },
  { id: 29, nome: "Conjunto Estrela Completo", categoria: "Conjuntos", preco: "R$ 169,90", img: "./Imagens/kidsbrinco.png" },
  { id: 30, nome: "Conjunto Verão Delicado",   categoria: "Conjuntos", preco: "R$ 144,90", img: "./Imagens/kidsbrinco.png" },
];

// ─── GERAÇÃO DE CARDS ────────────────────────────────────────────────────────

function criarCardHTML(produto) {
  return `
    <div class="col-md-6 col-lg-4 produto-col">
      <div class="card w-100 h-100">
        <img src="${produto.img}" class="card-img-top" alt="${produto.nome}">
        <div class="card-body d-flex flex-column">
          <span class="badge mb-2" style="width: fit-content; background-color: #c8a06a; color: #fff;">
            ${produto.categoria}
          </span>
          <h5 class="card-title">${produto.nome}</h5>
          <p class="card-text text-muted mt-auto fw-semibold">${produto.preco}</p>
        </div>
      </div>
    </div>
  `;
}

function renderizarCards(lista) {
  const grid = document.getElementById('gridProdutos');
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted fs-5">Nenhum produto encontrado.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = lista.map(criarCardHTML).join('');
}

// ─── BUSCA COM DEBOUNCE ──────────────────────────────────────────────────────

let timerBusca;

function buscarProdutos() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const termo = input.value.toLowerCase().trim();

  if (termo === '') {
    renderizarCards(produtos);
    return;
  }

  const resultado = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) ||
    p.categoria.toLowerCase().includes(termo)
  );

  renderizarCards(resultado);
}

// ─── FILTRO POR CATEGORIA ─────────────────────────────────────────────────────

function filtrarCategoria(categoria) {
  const botoes = document.querySelectorAll('.btn-categoria');
  botoes.forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-categoria="${categoria}"]`)?.classList.add('active');

  if (categoria === 'Todos') {
    renderizarCards(produtos);
  } else {
    renderizarCards(produtos.filter(p => p.categoria === categoria));
  }

  // Limpa a busca ao filtrar por categoria
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
}

// ─── INICIALIZAÇÃO ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  // Renderiza todos os produtos ao carregar
  renderizarCards(produtos);

  // Busca em tempo real com debounce de 300ms
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', function () {
      clearTimeout(timerBusca);
      timerBusca = setTimeout(buscarProdutos, 300);
    });
  }

  // Efeito de fade no hero ao rolar
  inicializarScrollHero();
});

function inicializarScrollHero() {
  const heroSection = document.querySelector('.hero-section');
  const introSection = document.querySelector('.intro-section');
  if (!heroSection) return;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const fadeStart = 100;
    const fadeEnd = 160;

    if (scrollY > fadeEnd) {
      heroSection.classList.add('hidden');
      if (introSection) introSection.classList.add('hidden');
    } else if (scrollY > fadeStart) {
      const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      heroSection.style.opacity = Math.max(0, opacity);
      heroSection.classList.remove('hidden');
      if (introSection) {
        introSection.style.opacity = Math.max(0, opacity);
        introSection.classList.remove('hidden');
      }
    } else {
      heroSection.style.opacity = '1';
      heroSection.classList.remove('hidden');
      if (introSection) {
        introSection.style.opacity = '1';
        introSection.classList.remove('hidden');
      }
    }
  });
}