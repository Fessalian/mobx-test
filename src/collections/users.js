import { observable, action, computed, toJS } from 'mobx';

import UserModel from '../models/user'

class UsersCollection {
    @observable usersData = [];
    @observable filter = false;

    @computed get users () {
        return toJS( this.usersData );
    }

    setFilter ( filterString ) {
        return this.filter = filterString;
    }

    @computed get count () {
        return this.usersData.length;
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
