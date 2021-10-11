import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ClienteAxios from "./config/axios";


//componentes 
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";

function App() {

  //State de la app
  const [citas, guardarcitas] = useState([]);
 
 
  useEffect(() => {
    const consultarAPI = () => {

      ClienteAxios.get("/pacientes")
        .then(respuesta => {

          //colocar en el state el resultado
          guardarcitas(respuesta.data);
          //console.log(respueta.data)
        })
        .catch(error => {
          console.log(error)
        })
    }

    consultarAPI();
  }, []);

  return (
    <Router>
      <Switch>

        <Route
          exact path="/" component={() => <Pacientes citas={citas} />}
        />

        <Route
          exact path="/nueva" component={NuevaCita}
        />

        <Route
          exact path="/cita/:id" component={Cita}
        />


      </Switch>

    </Router>
  );
}

export default App;
