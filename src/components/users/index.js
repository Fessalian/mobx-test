import React from 'react'
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

@observer
class UsersListComponent extends React.Component {

    render () {
        const { users, count } = this.props.route.usersCollection;
        return (
            <section>
                <Card>
                    <CardHeader title="Users list" />
                    <CardText>
                    </CardText>
                    <CardActions style={ { textAlign: 'right' } }>
                    </CardActions>
                </Card>
            </section>
        )
    }
}

export default UsersListComponent;
