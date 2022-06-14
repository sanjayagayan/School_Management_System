import React from 'react'

import {Route,Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Departments from '../pages/Departments'
import Option from '../pages/Option'
import Programs from '../pages/Programs'
import Schools from '../pages/Schools'
import Semester from '../pages/Semester'
import Session from '../pages/Session'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' component = {Dashboard}/>
        <Route path='/Departments' component={Departments}/>
        
    </Switch>
  )
}

export default Routes