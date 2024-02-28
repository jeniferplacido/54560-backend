function comprarPao(callback) {
    setTimeout(function () {
        console.log('O Pão foi comprado!');
        callback();
    }, 3000);
}

function comprarQueijo(callback) {
    setTimeout(function () {
        console.log('O Queijo foi comprado!');
        callback();
    }, 3000);
}

function prepararSanduiche() {
    console.log('O Sanduíche está pronto!')
}

comprarPao(function () {
    comprarQueijo(prepararSanduiche);
});