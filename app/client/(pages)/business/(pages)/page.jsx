'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import AddBtn from '@public/assets/icons/btn-add.png'
import DelBtn from '@public/assets/icons/btn-delete.png'
import RenewBtn from '@public/assets/icons/btn-renew.png'
import AsisBtn from '@public/assets/icons/btn-asis.png'
import PayBtn from '@public/assets/icons/btn-pay.png'
import SearchIcon from '@public/assets/icons/search-icon.png'
import RightArrow from '@public/assets/icons/right-arrow.png'
import LeftArrow from '@public/assets/icons/left-arrow.png'
import DeselectIcon from '@public/assets/icons/deselect-icon.png'

const Clients = () => {

  /* Active Table */
  const [activeTable, setActiveTable] = useState(1)

  /* Client Data */

  const [clientData, setClientData] = useState([
    {
      id: 1,
      name: 'Farid Ruano',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 2,
      name: 'Marcela Cabrera',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 3,
      name: 'Mateo Chagcha',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 4,
      name: 'Roberto Quinonez',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 5,
      name: 'Jose Delgado',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 6,
      name: 'Debora Delgado',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 7,
      name: 'Samantha Robalino',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 8,
      name: 'Samantha Velarde',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 9,
      name: 'David Zamora',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 10,
      name: 'Martha Lucia',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
    {
      id: 11,
      name: 'Vladimir Torres',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 30,
      debt: 30,
    },
  ])

  /* DataTable */

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const [selRow, setSelRow] = useState({
    id: 0
  })

  const [searchTerm, setSearchTerm] = useState('') 
  const [totalPages, setTotalPages] = useState(Math.ceil(clientData.length / itemsPerPage))

  const [currentItems, setCurrentItems] = useState(clientData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ))

  const handlePreviousPage = () => {
    setSelRow({id:0})
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    setSelRow({id:0})
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleClientActive = (cli) => {
    const isDate = new Date(cli.end)

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if(isDate < currentDate){
      return false
    }else{
      return true
    }
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
    if(event.target.value.length<1){
      setCurrentItems(clientData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ))
      setTotalPages(Math.ceil(clientData.length / itemsPerPage))
    }else{
      setTotalPages(1)
      setCurrentItems(clientData.filter(cli =>
        cli.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
    }
  }

   return (
    <div className="company-page">
      <section className="stats-bar">
        <div className={activeTable === 1?"card-bar active":"card-bar"} onClick={()=>setActiveTable(1)}>
          <span>
            Clientes
          </span>
          <h1>
            274
          </h1>
          <div className="active-bar"/>
        </div>
        <div className={activeTable === 2?"card-bar primary active":"card-bar primary"} onClick={()=>setActiveTable(2)}>
          <span>
            Activos
          </span>
          <h1>
            154
          </h1>
          <div className="active-bar"/>
        </div>
        <div className={activeTable === 3?"card-bar gray active":"card-bar gray"} onClick={()=>setActiveTable(3)}>
          <span>
            Inactivos
          </span>
          <h1>
            120
          </h1>
          <div className="active-bar"/>
        </div>
      </section>
      <section className="tool-bar">
        <div className="tools-01">
          <div className="btn">
            <div className="btn-img">
              <Image src={AddBtn} width={14} height={'auto'} alt="Add"/>
            </div>
            <div className="btn-name">
              Agregar
            </div>
          </div>
        </div>
        <div className="tools-02">
          <div className={selRow.id > 0 ?"btn secondary": "btn secondary disabled"}>
            <div className="btn-img">
              <Image src={RenewBtn} width={19} height={'auto'} alt="Renew"/>
            </div>
            <div className="btn-name">
              Renovar
            </div>
          </div>
          <div className={selRow.id > 0 ?"btn secondary": "btn secondary disabled"}>
            <div className="btn-img">
              <Image src={PayBtn} width={11} height={'auto'} alt="Pay"/>
            </div>
            <div className="btn-name">
              Regis Pago
            </div>
          </div>
          <div className={selRow.id > 0 ?"btn secondary": "btn secondary disabled"}>
            <div className="btn-img">
              <Image src={AsisBtn} width={17} height={'auto'} alt="Asis"/>
            </div>
            <div className="btn-name">
              Regis Asis.
            </div>
          </div>
          <div className={selRow.id > 0 ?"btn warning": "btn warning disabled"}>
            <div className="btn-img">
              <Image src={DelBtn} width={12} height={'auto'} alt="Delete"/>
            </div>
            <div className="btn-name">
              Eliminar
            </div>
          </div>
        </div>
      </section>
      <section className='data-table'>
        <div className="dt-wrap">
          <div className="dt-header">
            <div className="header-wrap">
              <Image src={SearchIcon} width={27} height={'auto'} alt='Search' onClick={()=> console.log('hola')}/>
              <input placeholder='Buscar' type='text' onChange={handleSearchTerm} value={searchTerm}/>
            </div>
            {
              selRow.id > 0 && (
                <div className="header-deselect">
                  <Image src={DeselectIcon} width={21} height={'auto'} alt='Deselect' onClick={()=>setSelRow({id:0})}/>
                </div>
              )
            }
          </div>
          <div className="dt-body">
            {
              currentItems.length > 0 ? (
                <table className="dt-all">
                  <thead>
                    <tr>
                      <th/>
                      <th>
                        ID
                      </th>
                      <th>
                        Nombre
                      </th>
                      <th>
                        Plan
                      </th>
                      <th>
                        Inicio
                      </th>
                      <th>
                        Final
                      </th>
                      <th>
                        Asis
                      </th>
                      <th>
                        Deuda
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      currentItems.map((cli, id)=>(
                        <tr className={selRow.id === cli.id ? 'active':''} key={id} onClick={()=>setSelRow(cli)}>
                          {
                            handleClientActive(cli) ? (
                              <td className='primary'/>
                            ):(
                              <td className='gray'/>
                            )
                          }
                          <td>
                            {cli.id}
                          </td>
                          <td>
                            {cli.name}
                          </td>
                          <td>
                            {cli.plan}
                          </td>
                          <td>
                            {cli.init}
                          </td>
                          <td>
                            {cli.end}
                          </td>
                          <td>
                            {cli.asis}
                          </td>
                          <td>
                            <span className={cli.debt > 0 ?'loan': 'loan full'}>
                              ${cli.debt.toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              ):(
                <>
                  No existen datos
                </>
              )
            }
            
          </div>
        </div>
        <div className="dt-pagination">
          <Image src={LeftArrow} width={12} height={'auto'} alt='Change Page' className={currentPage === 1 ? 'disabled' : ''} onClick={handlePreviousPage}/>
          <span>
            {currentPage} de {totalPages}
          </span>
          <Image src={RightArrow} width={12} height={'auto'} alt='Change Page' className={currentPage === totalPages ? 'disabled' : ''} onClick={handleNextPage}/>

        </div>
      </section>

    </div>
  )
}

export default Clients