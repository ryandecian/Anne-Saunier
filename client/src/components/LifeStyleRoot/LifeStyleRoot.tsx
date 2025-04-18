import style from "../StyleRootComponent.module.css";
import ImagesLifeStyleControllerData from "./ImagesLifeStyleControllerData";
import Container4ImagesRoot from "../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";

import LifeStyleRootComponentA from "./ComponentsLifeStyleRoot/LifeStyleRootComponentA/LifeStyleRootComponentA";
import LifeStyleRootComponentB from "./ComponentsLifeStyleRoot/LifeStyleRootComponentB/LifeStyleRootComponentB";
import LifeStyleRootComponentC from "./ComponentsLifeStyleRoot/LifeStyleRootComponentC/LifeStyleRootComponentC";
import LifeStyleRootComponentD from "./ComponentsLifeStyleRoot/LifeStyleRootComponentD/LifeStyleRootComponentD";
import LifeStyleRootComponentE from "./ComponentsLifeStyleRoot/LifeStyleRootComponentE/LifeStyleRootComponentE";
import LifeStyleRootComponentF from "./ComponentsLifeStyleRoot/LifeStyleRootComponentF/LifeStyleRootComponentF";
import LifeStyleRootComponentG from "./ComponentsLifeStyleRoot/LifeStyleRootComponentG/LifeStyleRootComponentG";
import LifeStyleRootComponentH from "./ComponentsLifeStyleRoot/LifeStyleRootComponentH/LifeStyleRootComponentH";

function LifeStyleRoot() {
    return (
        <section className={`LifeStyleRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait LifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            {/* Container A : Titre et textes */}
            <LifeStyleRootComponentA />

            {/* Container B : Cards */}
            <LifeStyleRootComponentB />
            
            {/* Container C : Portrait Solo */}
            <LifeStyleRootComponentC />

            {/* Container 1 : Container image portrait solo */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[6].src}
            MetaNameImg1={ImagesLifeStyleControllerData[6].alt}
            img2={ImagesLifeStyleControllerData[7].src}
            MetaNameImg2={ImagesLifeStyleControllerData[7].alt}
            img3={ImagesLifeStyleControllerData[8].src}
            MetaNameImg3={ImagesLifeStyleControllerData[8].alt}
            img4={ImagesLifeStyleControllerData[9].src}
            MetaNameImg4={ImagesLifeStyleControllerData[9].alt}
            />
            
            {/* Container D : Portrait couple */}
            <LifeStyleRootComponentD />

            {/* Container 2 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[10].src}
            MetaNameImg1={ImagesLifeStyleControllerData[10].alt}
            img2={ImagesLifeStyleControllerData[11].src}
            MetaNameImg2={ImagesLifeStyleControllerData[11].alt}
            img3={ImagesLifeStyleControllerData[12].src}
            MetaNameImg3={ImagesLifeStyleControllerData[12].alt}
            img4={ImagesLifeStyleControllerData[13].src}
            MetaNameImg4={ImagesLifeStyleControllerData[13].alt}
            />
            
            {/* Container E : Portrait famille - amis */}
            <LifeStyleRootComponentE />

            {/* Container 3 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[14].src}
            MetaNameImg1={ImagesLifeStyleControllerData[14].alt}
            img2={ImagesLifeStyleControllerData[15].src}
            MetaNameImg2={ImagesLifeStyleControllerData[15].alt}
            img3={ImagesLifeStyleControllerData[16].src}
            MetaNameImg3={ImagesLifeStyleControllerData[16].alt}
            img4={ImagesLifeStyleControllerData[17].src}
            MetaNameImg4={ImagesLifeStyleControllerData[17].alt}
            />
            
            {/* Container F : Portrait nouveau-nés */}
            <LifeStyleRootComponentF />
            
            {/* Container G : Portrait grossesse */}
            <LifeStyleRootComponentG />
            
            {/* Container H : Portrait Lives */}
            <LifeStyleRootComponentH />

            {/* Container 4 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[26].src}
            MetaNameImg1={ImagesLifeStyleControllerData[26].alt}
            img2={ImagesLifeStyleControllerData[27].src}
            MetaNameImg2={ImagesLifeStyleControllerData[27].alt}
            img3={ImagesLifeStyleControllerData[28].src}
            MetaNameImg3={ImagesLifeStyleControllerData[28].alt}
            img4={ImagesLifeStyleControllerData[29].src}
            MetaNameImg4={ImagesLifeStyleControllerData[29].alt}
            />
        </section>
    );
}

export default LifeStyleRoot;
