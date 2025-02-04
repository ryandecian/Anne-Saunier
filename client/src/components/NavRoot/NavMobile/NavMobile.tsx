import "./NavMobile.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

/* Import des Images*/
import Logo from "../../../assets/Logo/LOGO-Avec-Ou-Sans-Flash.jpeg";

function NavMobile() {
    const [active, setActive] = useState(false)
    const funcActive = () => {
        setActive(!active)
    }
    return (
        <>
             <nav className="NavMobile">
                 <div className="ContainerLogoNavMobile">
                     <Link to="/">
                         <img src={Logo} alt="Logo Avec Ou Sans Flash" />
                     </Link>
                 </div>
                 {/*-------------------------------------------------------*/}
                 <div className="ContainerNavigationNavMobile">

                    <div className="ContainerTitleNavMobile">
                        <Link to="/" className="TitleNavMobile">
                             Avec Ou Sans Flash
                        </Link>
                    </div>

                    <div className="ContainerContactNavMobile">
                         <div className="ContainerMailNavMobile">
                             <a href="mailto:photo34000@gmail.com" className="ContactMailNavMobile">
                                 photo34000@gmail.com
                             </a>
                         </div>
                         <div className="ContainerTelNavMobile">
                             <a href="tel:+33652677333" className="ContactTelNavMobile">
                                 06 52 67 73 33
                             </a>
                         </div>
                     </div>
                 </div>

                 <button className={`sideCloseNav ${active ? "active" : ""}`} type="button" onClick={funcActive}/>
                 <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                     <div>
                         <button type="button" 
                         id="closeBtn" 
                         className="close"
                         onClick={funcActive}>x</button>
                     </div>

                     {/*Le style de ce composant est directement géré par le module CSS :
                     MenuNavRoot.module.css*/}
                     <MenuNavRoot
                         moduleMenuUl={style.MenuUlMobile}
                         moduleMenuLi={style.MenuLiMobile}
                         moduleMenuLink={style.MenuLinkMobile}
                         moduleSubMenu={style.MenuSubMenu}
                         moduleSubMenuLi={style.MenuSubMenuLi}
                     />


                 </div>

                 <button type="button" 
                 id="openBtn"
                 onClick={funcActive}>
                    <span className="menuBurger">
                        <span />
                        <span />
                        <span />
                    </span>
                 </button>

             </nav>
        </>
    )
}
export default NavMobile;