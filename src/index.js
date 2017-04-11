import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes'
import UsersCollection from './collections/users';

injectTapEventPlugin();

const predefinedUsers = [
    { name: 'Tin K. Minton', company: 'Frank and Seder', phone: 6603728318 },
    { name: 'Johnnie C. Starks', company: 'Fly Corp', phone: 7045651151 },
    { name: 'Tony L. Lewis', company: 'House 2 Home', phone: 6238469668 }
];


predefinedUsers.forEach( user => UsersCollection.add( user ) );

const collections = {
    UsersCollection,
}

ReactDOM.render( (
    <Router history={ browserHistory } routes={ routes( collections ) } />
), document.querySelector( '#root' ) );
