'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AddBtn from '@public/assets/icons/btn-add.png'
import DelBtn from '@public/assets/icons/btn-delete.png'
import RenewBtn from '@public/assets/icons/btn-renew.png'
import AsisBtn from '@public/assets/icons/btn-asis.png'
import PayBtn from '@public/assets/icons/btn-pay.png'
import SearchIcon from '@public/assets/icons/search-icon.png'
import RightArrow from '@public/assets/icons/right-arrow.png'
import LeftArrow from '@public/assets/icons/left-arrow.png'
import DeselectIcon from '@public/assets/icons/deselect-icon.png'
import ConfirmModal from '@public/components/client/ConfirmModal'

const Clients = () => {

  /* Active Table */

  const [activeTable, setActiveTable] = useState(1)

  /* Client Data */

  const [baseData, setBaseData] = useState([
    {
      id: 1,
      name: 'Farid Ruano',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 0,
      debt: 30,
    },
    {
      id: 2,
      name: 'Marcela Cabrera',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 0,
      debt: 30,
    },
    {
      id: 3,
      name: 'Mateo Chagcha',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-08',
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
      end: '2024-06-07',
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
      end: '2024-06-05',
      asis: 10,
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
      end: '2024-05-20',
      asis: 30,
      debt: 30,
    },
  ])

  const [clientData, setClientData] = useState([
    {
      id: 1,
      name: 'Farid Ruano',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 0,
      debt: 30,
    },
    {
      id: 2,
      name: 'Marcela Cabrera',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-12',
      asis: 0,
      debt: 30,
    },
    {
      id: 3,
      name: 'Mateo Chagcha',
      plan: 'Plan Guaytambo',
      init: '2024-05-12',
      end: '2024-06-08',
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
      end: '2024-06-07',
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
      end: '2024-06-05',
      asis: 10,
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
      end: '2024-05-20',
      asis: 30,
      debt: 30,
    },
  ])
  
  const [activeData, setActiveData] = useState([])

  const [inactiveData, setInactiveData] = useState([])

  const countClients = () => {
    return baseData.length
  }

  const countClientsInactive = () =>{
    const current = new Date()
    const filteredData = (baseData.filter(cli => {
      const cliDate = new Date(cli.end)
      
      // Control date validness
      if (isNaN(cliDate)) {
        console.warn(`Invalid date: ${cli.end}`)
        return false;
      }
      
      return cli.asis === 0 || cliDate < current
    }))
    return filteredData.length

  }

  const countClientsActive = () => {
    const current = new Date()
    const filteredData = (baseData.filter(cli => {
      const cliDate = new Date(cli.end)
      
      // Control date validness
      if (isNaN(cliDate)) {
        console.warn(`Invalid date: ${cli.end}`)
        return false;
      }
      
      return cli.asis > 0 && cliDate > current
    }))
    return filteredData.length
  }

  /* Add Client */

  const [addClient, setAddClient] = useState(false)

  const handleAddClient = () => {
    setAddClient(current => !current)
    setSelRow({id:0})
  }

  const [durationPlan, setDurationPlan] = useState(30)
  
  const currentDate = new Date()

  const getFormattedDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const [startDate, setStartDate] = useState(getFormattedDate(currentDate))

  const addDays = (date, days) =>{
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const [endDate, setEndDate] = useState(getFormattedDate(addDays(currentDate, durationPlan)))

  const [newClient, setNewClient] = useState({
    ced: '',
    name: '',
    last: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleNewClient = (e) => {
    const { name, value } = e.target
    setNewClient({
      ...newClient,
      [name]: value,
    })
  }

  const handleStartDate = (e) => {
    const [year, month, day] = e.target.value.split('-')
    const date = new Date(year, month - 1, day)
    setStartDate(getFormattedDate(date))
    setEndDate(getFormattedDate(addDays(date, durationPlan)))
  }

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
      const nextPage = currentPage - 1
      setCurrentPage(nextPage)
      setCurrentItems(clientData.slice(
        (nextPage - 1) * itemsPerPage,
        nextPage * itemsPerPage
      ))
    }
  }

  const handleNextPage = () => {
    setSelRow({id:0})
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      setCurrentItems(clientData.slice(
        (nextPage - 1) * itemsPerPage,
        nextPage * itemsPerPage
      ))
    }
  }

  const handleClientActive = (cli) => {
    const isDate = new Date(cli.end)

    const asis = cli.asis

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if(isDate < currentDate){
      return false
    }else if(asis < 1){
      return false
    } else{
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

  const handleDataClient = (n) => {
    setActiveTable(n)
    const current = new Date()
    if(n === 1){
      setClientData(baseData)
      setTotalPages(Math.ceil(baseData.length / itemsPerPage))
      setCurrentItems(baseData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ))
    }

    if(n === 2) {
      const filteredData = (baseData.filter(cli => {
        const cliDate = new Date(cli.end)
        
        // Control date validness
        if (isNaN(cliDate)) {
          console.warn(`Invalid date: ${cli.end}`)
          return false;
        }
        
        return cli.asis > 0 && cliDate > current
      }))
      setClientData(filteredData)
      setTotalPages(Math.ceil(filteredData.length / itemsPerPage))
      setCurrentItems(filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ))
    }
    if(n === 3){
      const filteredData = (baseData.filter(cli => {
        const cliDate = new Date(cli.end)
        
        // Control date validness
        if (isNaN(cliDate)) {
          console.warn(`Invalid date: ${cli.end}`)
          return false;
        }
        
        return cli.asis === 0 || cliDate < current
      }))
      setClientData(filteredData)
      setTotalPages(Math.ceil(filteredData.length / itemsPerPage))
      setCurrentItems(filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ))
    }
  }

  /* Modals */

  const [confirmModal, setConfirmModal] = useState(false)

  const handleConfirm = () => {
    setConfirmModal(current => !current)
  }

  const handleConfirmResponse = () => {
    setConfirmModal(current => !current)
    const filteredData = (clientData.filter(cli => {
      return cli.id !== selRow.id
    }))
    setClientData(filteredData)
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage))
    setCurrentItems(filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ))
    setSelRow({id:0})
  }

   return (
    <div className="company-page">
      <section className={addClient?"stats-bar disabled":"stats-bar"}>
        <div className={activeTable === 1?"card-bar active":"card-bar"} onClick={()=>handleDataClient(1)}>
          <span>
            Clientes
          </span>
          <h1>
            {countClients()}
          </h1>
          <div className="active-bar"/>
        </div>
        <div className={activeTable === 2?"card-bar primary active":"card-bar primary"} onClick={()=>handleDataClient(2)}>
          <span>
            Activos
          </span>
          <h1>
            {countClientsActive()}
          </h1>
          <div className="active-bar"/>
        </div>
        <div className={activeTable === 3?"card-bar gray active":"card-bar gray"} onClick={()=>handleDataClient(3)}>
          <span>
            Inactivos
          </span>
          <h1>
            {countClientsInactive()}
          </h1>
          <div className="active-bar"/>
        </div>
      </section>
      <section className={addClient?"tool-bar hidden":"tool-bar"}>
        <div className="tools-01">
          <div className={!addClient?"btn":"btn cancel"} onClick={()=>handleAddClient()}>
            <div className="btn-img">
              {
                !addClient ? (
                  <Image src={AddBtn} width={14} height={'auto'} alt="Add"/>
                ):(
                  <Image src={DelBtn} width={12} height={'auto'} alt="Delete"/>
                )
              }
            </div>
            <div className="btn-name">
              {!addClient?'Agregar':'Cancelar'}
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
              Reg. Pago
            </div>
          </div>
          <div className={selRow.id > 0 ?"btn secondary": "btn secondary disabled"}>
            <div className="btn-img">
              <Image src={AsisBtn} width={17} height={'auto'} alt="Asis"/>
            </div>
            <div className="btn-name">
              Reg. Asis
            </div>
          </div>
          <div className={selRow.id > 0 ?"btn warning": "btn warning disabled"} onClick={()=>handleConfirm()}>
            <div className="btn-img">
              <Image src={DelBtn} width={12} height={'auto'} alt="Delete"/>
            </div>
            <div className="btn-name">
              Eliminar
            </div>
          </div>
        </div>
      </section>
      {
        !addClient?(
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
        ):(
          <>
          <section className='client-form'>
            <div className="form-header">
              Nuevo Cliente
            </div>
            <div className="form-body">
              <div className="id-client">
                ID <span>100</span>
              </div>
              <form className='form-client'>
                <div className="form">
                  <div className="header">
                    Datos Personales
                  </div>
                  <div className="body">
                    <div className="input-form">
                      <label>Cédula</label>
                      <input type="text" name='ced' onChange={handleNewClient} value={newClient.ced}/>
                    </div>
                    <div className="input-form">
                      <label>Nombre</label>
                      <input type="text" name='name' onChange={handleNewClient} value={newClient.name}/>
                    </div>
                    <div className="input-form">
                      <label>Apellido</label>
                      <input type="text" name='last' onChange={handleNewClient} value={newClient.last}/>
                    </div>
                    <div className="input-form">
                      <label>Email</label>
                      <input type="text" name='email' onChange={handleNewClient} value={newClient.email}/>
                    </div>
                    <div className="input-form">
                      <label>Telefono</label>
                      <input type="text" name='phone' onChange={handleNewClient} value={newClient.phone}/>
                    </div>
                    <div className="input-form">
                      <label>Dirección</label>
                      <input type="text" name='address' onChange={handleNewClient} value={newClient.address}/>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="header">
                    Plan Mensual
                  </div>
                  <div className="body">
                    <div className="input-form">
                      <label>Plan</label>
                      <input type="text" />
                    </div>
                    <div className="input-form">
                      <label>Inicio</label>
                      <input type="date" value={startDate} onChange={handleStartDate}/>
                    </div>
                    <div className="input-form">
                      <label>Duración</label>
                      <input type="text" />
                    </div>
                    <div className="input-form">
                      <label>No. Asis</label>
                      <input type="text" />
                    </div>
                    <div className="input-form">
                      <label>Fin</label>
                      <input type="date" disabled value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="form-submit">
                <div className="btn primary">
                  Guardar
                </div>
              </div>
            </div>
          </section>
          </>
        )
      }
      <ConfirmModal isActive={confirmModal} handleModal={handleConfirm} handleResponse={handleConfirmResponse} dataModal={selRow}/>
    </div>
  )
}

export default Clients