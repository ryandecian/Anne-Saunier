import style from "../StyleRootComponent.module.css";

import AvisClientPortraitSoloControllerData from "./AvisClientPortraitSoloControllerData";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import PortraitSoloRootComponentA from "./ComponentsPortraitSoloRoot/PortraitSoloRootComponentA/PortraitSoloRootComponentA";
import PortraitSoloRootComponentB from "./ComponentsPortraitSoloRoot/PortraitSoloRootComponentB/PortraitSoloRootComponentB";

import PricingCardRoot from "./Carte/PrestationsCardRoot";

function PortraitSoloRoot() {
    return (
        <section className={`PortraitSoloRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Solo : Une séance photos pour renouer avec votre image !
                </h1>
            </header>

            {/* Container A */}
            <PortraitSoloRootComponentA />

            {/* Container B */}
            <PortraitSoloRootComponentB />

            {/* Tarifs test */}
            <PricingCardRoot />

            {/* Container C : Avis Clients */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitSoloControllerData} />
        </section>
    )
}

export default PortraitSoloRoot;
