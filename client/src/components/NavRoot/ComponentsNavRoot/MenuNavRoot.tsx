import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuNavRootProps {
  moduleMenuUl: string;
  moduleMenuLi: string;
  moduleMenuLink: string;
  moduleSubMenuUl: string;
  moduleSubMenuLi: string;
  moduleSubMenuLink: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
  const { moduleMenuUl, moduleMenuLi, moduleMenuLink, moduleSubMenuUl, moduleSubMenuLi, moduleSubMenuLink } = Props;

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
          <ul className={moduleSubMenuUl}>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-individuels" className={moduleSubMenuLink}>Individuels</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-couple" className={moduleSubMenuLink}>Couple</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-corporate" className={moduleSubMenuLink}>Corporate</Link>
            </li>
            <li className={moduleSubMenuLi}>
              <Link to="/portraits-enfant" className={moduleSubMenuLink}>Grossesse / Nouveau nés</Link>
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
