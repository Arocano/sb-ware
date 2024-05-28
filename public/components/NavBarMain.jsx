import LogoNavBar from "@public/assets/icons/logo-navbar.png"
import LogoNavBarDark from "@public/assets/icons/logo-navbar-dark.png"
import { useTheme } from "@context/ThemeContext"
import Image from "next/image"
import { useRouter } from "next/navigation"

const NavBarMain = () => {
    const router = useRouter()

    const {isDarkMode} = useTheme()

    

  return (
    <>
        <div className="logo-navbar">
            {
                isDarkMode ? (
                    <Image src={LogoNavBarDark} height={60} width={'auto'}/>    
                ):(
                    <Image src={LogoNavBar} height={60} width={'auto'}/>    
                )
            }
        </div>
        <nav className="main-navbar">
            <ul className="items-wrap">
                <li className="nav-item">
                    Software
                </li>
                <li className="nav-item">
                    Precios
                </li>
                <li className="nav-item">
                    Contactate
                </li>
            </ul>
            <ul className="items-wrap">
                <li className="nav-item">
                    Crear Cuenta
                </li>
                <li className="btn01 nav-item" onClick={()=>router.push('/client')}>
                    Ingresar
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavBarMain