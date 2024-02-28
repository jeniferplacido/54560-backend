// Desafio 1: Encontrando uma chave
function encontrarChave() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você encontrou a chave!");
            resolve();
        }, 2000);
    });
}

// Desafio 2: Construindo uma ponte
function construirPonte() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A ponte está pronta!");
            resolve();
        }, 3000);
    });
}

// Desafio 3: Buscando equipamentos
function buscarEquipamentos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você encontrou os equipamentos de escalada!");
            resolve();
        }, 2500);
    });
}

// Desafio 4: Escalando uma montanha
function escalarMontanha() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você alcançou o pico da montanha!");
            resolve();
        }, 2000);
    });
}

// Realizando os desafios usando Promises
encontrarChave()
    .then(() => construirPonte())
    .then(() => buscarEquipamentos())
    .then(() => escalarMontanha())
    .catch((error) => console.error("Ocorreu um erro:", error));