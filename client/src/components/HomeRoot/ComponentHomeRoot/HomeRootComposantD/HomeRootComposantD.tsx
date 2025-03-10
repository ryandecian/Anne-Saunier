import style from "./HomeRootComposantD.module.css"
import AvisClient from "../ComposantHomeRoot/ContainerAvisHomeRoot/AvisClient";

function HomeRootComposantD() {
    return (
        <section className={style.HomeRootComposantD}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Des photos, des expériences, des mots, ils m'ont fait confiance !
                </h2>
            </header>

            <AvisClient />
        </section>
    );
}

export default HomeRootComposantD;
