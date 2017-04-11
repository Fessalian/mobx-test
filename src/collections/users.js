import { observable, action, computed, toJS } from 'mobx';

import UserModel from '../models/user'

class UsersCollection {
    @observable users = [];

    get users () {
        return toJS( this.users );
    }

    @computed get count () {
        return this.users.length;
    }

    @action( 'Remove user via Users' )
    remove ( user ) {
        this.users = this.users.filter( existedUser => existedUser.id !== user.id );
    }

    get model () {
        return UserModel;
    }

    @action( 'Add new user via Users' )
    add ( { name, company, phone } ) {
        return UserModel
                    .create( name, company, phone )
                    .then( result => { this.users.push( result ) } );
    }

}

export default new UsersCollection;
