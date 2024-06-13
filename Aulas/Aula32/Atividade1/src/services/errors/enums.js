// Define um objeto chamado 'EErrors'. Este objeto tem três propriedades: 'ROUTING_ERROR', 'INVALID_TYPES_ERROR' e 'DATABASE_ERROR'.
// Cada propriedade é associada a um número único. Esses números provavelmente representam códigos de erro específicos.
const EErrors = {
    ROUTING_ERROR: 1,
    INVALID_TYPES_ERROR: 2,
    DATABASE_ERROR: 3,
    INVALID_PARAM: 4
}

// Exporta o objeto 'EErrors'. Isso permite que outros módulos importem 'EErrors' e usem seus códigos de erro.
module.exports = EErrors;