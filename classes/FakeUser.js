// import {fake} from ('@faker-js/faker');
const {faker} = require(`@faker-js/faker`);

class FakeUser {
    constructor(){
        this.userPass = faker.internet.password(),
        this.userEmail = faker.internet.email(),
        this.userPhone = faker.phone.number(),
        this.userFirst = faker.name.firstName(),
        this.userLast = faker.name.lastName(),
        this.userId = faker.datatype.uuid()
    }
}

// export default FakeUser;
module.exports = FakeUser;