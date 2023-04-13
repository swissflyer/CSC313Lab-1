import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import Overlay from 'ol/Overlay.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-120.6518558, 35.65]),
    zoom: 5
  })
});


// Seattle marker
const markerSeattle = new Overlay({
  position: fromLonLat([-122.530518, 47.607716]),
  positioning: 'center-center',
  element: document.getElementById('marker1'),
  stopEvent: false,
});
map.addOverlay(markerSeattle);

const markerSB = new Overlay({
  position: fromLonLat([-121.632953, 36.686648]),
  positioning: 'center-center',
  element: document.getElementById('marker2'),
  stopEvent: false,
});
map.addOverlay(markerSB);

const markerSal = new Overlay({
  position: fromLonLat([-119.720764, 34.422063]),
  positioning: 'center-center',
  element: document.getElementById('marker3'),
  stopEvent: false,
});
map.addOverlay(markerSal);
