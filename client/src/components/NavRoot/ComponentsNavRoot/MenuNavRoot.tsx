import { Link } from "react-router-dom";

/*Le style de ce composant est directement géré par le 
CSS du composant qui l'importe et l'utilise*/

interface MenuNavRootProps {
    moduleMenuUl: string;
    moduleMenuLi: string;
    moduleMenuLink: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
    const {moduleMenuUl, moduleMenuLi, moduleMenuLink} = Props
    return (
        <>
         <ul className={moduleMenuUl}>

             <li className={moduleMenuLi}>
                 <Link to="#" className={moduleMenuLink}>Contacts</Link>
             </li>

             <li className={moduleMenuLi}>
                 <Link to="#" className={moduleMenuLink}>Expériences</Link>
             </li>
             
             <li className={moduleMenuLi}>
                 <Link to="#" className={moduleMenuLink}>Projets</Link>
             </li>

         </ul>
        </>
    )
}

export default MenuNavRoot;