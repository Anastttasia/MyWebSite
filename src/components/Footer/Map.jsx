import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Map = () => {
    return (
        <Ymaps query={{ load: 'control.ZoomControl', lang: 'ru_RU' }}>
            <div>
                <Map defaultState={{ center}}>

                </Map>
           
           {/* // <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1571eea7f2c8c984af7d0766261d0f56b2e7c45042cef154ce8711f9b7dba1f3&amp;width=600&amp;height=300&amp;lang=ru_RU&amp;scroll=true">
            // </script> */}

            </div>
        </Ymaps>
)
}

export default Map;