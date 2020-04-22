import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Payment() {

    return (
        <Container maxWidth="md" >
            <Grid>
                <Typography variant="h3">
                    This is Payment info
                </Typography>
            </Grid>
        </Container>
    );
}