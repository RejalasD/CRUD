import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'


const Cita = (props) => {

    if (!props.cita) {
        props.history.push("/");
        return null;
    }

    //extraer por props

    const { cita: { nombre, propietario, fecha, hora, telefono, sintomas } } = props;

    return (


        <Fragment>
            <h1 className="my-5 ">Nombre cita: {nombre, propietario, fecha, hora, telefono, sintomas} </h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5
                        font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div className="List-group">

                            <div className="p-5 list-group-item list-group-item-action
                        flex-column align-items-center">

                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{nombre}</h3>
                                    <small className="fecha-alta">
                                        {fecha} - {hora}
                                    </small>
                                </div>
                                <p className="mb-0">
                                    {sintomas}
                                </p>
                                <div className="contacto py-3">
                                    <p>Dueño: {propietario}</p>
                                    <p>telefono: {telefono}</p>
                                </div>
                                <div className="d-flex">
                                    <button type="button"
                                        className="text-uppercase py-2 px-5
                                        font-weight-bold btn btn-danger col"
                                    >
                                        eliminar &times;
                                    </button>
                                    <div />
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}
export default withRouter(Cita);