import React from 'react'
import './form.css'

function form() {
  return (
    <form>
        <div className="container">
          <div className="row1">
            <div className='item'>
                    <label className="sch">Schools</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
            <div className='item'>
                    <label className="sch">Programme</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
            <div className='item'>
                    <label className="sch">Session</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
          </div>
          <div className="row1">
            <div className='item'>
                    <label className="sch">Department</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
            <div className='item'>
                    <label className="sch">Option</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
            <div className='item'>
                    <label className="sch">Semester</label>
                    <div className='options'>
                        <select>
                        <option selected>Select</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
            </div>
         </div>
         <div className="row2">
                        <button>Course View</button>
                    </div>
        </div>   
    </form>
  )
}

export default form