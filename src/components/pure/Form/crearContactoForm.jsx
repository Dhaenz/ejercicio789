import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class'



const CrearContactoForm = ({ add }) => {
    const nameRef = useRef('');
    const celPhoneRef = useRef('');
    const email = useRef('');

    function addContacto(e){
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nameRef.current.value,
            celPhoneRef.current.value,
            false,
            email.current.value
        );
        add(nuevoContacto);
    }


    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
                <input ref={celPhoneRef} id='inputCelPhone' type='number' className='form-control form-control-lg' required placeholder='Numero celular'/>
                <input ref={email} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='em@il'/>                
                <button type='submit' className='btn bnt-success btn-lg ms-2'>Add</button>
            </div>
        </form>
    );
}

CrearContactoForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default CrearContactoForm;
