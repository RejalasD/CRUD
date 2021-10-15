import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ClienteAxios from '../config/axios';
import Swal from 'sweetalert2';


const EditarCita = (props) => {

    //Generar State como  objeto
    const [cita, guardacita] = useState({
        nombre: props.cita.nombre,
        propietario: props.cita.propietario,
        fecha: props.cita.fecha,
        hora: props.cita.hora,
        telefono: props.cita.telefono,
        sintomas: props.cita.sintomas

    });

    const editarCita = id => {

        Swal.fire({
            title: '¿Estás seguro que quieres editar la cita?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, editar!',
            cancelButtonCText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {


                // alerta de editado
                Swal.fire(
                    'Editado!',
                    'La cita fue editada.',
                    'success'
                )

                //Editando de la base de datos
                ClienteAxios.put(`/paciente/${id}`, cita)
                    .then(respuesta => {
                        props.guardarConsulta(true);
                        props.history.push("/");
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        })
    }

    //Lee los datos del formulario
    const actualizarState = e => {
        // console.log(e.target.name); .target.name indica en que campos estamos escribiendo
        // console.log(e.target.value); target.value indica que es lo que escribiendoo el usuario

        guardacita({
            ...cita,                           // toma una copia actual de lo que haya en el state   
            [e.target.name]: e.target.value  // lee lo que el usuario esta escribiendo y lo asigna automaticamente en el state

        });

    };


    return (

        <Fragment>
            <h1 className="my-5">Editar cita</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5
                        font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form
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
                                    value={cita.nombre}
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
                                    value={cita.propietario}
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
                                    value={cita.telefono}
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
                                    value={cita.fecha}
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
                                    value={cita.hora}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Síntomas</label>
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    rows="6"
                                    onChange={actualizarState}
                                    value={cita.sintomas}
                                ></textarea>
                            </div>


                            <input onClick={() => editarCita(props.cita._id)} className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Editar Cita" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}
export default withRouter(EditarCita);