import style from "../StyleRootComponent.module.css";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitGrossesseControllerData from "./AvisClientPortraitGrossesseControllerData";

import PortraitGrossesseRootComponentA from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentA/PortraitGrossesseRootComponentA";
import PortraitGrossesseRootComponentB from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentB/PortraitGrossesseRootComponentB";
import PortraitGrossesseRootComponentC from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentC/PortraitGrossesseRootComponentC";

function PortraitGrossesseRoot() {
    return (
        <section className={`PortraitGrossesseRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Grossesse & nouveau-né : capturer la magie de la vie dès ses premiers instants !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <PortraitGrossesseRootComponentA />

            {/* Container B : Client cible Particulier */}
            <PortraitGrossesseRootComponentB />

            {/* Container C : Client cible Entreprise */}
            <PortraitGrossesseRootComponentC />

            {/* Container D : Avis clients */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitGrossesseControllerData} />
        </section>
    )
}

export default PortraitGrossesseRoot;
