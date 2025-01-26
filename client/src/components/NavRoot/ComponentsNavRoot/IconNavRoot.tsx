import mail from "../../../assets/data-img/mail-icon.webp"
import github from "../../../assets/data-img/github-icon.png"
import linkedin from "../../../assets/data-img/linkedin-icon.png"

interface IconNavRootType {
    iconNav: string;
}

function IconNavRoot(Props: IconNavRootType) {
    const {iconNav} = Props
    return (
         <section>
             <div className={iconNav}>
                 <a href="https://github.com/ryandecian">
                     <img src={github} alt="GitHub"/>
                 </a>
             </div>

             <div className={iconNav}>
                 <a href="https://www.linkedin.com/in/ryan-decian-864696302">
                     <img src={linkedin} alt="Linkedin"/>
                 </a>
             </div>

             <div className={iconNav}>
                 <a href="mailto:ryan.decian.dev+portfolio@gmail.com">
                     <img src={mail} alt="Mail"/>
                 </a>
             </div>
         </section>
    )
}

export default IconNavRoot;
