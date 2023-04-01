import PropTypes from 'prop-types';

export class Contacto {
    name = '';
    celphone = '';
    status = false;
    email = '';

    constructor(name, celphone, status, email){
        this.name = name;
        this.celphone = celphone;
        this.status = status ;
        this.email = email;
    }
}

Contacto.propTypes = {
    name: PropTypes.string,
    description: PropTypes.number,
    status: PropTypes.bool,
    email: PropTypes.string
}