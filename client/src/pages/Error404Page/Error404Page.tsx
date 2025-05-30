import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import Error404Root from "../../components/Error404Root/Error404Root";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function Error404() {
     return (
        <section className={`Error404 ${style.Page}`}>
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Error404Root />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default Error404;
