import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Formulario from './formulario'
import Curriculo from './curriculo'
import Projeto from './projeto'

export default Apps
function Apps() {
    return <Router>

        <p>Credo que lindo</p>

        <Switch>
            <Route path="/formulario" >
                <Formulario />
            </Route>
            <Route path="/curriculo">
                <Curriculo />
            </Route>
            <Route path="/projeto">
                <Projeto />
            </Route>
        </Switch>
    </Router>



}