import {fake} from ('@faker-js/faker');
const faker = require('@faker-js/faker');

class FakeUser {
    constructor(){
        this.userPass = fake.internet.password,
        this.userEmail = fake.internet.email,
        this.userPhone = fake.phone.number,
        this.userFirst = fake.name.firstName,
        this.userLast = fake.name.lastName,
        this.userId = fake.datatype.uuid()
    }
}

export default FakeUser;