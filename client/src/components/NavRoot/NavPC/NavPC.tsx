import "./NavPC.css";
import { Link } from "react-router-dom";
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot";
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

/* Import des Images*/
import Logo from "../../../assets/Logo/LOGO-Avec-Ou-Sans-Flash.jpeg";

function NavPC() {
    return (
        <nav className="NavPC">
            <div className="ContainerLogoNavPC">
                <Link to="/">
                   <img src={Logo} alt="Logo Avec Ou Sans Flash" />
                </Link>
            </div>
            {/*-------------------------------------------------------*/}
            <div className="ContainerNavigationNavPC">
                <div className="ContainerTitleNavPC">
                    <Link to="/" className="TitleNavPC">
                         Avec Ou Sans Flash
                    </Link>
                </div>

                <div className="ContainerMenuNavPC">
                     <MenuNavRoot
                          moduleMenuUl={style.MenuUlPC}
                          moduleMenuLi={style.MenuLiPC}
                          moduleMenuLink={style.MenuLinkPC}
                          moduleSubMenuUl={style.SubMenuUlPC}
                          moduleSubMenuLi={style.SubMenuLiPC}
                          moduleSubMenuLink={style.SubMenuLinkPC}
                     />
                </div>

                <div className="ContainerContactNavPC">
                    <div className="ContainerMailNavPC">
                        <a href="mailto:photo34000@gmail.com" className="ContactMailNavPC">
                            photo34000@gmail.com
                        </a>
                    </div>
                    <div className="ContainerTelNavPC">
                        <a href="tel:+33652677333" className="ContactTelNavPC">
                            06 52 67 73 33
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavPC;