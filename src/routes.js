import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LayoutComponent from './components/layout';
import UsersListComponent from './components/users';

export default() => {
    return (
        <Route path="/" component={ LayoutComponent } >
            <IndexRoute component={ UsersListComponent } />
        </Route>
    )
}
