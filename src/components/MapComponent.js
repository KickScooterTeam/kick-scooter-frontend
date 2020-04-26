import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import React, {useState, useEffect} from "react";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from "axios";
import {API_BASE_URL} from "../constants/apiConstants";

export default function MapComponent() {

  const size = { width: "100vw", height: "100vh" };
  const [scooters, setScooters] = useState([]);
  const [chosenScooter, setChosen] = useState({});
  const [pointNewScooter, setNewScooterPoint] = useState({
    stLat: '',
    stLon: '',
    battery: 0
  })
  const [scenarioDestination, setDestination] = useState({
    destLat: '',
    destLon: '',
    dischInd: 3,
    scooterId: ''
  })
  const [simulationMode, setSimMode] = useState();
  const [createScooterMode, setCreateScooterMode] = useState(false);


  useEffect(() => {

  const interval = setInterval(() => {
      axios.get(API_BASE_URL + 'vehicle-service/scooters/status/free')
    .then(response => {
        setScooters(response.data)
        console.log(response.data)
    })
    .catch((error) =>
        console.log(error)
    )
  }, 1000);

   return () => clearInterval(interval);
    
   });  
 
 
   const handleChooseScooterClick = (id) => {
      setChosen(id);
   };
 
 
   const addTestScooter = (e) => {
     if(createScooterMode){
       setNewScooterPoint()
       }
     console.log(coordinates)
 
   }  

   const coordinates = [48.464970, 35.046537]
 
   return (
     <>
       <Map 
         center={coordinates} 
         onClick={addTestScooter}
         zoom={13} 
         style ={size}
         >
         <TileLayer
           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
         />

         {scooters.map((p) => (
          <Marker position={p.coordinates}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.       
            <br/>
            Battery: {p.battery}<br/>
            Id: {p.id}
            <Button onClick={handleChooseScooterClick}>Choose</Button>
            </span> 
          </Popup>
        </Marker>
         ))}
 
       </Map>
       </>
     );
}