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
                 <Link to="/qui-suis-je" className={moduleMenuLink}>Qui suis-je</Link>
             </li>

             <li className={moduleMenuLi}>
                 <Link to="/mariage" className={moduleMenuLink}>Mariage</Link>
             </li>
             
             <li className={moduleMenuLi}>
                 <Link to="portraits" className={moduleMenuLink}>Portraits</Link>
             </li>

             <li className={moduleMenuLi}>
                 <Link to="tarifs" className={moduleMenuLink}>Tarifs</Link>
             </li>

         </ul>
        </>
    )
}

export default MenuNavRoot;