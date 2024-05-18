import HomeIcon from '@public/assets/icons/home-icon.png'
import BusinessIcon from '@public/assets/icons/business-icon.png'
import SettingIcon from '@public/assets/icons/setting-icon.png'
import Image from 'next/image'

const NavBarClient = () => {
  return (
        <nav className="client-navbar">
            <ul className='items-wrap'>
                <li className='nav-item'>
                    <Image className='item-icon' src={HomeIcon} width={32} height={'auto'} alt='Home'/>
                    <span className='item-name'>Inicio</span>
                </li>
                <li className='nav-item'>
                    <Image className='item-icon' src={BusinessIcon} width={32} height={'auto'} alt='Home'/>
                    <span className='item-name'>Empresa</span>
                </li>
                <li className='nav-item'>
                    <Image className='item-icon' src={SettingIcon} width={32} height={'auto'} alt='Home'/>
                    <span className='item-name'>Configuracion</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarClient