import React, { useState, useEffect } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComp from '../pure/contacto';
import CrearContactoForm from '../pure/Form/crearContactoForm';


const ContactoListaComp = () => {

    const contacto1 = new Contacto('Nombre1', '', false, '');
    const contacto2 = new Contacto('Nombre2', '', false, '');
    const contacto3 = new Contacto('Nombre3', '', false, '');

    const [agenda, setAgenda] = useState([contacto1, contacto2, contacto3]);


    //Control del ciclo de vida del componenete
    useEffect(() => { 
        console.log('Los contactos hansido modificados');
        return () => {
            console.log(`Desmontando componente contactos ...`)};
        }, [agenda]);

    function statusContacto(contacto){
        console.log('Conexion del ', contacto);
        const index = agenda.indexOf(contacto);
        const tempAgenda = [...agenda];
        tempAgenda[index].status = !tempAgenda[index].status;
        //Actualizamos el estado del componente y eso va a actualizar la iteracion
        //del contacto que se mostrara actualizada
        setAgenda(tempAgenda);
    }

    function removeContacto(contacto){
        console.log('Borrar este contacto', contacto.nombre);
        const index = agenda.indexOf(contacto);
        const tempContactos = [...agenda];
        tempContactos.splice(index,1)
        setAgenda(tempContactos);
    }

    function addContacto(contacto){
        console.log('Agregando este contacto: ', contacto);
        //const index = contacto.indexOf(contacto);
        const tempAgenda = [...agenda];
        tempAgenda.push(contacto)
        setAgenda(tempAgenda);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Lista de contactos:
                        </h5>
                    </div>
                    {/* card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Telefono</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { agenda.map ((contacto, index)=>{
                                    return(<ContactoComp key={index} contacto={contacto} status={statusContacto} remove={removeContacto} ></ContactoComp>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <CrearContactoForm add={addContacto}></CrearContactoForm>
                </div>
            </div>
        </div>
    );
};


export default ContactoListaComp;
