import React, { Fragment, Link } from 'react'

const Cita = ({ cita }) => {

    return (


        <Fragment>
            <h1>Nombre cita: {cita.fecha} </h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5
                        font-weight-bold">Volver</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Cita;