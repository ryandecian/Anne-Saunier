import style from './HomePC.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';
import ContainerExpertiseHomeRoot from '../ComponentHomeRoot/ContainerExpertiseHomeRoot/ContainerExpertiseHomeRoot';
import ContainerServicesHomeRoot from '../ComponentHomeRoot/ContainerServicesHomeRoot/ContainerServicesHomeRoot';

import HomeRootContainerA from '../ComponentHomeRoot/HomeRootContainerA/HomeRootContainerA';
import HomeRootComposantB from '../ComponentHomeRoot/HomeRootComposantB/HomeRootComposantB';

function HomePC() {
    return (
        <div className={style.HomePC}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootContainerA />

            {/* Container 3 : Portrait */}
            <HomeRootComposantB />

            {/* Container 4 : Expertise */}
            <ContainerExpertiseHomeRoot />

            {/* Container 4 : Présentation des services */}
            <ContainerServicesHomeRoot />
        </div>
    );
}

export default HomePC;