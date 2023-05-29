import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {useStyles} from "../hooks/useStyles";

export default function Saving({open}) {
    const classes = useStyles();
    return <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 300,
        }}
    >
        <Fade in={open}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: "70vh"}}
            >
                <Grid item xs={6}>
                    <CircularProgress/>
                </Grid>
                <Grid item xs={6}>
                    <br/>
                    <br/>
                    <Typography color='primary'>
                        <span className={classes.loading}>Wait, the document is saved...</span>
                    </Typography>
                </Grid>
            </Grid>
        </Fade>
    </Modal>
}