import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClienteAxios from "./config/axios";


//componentes 
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";
import EditarCita from "./components/EditarCita"

function App() {

  //State de la app
  const [citas, guardarcitas] = useState([]);
  const [consultar, guardarConsulta] = useState(true); //esta como true ya que la primera  vez que se haga un refresh debe consultar la api


  useEffect(() => {   // Realiza una reload de los pacientes
    const consultarAPI = () => {

      if (consultar) {
        ClienteAxios.get("/pacientes")
          .then(respuesta => {

            //coloca en el state el resultado
            guardarcitas(respuesta.data);

            // deshabilitar la consulta
            guardarConsulta(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

    consultarAPI();
  }, [consultar]);

  return (
    
    <Router>
      <Switch>

        <Route
          exact path="/" component={() => <Pacientes citas={citas} />}
        />

        <Route
          exact path="/nueva" component={() => <NuevaCita guardarConsulta={guardarConsulta} />}
        />
        {/* <Route
          exact path="/editar/:id" component={() => <Editar guardarConsulta={guardarConsulta} />}
        /> */}

        <Route
          exact
          path="/editar/:id"
          render={(props) => {

            const cita = citas.filter(cita => cita._id === props.match.params.id);

            return (
              <EditarCita
                cita={cita[(0)]}
                guardarConsulta={guardarConsulta}
              />
            )

          }}

        />

        <Route
          exact
          path="/cita/:id"
          render={(props) => {

            const cita = citas.filter(cita => cita._id === props.match.params.id);

            return (
              <Cita
                cita={cita[(0)]}
                guardarConsulta={guardarConsulta}
              />
            )

          }}

        />
      </Switch>
    </Router>
  );
}

export default App;
