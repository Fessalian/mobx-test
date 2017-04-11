import { observable, toJS } from 'mobx';

import getGuid from '../utils/guid';

class UserModel {
    @observable user = {};

    create ( name, company, phone ) {
        return new Promise( ( resolve, reject ) => {
            const errors = this.validate( name, company, phone );
            if ( Object.keys( errors ).length ) {
                return reject( errors );
            }

            this.user = {
                id: getGuid(),
                name,
                company,
                phone
            };

            resolve( this.user );
        } );
    }

    validate ( name, company, phone ) {
        const errors = {};

        if ( !this.isValidName( name ) ) {
            errors['name'] = 'Enter valid user name';
        };

        if ( !this.isValidCompany( company ) ) {
            errors['company'] = 'Enter valid company name';
        };

        if ( !this.isValidPhone( phone ) ) {
            errors['phone'] = 'Enter valid phone number';
        };

        return errors;
    }

    isValidField ( fieldName, fieldValue ) {
        const capName = fieldName.charAt( 0 ).toUpperCase() + fieldName.substring( 1 ).toLowerCase();
        return this[ `isValid${capName}` ]( fieldValue );
    }

    isValidName ( name ) {
        return Boolean( name && name.length > 3 );
    }

    isValidCompany ( company ) {
        return Boolean( company && company.length > 3 );
    }

    isValidPhone ( phone ) {
        return Boolean( !isNaN( Number( phone ) ) && String( phone ).length > 5 );
    }

}

export default new UserModel;
