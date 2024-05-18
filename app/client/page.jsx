'use client'

import UserIcon from '@public/assets/icons/user-icon.png'
import CheckIcon from '@public/assets/icons/check-icon.png'
import CalendarIcon from '@public/assets/icons/calendar-icon.png'
import DollarIcon from '@public/assets/icons/dollar-icon.png'
import Image from 'next/image'
import { useEffect } from 'react'


const Client = () => {

  const totalMoney = 1540.52
  const totalSuppostedMoney = 2460

  useEffect(()=>{
    const rootStyles = getComputedStyle(document.documentElement);

    const primaryColorLight = rootStyles.getPropertyValue('--primary-color-light').trim()
    const backgroundColorLight = rootStyles.getPropertyValue('--background-color-light').trim()

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".total")

    let progressStartValue = 0,
    progressEndValue = totalMoney,
    speed = 1

    let progress = setInterval(() => {

      if(progressStartValue <= progressEndValue * 0.99){
        progressStartValue = progressStartValue + 1
      }else{
        progressStartValue = progressStartValue + 0.01
      }

      progressValue.textContent = `$${progressStartValue.toFixed(2)}`
      circularProgress.style.background = `conic-gradient(${primaryColorLight} ${((progressStartValue * 100) / totalSuppostedMoney) * 3.6}deg, ${backgroundColorLight} 0deg)`

      if(progressStartValue >= progressEndValue){
        progressStartValue = progressStartValue - 0.01
        progressValue.textContent = `$${progressStartValue.toFixed(2)}`

        clearInterval(progress)
      }
    }, speed)
  },[])

  return (
    <div className="home-client">
      <section className="tasks-shortcuts">
        <div className="shortcut">
          <div className="icon-wrap">
            <Image src={DollarIcon} width={20} height={'auto'} alt='User'/>
          </div>
          <span className='name'>
            Registrar Pago
          </span>
        </div>
        <div className="shortcut">
          <div className="icon-wrap">
            <Image src={UserIcon} width={20} height={'auto'} alt='User'/>
          </div>
          <span className='name'>
            Nuevo Cliente
          </span>
        </div>
        <div className="shortcut">
          <div className="icon-wrap">
            <Image src={CheckIcon} width={20} height={'auto'} alt='User'/>
          </div>
          <span className='name'>
            Marcar Asistencia
          </span>
        </div>
        <div className="shortcut">
          <div className="icon-wrap">
            <Image src={CalendarIcon} width={20} height={'auto'} alt='User'/>
          </div>
          <span className='name'>
            Crear Plan
          </span>
        </div>
      </section>
      <section className='dashboard-part-01'>
        <div className="money-statistics">
          <div className="total-money">
            <span className="date">16 | Mayo</span>
            <span className="total">{0}</span>
            <span className="tag">Total Pagos</span>
            <div className="circular-progress"/>
          </div>
          <div className="total-paids">
            <div className="paids">

            </div>
            <div className="nopaids">

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Client