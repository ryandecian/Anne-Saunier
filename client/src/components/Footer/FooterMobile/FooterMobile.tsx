import "./FooterMobile.css"

function FooterMobile() {
    const dateNow = new Date().getFullYear();

    return (
        <section className="FooterMobile">
         <p className="CopyrightMobile"> 
                 <span className="DateLogMobile">
                     {dateNow === 2024 ? `©2024 ` : `©2024 - ${dateNow} `}
                 </span>
             - Anne SAUNIER.
         </p>
         <p className="CopyrightSubMobile">Tous droits réservés.</p>
        </section>
    )
}

export default FooterMobile