'use client'

import HomeIcon from '@public/assets/icons/home-icon.png'
import BusinessIcon from '@public/assets/icons/business-icon.png'
import SettingIcon from '@public/assets/icons/setting-icon.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const NavBarClient = () => {

    const router = useRouter()

    /* Handle Active */

    const [activePage, setActivePage] = useState('')

    const handleActivePage = (id) => {

        setActivePage(id)

        router.push(id)
    }

    useEffect(()=>{
        
        const path = window.location.pathname;

        if(path){
            setActivePage(path)
        }

    },[])

  return (
        <nav className="client-navbar">
            <ul className='items-wrap'>
                <li className={activePage === '/client' ? 'nav-item active':'nav-item'} onClick={()=>handleActivePage('/client')}>
                    <Image className='item-icon' src={HomeIcon} width={22} height={'auto'} alt='Home'/>
                    <span className='item-name'>Inicio</span>
                </li>
                <li className={activePage === '/client/business' ? 'nav-item active':'nav-item'} onClick={()=>handleActivePage('/client/business')}>
                    <Image className='item-icon' src={BusinessIcon} width={22} height={'auto'} alt='Home'/>
                    <span className='item-name'>Empresa</span>
                </li>
                <li className={activePage === '/client/config' ? 'nav-item active':'nav-item'} onClick={()=>handleActivePage('/client/config')}>
                    <Image className='item-icon' src={SettingIcon} width={22} height={'auto'} alt='Home'/>
                    <span className='item-name'>Configuracion</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarClient