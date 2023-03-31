import React, { useState } from 'react';
import Contacto from '../../models/contacto'


const ContactList = () => {

    const contacto1 = new Contacto('Nombre1', '', false, '');
    const contacto2 = new Contacto('Nombre2', '', false, '');
    const contacto3 = new Contacto('Nombre3', '', false, '');
    
    const [contactos, setContactos] = useState(contacto1, contacto2, contacto3);

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
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Email</th>
                                </tr>
                            </thead>


                            <tbody>
                                {contactos.map ((contacto, index)=>{
                                    return(<ContactoComponent key={index} task={contacto} status={statusContacto} remove={removeContacto} ></ContactoComponent>)
                                })}
                            </tbody>


                        </table>
                    </div>
                    {/* <Taskform add={addTask}></Taskform> */}
                </div>
            </div>
        </div>
    );
};


export default ContactList;
