import { observable } from 'mobx';

export default class UserModel {
    @observable user = {};
    @observable errors = {};

    create ( name, company, phone ) {
        this.errors = {};

        this.user = {
            name,
            company,
            phone
        };

        return this.user;
    }


    validate ( name, company, phone ) {
    }

    isValid ( ) {}

}
