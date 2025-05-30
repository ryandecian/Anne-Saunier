import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitHobbieControllerData from "../../ImagesPortraitHobbieControllerData";

function PortraitHobbieRootComponentA() {
  return (
    <section className={`PortraitHobbieRootComponentA ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Parce que chaque Hobbie a son histoire, offrez-vous un portrait fidèle à votre complicité"}
            </h2>
        </header>

        <p className={style.TextP4}>
            On a tous un truc qui nous fait vibrer. <br />
            Un art, un sport, un instrument, un geste maîtrisé. <br />
            Que vous soyez judoka, cavalière, danseuse, batteur du dimanche, passionné de jardinage ou collectionneur de vinyles, 
            <span className={style.SpanBold}>
                {" votre passion fait partie de votre identité."}
            </span>
        </p>

        <p className={style.TextP4}>
            Alors pourquoi ne pas lui donner une place en image ? <br />
            Un
            <span className={style.SpanBold}>
                {" portrait centré sur ce que vous aimez, "}
            </span>
            c’est l’occasion de figer un moment de fierté, de plaisir, de concentration ou de mouvement. C’est aussi une façon de dire : “voilà qui je 
            suis, au-delà du boulot, au-delà des apparences”.
        </p>

        <Container4ImagesRoot
            img1={ImagesPortraitHobbieControllerData[0].src}
            MetaNameImg1={ImagesPortraitHobbieControllerData[0].alt}
            img2={ImagesPortraitHobbieControllerData[1].src}
            MetaNameImg2={ImagesPortraitHobbieControllerData[1].alt}
            img3={ImagesPortraitHobbieControllerData[2].src}
            MetaNameImg3={ImagesPortraitHobbieControllerData[2].alt}
            img4={ImagesPortraitHobbieControllerData[3].src}
            MetaNameImg4={ImagesPortraitHobbieControllerData[3].alt}
        />
    </section>
  );
}

export default PortraitHobbieRootComponentA;
