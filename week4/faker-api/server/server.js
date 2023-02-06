const express = require("express" );
const {faker} = require("@faker-js/faker")
const app = express();
const port = 8000;

const createUser = () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName:faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password:faker.internet.password()
    });

const createCompany = () => ({
        id: faker.datatype.uuid(),
        companyName: faker.company.name(),
        companyStreet:faker.address.street(),
        companyCity: faker.address.city(),
        companyState: faker.address.state(),
        companyZipCode:faker.address.zipCode(),
        companyCountry:faker.address.country()
    });


app.get('/api/users/new', (request, response) => {
    const newComer = createUser();
    response.json(newComer);
});

app.get('/api/companies/new', (request, response) => {
    const newCorp = createCompany();
    response.json(newCorp);
});

app.get('/api/users/company', (request, response) => {
    const newComer = createUser();
    const newCorp = createCompany();
    const newEntry = {
        name: newComer,
        company:newCorp
    }
    response.json(newEntry);
});






app.listen( port, () => console.log(`Listening on port: ${port}`) );