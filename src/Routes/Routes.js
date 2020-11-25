import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre"
import Series from "../Pages/Series" 

function Routes() {

    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/sobre" component={Sobre}/>
              <Route path="/series" component={Series}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes