import style from "./HomeRootComposantC.module.css"
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import ControllerDataImageHome from "../../ControllerDataImageHome";

function HomeRootComposantC() {
    return (
        <section className={style.HomeRootComposantC}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Votre mariage, ce moment tant attendu !
                </h2>
            </header>

            <Container4ImagesRoot
                img1={ControllerDataImageHome[4].src}
                MetaNameImg1={ControllerDataImageHome[4].alt}
                img2={ControllerDataImageHome[5].src}
                MetaNameImg2={ControllerDataImageHome[5].alt}
                img3={ControllerDataImageHome[6].src}
                MetaNameImg3={ControllerDataImageHome[6].alt}
                img4={ControllerDataImageHome[7].src}
                MetaNameImg4={ControllerDataImageHome[7].alt}
            />

            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    Il y a des jours où le temps semble suspendu, où chaque battement de cœur résonne fort et où chaque 
                    minute passe à la vitesse d’une seconde. {" "}
                    <span className={style.SpanBold}>
                        {"Votre mariage est bien plus qu’un événement."}
                    </span>
                   {" "} C’est une promesse murmurée entre vous deux et une acclamation partagée avec ceux que vous aimez. 
                   En tant que photographe de mariage à Montpellier, je ne me contente pas de prendre des photos. {" "}
                   <span className={style.SpanBold}>
                        {"Je capture l’essence même de votre union."}
                    </span>
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    Discrète mais toujours présente, je me fonds parmi vos invités pour saisir les éclats de rire, les 
                    étreintes sincères, les petites attentions qui font toute la différence. Je travaille comme un témoin 
                    invisible, figeant {" "}
                    <span className={style.SpanBold}>
                        {"l’instant sans jamais le forcer."}
                    </span>
                    {" "} Et après la fête, lorsque tout semble redevenu silencieux, il restera ces images, ce déroulé de 
                    cette énorme journée, ces clichés que vous redécouvrirez au fil des années, que vous partagerez avec 
                    vos proches, que vous transmettrez peut-être un jour.  
                </p>
            </article>
            <article className={style.ContainerText}>
                    <p className={style.Text}>
                        Découvrez plus en détail {" "}
                        <span className={style.SpanLink}>
                            <Link to={ListDataRouter[13].path}>
                                {"mes prestations de mariage !"}
                            </Link>
                        </span>
                    </p>
                </article>

        </section>
    );
}

export default HomeRootComposantC;
