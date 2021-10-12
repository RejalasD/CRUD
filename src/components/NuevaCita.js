import React, { Fragment, useState } from 'react';
import { Link,withRouter } from 'react-router-dom';

import ClienteAxios from '../config/axios';
const NuevaCita = (props) => {

    //Generar State como  objeto
    const [cita, guardacita] = useState({
        nombre: '',
        propietario: '',
        fecha: '',
        hora: '',
        telefono: '',
        sintomas: ''

    });




    //Lee los datos del formulario
    const actualizarState = e => {
        // console.log(e.target.name); .target.name indica en que campos estamos escribiendo
        // console.log(e.target.value); target.value indica que es lo que escribiendoo el usuario

        guardacita({
            ...cita,                           // toma una copia actual de lo que haya en el state   
            [e.target.name]: e.target.value  // lee lo que el usuario esta escribiendo y lo asigna automaticamente en el state

        });

    };

    //enviar una peticion  a la API
    const crearNuevaCita = e => {
        e.preventDefault();

        //enviar peticion por Axios
        ClienteAxios.post('/pacientes', cita)
            .then(respuesta => {
                console.log(respuesta);
                props.guardarConsulta(true);    //redirecciona hacia la app principal detecta que consultar esta como true vuelve a consultar a la BD y trae copia con los ultimos cambios

                //redireccionar 
                props.history.push('/');       //se utiliza props para direccionar al usuario

            })
    }

    return (

        <Fragment>
            <h1 className="my-5">Crear nueva cita</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5
                        font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={crearNuevaCita} // para enviar la nueva cita a la API
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Mascota</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre Mascota"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="propietario">Nombre Propietario</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="propietario"
                                    name="propietario"
                                    placeholder="Nombre Propietario"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Fecha Alta</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="fecha"
                                    name="fecha"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Hora Alta</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="hora"
                                    name="hora"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Síntomas</label>
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    rows="6"
                                    onChange={actualizarState}
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}
export default withRouter(NuevaCita);