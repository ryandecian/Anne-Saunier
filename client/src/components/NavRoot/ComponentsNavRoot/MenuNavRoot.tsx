import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuNavRootProps {
  moduleMenuUl: string;
  moduleMenuLi: string;
  moduleMenuLink: string;
  moduleSubMenu?: string;
  moduleSubMenuLi?: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
  const { moduleMenuUl, moduleMenuLi, moduleMenuLink, moduleSubMenu, moduleSubMenuLi } = Props;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <ul className={moduleMenuUl}>
      <li className={moduleMenuLi}>
        <Link to="/actualite" className={moduleMenuLink}>Actualité</Link>
      </li>

      <li className={moduleMenuLi}>
        <Link to="/mariage" className={moduleMenuLink}>Mariage</Link>
      </li>

      {/* Menu déroulant pour Portraits */}
      <li className={moduleMenuLi} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <span className={moduleMenuLink} style={{ cursor: "pointer" }}>
          Portraits ▼
        </span>
        {isSubMenuOpen && (
          <ul className={moduleSubMenu}>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-individuels" className={moduleMenuLink}>Individuels</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-couple" className={moduleMenuLink}>Couple</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-corporate" className={moduleMenuLink}>Corporate</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-enfant" className={moduleMenuLink}>Grossesse / Nouveau nés</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={moduleMenuLi}>
        <Link to="/tarifs" className={moduleMenuLink}>Tarifs</Link>
      </li>
    </ul>
  );
}

export default MenuNavRoot;
