import React, { Component } from 'react'
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

import UserListItemComponent from './list-item'

@observer
class UsersListComponent extends Component {

    handleDelete = ( user ) => {
        this.props.route.usersCollection.remove( user );
    }

    handleClearFilter = ( event ) => {
        event.stopPropagation();
        this.props.route.usersCollection.filter = '';
    }
    handleSetFilter = ( event ) => {
        event.stopPropagation();
        this.props.route.usersCollection.filter = event.target.value;
    }

    render () {
        const { users, count, filter } = this.props.route.usersCollection;
        return (
            <section>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Filter" />
                        <TextField
                            hintText="Enter user"
                            underlineStyle={ { borderColor: blue500 } }
                            onChange={ this.handleSetFilter }
                            value={ filter }
                        />
                        <IconButton onTouchTap={ this.handleClearFilter } >
                            <ContentClear />
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
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
