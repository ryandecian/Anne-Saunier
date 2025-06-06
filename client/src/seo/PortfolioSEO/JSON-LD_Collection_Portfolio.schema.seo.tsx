import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Portfolios from "./DataSEO_Portfolio.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import generatePortfolioHasPartSEO from "./utils/generatePortfolioHashPartSEO.utils";

function JSON_LD_Collection_Portfolio_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Portfolio: DataSEOTargetOneType = DataSEO_Portfolios(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].CollectionPage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_Portfolio.id_Service,
        "about": DataSEO_Portfolio.serviceType,
        "name": DataSEO_Portfolio.name_Collection, /* (Obligatoire) Correspond au H1 ou title de la page */
        "image": DataSEO_Portfolio.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_Portfolio.description,
        "url": DataSEO_Portfolio.url,
        "publisher": {
            "@type": "Organization",
            "name": DataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": DataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
        "hasPart": generatePortfolioHasPartSEO(), /* (Obligatoire) Liste des images du portfolio */
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Collection_Portfolio_Schema_SEO;
