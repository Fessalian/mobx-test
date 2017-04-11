import React, { Component } from 'react'
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.css'

const formTemplate = {
    name: '',
    company: '',
    phone: '',
}

@observer
class UsersNewComponent extends Component {

    constructor ( props ) {
        super( props );
        this.newUser = props.route.usersCollection.model;
        this.state = { errors: Object.assign( {}, formTemplate ), values: Object.assign( {}, formTemplate ) };
    }

    handleCreate = ( event ) => {
        event.stopPropagation();
        const { history, route: { usersCollection } } = this.props;

        usersCollection
            .add( this.state.values )
            .then(
                result => history.push( '/' ),
                errors => {
                    this.state.errors = errors;
                    this.setState( this.state );
                }
            )

    }

    handleChangeValue = ( event ) => {
        event.stopPropagation();

        const { name, value } = event.target;
        const { values } = this.state;
        values[name] = value;
        this.state.errors = this.newUser.validate( values.name, values.company, values.phone );
        this.setState( this.state );
    }

    render () {
        return (
            <section>
                <Card>
                    <CardHeader title="Create new user" />
                    <CardText>
                        { Object.keys( this.state.values ).map( ( name, key ) => {
                            return (
                                <fieldset key={ key }>
                                    <TextField
                                        hintText={ `Enter user ${ name }` }
                                        errorText={ this.state.errors[name] }
                                        floatingLabelText={ `Enter user ${ name }` }
                                        onChange={ this.handleChangeValue }
                                        name={ name }
                                    />
                                    <br />
                                </fieldset>
                            );
                        } ) }
                    </CardText>
                    <CardActions style={ { textAlign: 'right' } }>
                        <FlatButton
                            label="CREATE"
                            primary={ true }
                            onTouchTap={ this.handleCreate }
                        />
                        <Link to="/" >
                            <FlatButton label="BACK" />
                        </Link>
                    </CardActions>
                </Card>

            </section>
        )
    }
}

export default UsersNewComponent;
