import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitNouveauNes from "./DataSEO_PortraitNouveauNe.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitNouveauNe_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitNouveauNe: DataSEOTargetOneType = DataSEO_PortraitNouveauNes(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitNouveauNe.position,
                "name": DataSEO_PortraitNouveauNe.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Nouveau-Né */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitNouveauNe.id_Service,
                    "url": DataSEO_PortraitNouveauNe.url,
                    "name": DataSEO_PortraitNouveauNe.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitNouveauNe_Schema_SEO;
