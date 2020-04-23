import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Map, TileLayer} from 'react-leaflet';



export default function MapComponent() {

  const size = { width: "100vw", height: "100vh" };

    return (
        // <Container>
            // <Grid item xs='12'>
              <Map center={{ lat: 48.464970, lng: 35.046537 }} zoom={13} style={size}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </Map>
            //  </Grid>
        //  </Container>
    );
}