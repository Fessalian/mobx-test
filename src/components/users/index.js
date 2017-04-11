import React, { Component } from 'react'
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import UserListItemComponent from './list-item'

@observer
class UsersListComponent extends Component {

    handleDelete = ( user ) => {
        this.props.route.usersCollection.remove( user );
    }

    render () {
        const { users, count } = this.props.route.usersCollection;
        return (
            <section>
                <Card>
                    <CardHeader title="Users list" />
                    <CardText>
                        <List>
                            <Subheader>number of users: { count }</Subheader>
                            { users.map( ( user, key ) => <UserListItemComponent key={ key } user={ user } onDelete={ this.handleDelete } /> ) }
                        </List>
                    </CardText>
                    <CardActions style={ { textAlign: 'right' } }>
                        <Link to="/new">
                            <FloatingActionButton style={ { marginTop: 50, float: 'right' } } >
                                <ContentAdd />
                            </FloatingActionButton>
                        </Link>
                    </CardActions>
                </Card>
            </section>
        )
    }
}

export default UsersListComponent;
