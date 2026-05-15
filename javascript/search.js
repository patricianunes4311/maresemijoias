/**
 * Sistema de Pesquisa de Produtos - Mar.é Semi Jóias
 * Permite filtrar produtos em tempo real
 */

// Inicializa a busca quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search.js carregado');
    
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        console.log('Campo de busca encontrado');
        
        // Busca em tempo real enquanto digita
        searchInput.addEventListener('keyup', function() {
            console.log('Digitando:', this.value);
            buscarProdutos();
        });
        
        // Permite buscar ao pressionar Enter
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                buscarProdutos();
            }
        });
    } else {
        console.warn('Campo de busca NÃO encontrado');
    }
    
    // Inicializa o efeito de scroll para as seções hero e intro
    inicializarScrollHero();
});

/**
 * Efeito de desaparecimento das seções hero e intro ao rolar
 */
function inicializarScrollHero() {
    const heroSection = document.querySelector('.hero-section');
    const introSection = document.querySelector('.intro-section');
    
    if (!heroSection) {
        console.warn('Seção hero não encontrada');
        return;
    }

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const fadeStart = 100;
        const fadeEnd = 160;

        if (scrollY > fadeEnd) {
            heroSection.classList.add('hidden');
            if (introSection) introSection.classList.add('hidden');
        } else if (scrollY > fadeStart) {
            const opacity = 1 - ((scrollY - fadeStart) / (fadeEnd - fadeStart));
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

/**
 * Função principal de busca
 * Filtra os produtos baseado no termo de busca
 */
function buscarProdutos() {
    const input = document.getElementById('searchInput');
    
    if (!input) {
        console.warn('Campo de busca não encontrado');
        return;
    }
    
    const termoBusca = input.value.toLowerCase().trim();
    console.log('Buscando por:', termoBusca);
    
    // Encontra todos os cards de produtos
    const todosOsCards = document.querySelectorAll('.card');
    console.log('Total de cards encontrados:', todosOsCards.length);
    
    let encontrados = 0;

    todosOsCards.forEach((card, index) => {
        // Pega o elemento pai (col-md-6 col-lg-4)
        const colPai = card.closest('.col-md-6, .col-lg-4');
        
        if (!colPai) {
            console.warn('Card sem pai coluna');
            return;
        }
        
        // Pega título e descrição
        const titulo = card.querySelector('.card-title');
        const descricao = card.querySelector('.card-text');
        
        if (!titulo || !descricao) {
            console.warn('Card sem título ou descrição');
            return;
        }
        
        const textoTitulo = titulo.textContent.toLowerCase();
        const textoDescricao = descricao.textContent.toLowerCase();

        console.log(`Card ${index + 1}: "${textoTitulo}"`);

        // Se o termo de busca está vazio, mostra todos
        if (termoBusca === '') {
            colPai.style.display = '';
            encontrados++;
        }
        // Se o termo está nos títulos ou descrição
        else if (textoTitulo.includes(termoBusca) || textoDescricao.includes(termoBusca)) {
            colPai.style.display = '';
            console.log(`✓ Card ${index + 1} encontrado`);
            encontrados++;
        } 
        // Caso contrário, esconde
        else {
            colPai.style.display = 'none';
        }
    });

    // Feedback ao usuário
    if (encontrados === 0 && termoBusca !== '') {
        console.warn('Nenhum produto encontrado para "' + termoBusca + '"');
    } else {
        console.log(`Total encontrado: ${encontrados} produto(s)`);
    }
}

/**
 * Limpa a busca e mostra todos os produtos
 */
function limparBusca() {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = '';
        buscarProdutos();
    }
}

