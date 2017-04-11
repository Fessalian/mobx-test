import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionDelete from 'material-ui/svg-icons/action/delete';

@observer
class UserListItemComponent extends Component {

    handleToggle = ( event ) => {
        event.stopPropagation();
        this.props.onDelete( this.props.user );
    }

    render () {
        const { id, name, company, phone } = this.props.user;
        return (
            <ListItem
                id={ id }
                primaryText={ name }
                leftAvatar={ <Avatar src={ `http://placebeard.it/100?${ id }` } /> }
                secondaryText={
                    <div>
                        <div>
                            <strong>Company name</strong>
                            &nbsp;
                            <span>{ company }</span>
                        </div>
                        <div>
                            <strong>Phone number</strong>
                            &nbsp;
                            <span>{ phone }</span>
                        </div>
                    </div>
                }
                secondaryTextLines={ 2 }
                rightIcon={ <ActionDelete onClick={ this.handleToggle } /> }
            />
        )
    }
}

UserListItemComponent.propTypes = {
    user: PropTypes.shape( {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
    } ),
    onDelete: PropTypes.func.isRequired
};

export default UserListItemComponent;
