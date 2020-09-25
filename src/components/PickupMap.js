import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./PickupMap.css";
import "./form.css";

function PickupMap() {
  let mx = 0.00002138052075270898;
  let zoom = 13;

  const coordinates = [
    [55.984429197974414, 37.18254999487827],
    [55.99469137566755,37.18818535749681],
  ];
  let sumX = 0;
  let sumY = 0;
  for (let i = 0; i < coordinates.length; i++) {
    sumX += coordinates[i][0];
    sumY += coordinates[i][1];
  }
  let mapData = {
    center: [sumX / coordinates.length, sumY / coordinates.length],
    zoom: 5,
  };
  mapData.zoom = zoom;
  let flag = [];
  while (zoom !== 1) {
    // eslint-disable-next-line no-loop-func
    coordinates.map((c) => {
      if (
        (document.body.clientWidth - 160) * mx >
          Math.abs(c[1] - mapData.center[1]) &&
        350 * mx > Math.abs(c[0] - mapData.center[0])
      )
        flag.push(true);
      else flag.push(false);
    });
    if (flag.includes(false)) {
      zoom--;
      mx *= 2;
      flag = [];
    } else break;
  }
  return (
    <>
      <YMaps>
        <div className="form__element map">
          <Map defaultState={mapData} width="100%" height="40vh">
            {coordinates.map((coordinate) => (
              <Placemark
                geometry={coordinate}
                properties={{
                  hintContent: "Пункт выдачи",
                }}
                options={{
                  iconImageSize: [33, 39],
                  iconImageOffset: [-17, -39],
                }}
              />
            ))}
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default PickupMap;
