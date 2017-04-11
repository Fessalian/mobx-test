import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LayoutComponent from './components/layout';
import UsersListComponent from './components/users';
import UsersNewComponent from './components/users/new';

export default( collections ) => {
    return (
        <Route path="/" component={ LayoutComponent } collections={ collections }>
            <IndexRoute component={ UsersListComponent } usersCollection={ collections.UsersCollection } />
            <Route path="new" component={ UsersNewComponent } usersCollection={ collections.UsersCollection }/>
        </Route>
    )
}
