import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Contacts from "./DataSEO_Contact.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Contact_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Contact: DataSEOTargetOneType = DataSEO_Contacts(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Contact.position,
                "name": DataSEO_Contact.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Contact */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_Contact.id_Service,
                    "url": DataSEO_Contact.url,
                    "name": DataSEO_Contact.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Contact_Schema_SEO;
