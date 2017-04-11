import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardText, CardHeader, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import UserListItemComponent from './list-item'

@observer
class UsersListComponent extends Component {

    constructor ( props ) {
        super( props );
        this.requestedUser = undefined;
        this.state = { dialogOpened: false };
    }

    handleDelete = ( ) => {
        this.props.route.usersCollection.remove( this.requestedUser );
        this.requestedUser = undefined;
        this.handleToggleDialog();
    }

    handleRequestDeleting = ( user ) => {
        this.requestedUser = user;
        this.setState( { dialogOpened: !this.dialogOpened } );
    }

    handleClearFilter = ( event ) => {
        event.stopPropagation();
        this.props.route.usersCollection.filter = '';
    }
    handleSetFilter = ( event ) => {
        event.stopPropagation();
        this.props.route.usersCollection.filter = event.target.value;
    }

    handleToggleDialog = ( ) => {
        this.setState( { dialogOpened: !this.state.dialogOpened } );
    }

    dialogActions () {
        return [
            <FlatButton
                label="CANCEL"
                primary={ true }
                onTouchTap={ this.handleToggleDialog }
            />,
            <FlatButton
                label="DELETE"
                primary={ true }
                onTouchTap={ this.handleDelete }
            />,
        ];
    }

    render () {
        const { users, count, filter } = this.props.route.usersCollection;
        return (
            <section>
                <Card>

                    <CardHeader
                        title="Users list"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />

                    <CardTitle expandable={ true } >
                        <Toolbar>
                            <ToolbarGroup>
                                <ToolbarTitle text="Filter" />
                                <TextField
                                    hintText="Enter criteria"
                                    underlineStyle={ { borderColor: blue500 } }
                                    onChange={ this.handleSetFilter }
                                    value={ filter }
                                />
                                <IconButton onTouchTap={ this.handleClearFilter } >
                                    <ContentClear />
                                </IconButton>
                            </ToolbarGroup>
                        </Toolbar>
                    </CardTitle>

                    <CardText>
                        <List>
                            <Subheader>number of users: { count }</Subheader>
                            { users.map( ( user, key ) => <UserListItemComponent key={ key } user={ user } onDelete={ this.handleRequestDeleting } /> ) }
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

                <Dialog
                    actions={ this.dialogActions() }
                    modal={ true }
                    open={ this.state.dialogOpened }
                    onRequestClose={ this.handleToggleDialog }
                >Are you sure?</Dialog>
            </section>
        )
    }
}

UsersListComponent.propTypes = {
    route: PropTypes.shape( {
        usersCollection: PropTypes.object
    } )
};

export default UsersListComponent;
