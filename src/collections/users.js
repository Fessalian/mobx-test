import { observable, action, computed, toJS } from 'mobx';

import UserModel from '../models/user'

class UsersCollection {
    @observable usersData = [];
    @observable filter = '';

    @computed get users () {
        const users = toJS( this.usersData );
        if ( this.filter ) {
            return users.filter( user => user.name.toLowerCase().includes( this.filter )
                || user.company.toLowerCase().includes( this.filter )
                || String( user.phone ).includes( this.filter )
            );
        };

        return users;
    }

    set filter ( filterString ) {
        return this.filter = filterString.toLowerCase();
    }

    get filter () {
        return this.filter;
    }

    @computed get count () {
        return this.users.length;
    }

    @action( 'Remove user via Users' )
    remove ( user ) {
        this.usersData = this.usersData.filter( existedUser => existedUser.id !== user.id );
    }

    get model () {
        return UserModel;
    }

    @action( 'Add new user via Users' )
    add ( { name, company, phone } ) {
        return UserModel
                .create( name, company, phone )
                .then( result => { this.usersData.push( result ) } );
    }

}

export default new UsersCollection;
