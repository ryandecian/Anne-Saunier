import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitFamilles from "./DataSEO_PortraitFamille.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitFamille_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitFamille: DataSEOTargetOneType = DataSEO_PortraitFamilles(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitFamille.position,
                "name": DataSEO_PortraitFamille.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Famille */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitFamille.id_Service,
                    "url": DataSEO_PortraitFamille.url,
                    "name": DataSEO_PortraitFamille.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitFamille_Schema_SEO;
