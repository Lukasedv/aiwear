import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'

const Map = ({ lat, lng}) => {
  if(!lat || !lng) {
    return null
  }

  console.log(lat, lng)
    
  return(
    <MapContainer center={[lat, lng]} zoom={13} zoomControl={true} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map