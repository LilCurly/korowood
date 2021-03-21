import './GetCatalog.scss'
import {ReactComponent as CatalogSvg} from './catalog.svg'

import React from 'react'

function GetCatalog() {
    return (
        <div className="GetCatalog-Container" id="button-7" onMouseEnter={() => {

        }}>
            <a href="#">
                <p>
                    <span className="bg"/>
                    <span className="base"/>
                    <span className="text">
                        <CatalogSvg className="catalog-svg" fill="#0f1923"/> CONSULTER NOTRE CATALOGUE
                    </span>
                </p>
            </a>
        </div>
    )
}

export default GetCatalog;