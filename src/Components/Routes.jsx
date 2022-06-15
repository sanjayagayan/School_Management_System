import React from 'react'
import {Switch,Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Departments from '../pages/Departments'
import Option from '../pages/Option'
import Programs from '../pages/Programs'
import Schools from '../pages/Schools'
import Semester from '../pages/Semester'
import Session from '../pages/Session'
import Students from '../pages/Students'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component = {Dashboard}/>
        <Route path='/Schools' component={Schools}/>
        <Route path='/Departments' component={Departments}/>
        <Route path='/Programs'component={Programs}/>
        <Route path='/Option' component={Option}/>
        <Route path='/Session' component={Session}/>
        <Route path='/Students' component={Students}/>
        <Route path='/Semester' component={Semester}/>
        
    </Switch>
  )
}

export default Routes