// import {fake} from ('@faker-js/faker');
const {faker} = require(`@faker-js/faker`);

class Company {
    constructor(){
        this.companyName = faker.company.name(),
        this.companyStreet = faker.address.street(),
        this.companyCity = faker.address.city(),
        this.companyState = faker.address.state(),
        this.companyZip = faker.address.zipCode(),
        this.companyCountry = faker.address.country(),
        this.companyId = faker.datatype.uuid()
    }
}

// export default Company;
module.exports = Company;