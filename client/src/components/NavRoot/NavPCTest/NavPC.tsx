import "./NavPC.css"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"
// import IconNavRoot from "../ComponentsNavRoot/IconNavRoot"
// import StyleIcon from "../ComponentsNavRoot/IconNavRoot.module.css"

function NavPC() {

    return (
        <nav className="NavPC">
             <div className="NavTopPC">

                 {/* <IconNavRoot
                 iconNav={StyleIcon.IconNavPC}
                 /> */}

                 {/*Le style de ce composant est directement géré par le module CSS :
                 MenuNavRoot.module.css*/}
                 <MenuNavRoot
                     moduleMenuUl={style.MenuUlPC}
                     moduleMenuLi={style.MenuLiPC}
                     moduleMenuLink={style.MenuLinkPC}
                 />

             </div>


             <section className="NavBottomPC">
                <Link to="/home">
                     <h1>Avec Ou Sans Flash</h1>
                </Link>
                 <h3>Anne SAUNIER - Photographe professionnel</h3>
             </section>
        </nav>
    )
}

export default NavPC;