const faker = require('@faker-js/faker');

faker.locale = 'pt_BR';

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateUser = () => {
    let numOfProducts = generateRandomNumber(1, 10);
    let products = [];

    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.name.firstName(),
        sobrenome: faker.name.lastName(),
        sexo: faker.name.sex(),
        birthDate: faker.date.past(),
        phone: faker.phone.phoneNumber(),
        products,
        image: faker.image.avatar(),
        id: faker.datatype.uuid(),
        email: faker.internet.email()
    };
};

const generateProduct = () => {
    return {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: generateRandomNumber(1, 100),
        id: faker.datatype.uuid(),
        image: faker.image.imageUrl()
    };
};

module.exports = { generateUser, generateProduct, generateRandomNumber };
