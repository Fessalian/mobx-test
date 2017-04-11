import { observable, action } from 'mobx';

import UserModel from '../models/user'

class UsersCollection {
    @observable users = [];

    @action( 'Remove user via Users' )
    remove ( user ) {}

    @action( 'Add new user via Users' )
    add ( name, company, phone ) {}

}

export default new UsersCollection;
