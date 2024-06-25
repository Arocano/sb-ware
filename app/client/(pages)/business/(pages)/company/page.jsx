'use client'
import React, { useState } from 'react'

const Company = () => {

  /* Plans */
  const [planCont, setPlanCont] = useState(1)

  const handlePlanConst = (op) => {
    if(planCont === op) {
      return
    }else{
      setPlanCont(op)
    }
  }

  return (
    <>
      <section className='plans-section'>
        <div className={planCont === 1 ?"container-option":"container-option gray"}>
          <div className="options-body">
            <div className={planCont === 1 ?'option active':'option'} onClick={()=>handlePlanConst(1)}/>
            <div className={planCont === 2 ?'option active':'option'} onClick={()=>handlePlanConst(2)}/>
          </div>
          <div className={planCont === 1 ? "container a active" : "container a"}>
            <div className="container-body">
              <span className='title-body'>
                Planes
              </span>
              
            </div>
          </div>
          <div className={planCont === 2 ? "container b active" : "container b"}>
            <div className="container-body">
              <span className='title-body'>
                Agregar
              </span>
            </div>
          </div>
        </div>
        <div className="container-option">
          Table
        </div>
      </section>
    </>
  )
}

export default Company