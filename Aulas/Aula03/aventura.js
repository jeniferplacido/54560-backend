// Função para encontrar a chave
function encontrarChave(callback) {
    setTimeout(function() {
        console.log("Você encontrou a chave!");
        callback();
    }, 2000);
}

// Função para abrir a porta
function abrirPorta() {
    console.log("A porta está aberta! Você pode avançar.");
}

// Função para construir a ponte
function construirPonte(callback) {
    setTimeout(function() {
        console.log("A ponte está pronta!");
        callback();
    }, 3000);
}

// Função para atravessar o rio
function atravessarRio() {
    console.log("Você atravessou o rio com segurança!");
}

// Função para buscar equipamentos de escalada
function buscarEquipamentos(callback) {
    setTimeout(function() {
        console.log("Você encontrou os equipamentos de escalada!");
        callback();
    }, 2500);
}

// Função para escalar a montanha
function escalarMontanha() {
    console.log("Você alcançou o pico da montanha!");
}

// Explicação sobre callbacks aninhados
console.log("Vamos começar uma grande aventura!");

// Primeiro desafio: Encontrar a chave e abrir a porta
encontrarChave(function() {
    abrirPorta();

    // Segundo desafio: Construir a ponte e atravessar o rio
    construirPonte(function() {
        atravessarRio();

        // Terceiro desafio: Buscar equipamentos e escalar a montanha
        buscarEquipamentos(function() {
            escalarMontanha();
            console.log("Parabéns! Você completou todos os desafios e alcançou o objetivo final!");
        });
    });
});