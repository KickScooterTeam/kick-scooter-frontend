import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";



export default function MapComponent() {

    return (
        <Container cent>
            <Grid>
                <Typography variant="h3">
                    THIS IS A FANCY MAP
                </Typography>
            </Grid>
        </Container>
    );
}