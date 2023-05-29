import React from "react";
import {
    Grid,
    CircularProgress,
    Typography,
} from "@mui/material";
import {useStyles} from "../hooks/useStyles";


export default function Loading({text}) {
    const {classes} = useStyles();
    return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: "50vh"}}
    >
        <Grid item xs={3}>
            <CircularProgress/>
        </Grid>
        <Grid item xs={3}>
            {text && <Typography>
                <span className={classes.loading}>{text}</span>
            </Typography>}
        </Grid>
    </Grid>
}
