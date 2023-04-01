import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComp = ({ contacto, status, remove }) => {

    function statusContactoIcon(){
        if(contacto.status)  
            return (<i onClick={() => status(contacto)} className='bi-toggle-on task-action' style={{color:'green'}}></i>) 
        else
            return (<i onClick={() => status(contacto)} className='bi-toggle-off task-action' style={{color:'gray'}}></i>)
    }

    return (
        <tr className='wf-normal'>
            
            <th>
                <span className='ms-0'>
                    {contacto.name}
                </span>
            </th>
            <td className='align-middle'>
                {contacto.celphone}
            </td>
            
            <td className='align-middle'>
                {/*Ejecucion de funcion que devuelve un badge*/}
                {contacto.email}
            </td>
            
            <td className='align-normal'>
                {/*Ejecucion que devuelve un icono*/}
                {statusContactoIcon()}
                <i onClick={() => remove(contacto)} className='bi-trash3 task-action' style={{color:'tomato'}}></i> 
            </td>
            
        </tr>
    )
}

ContactoComp.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactoComp;