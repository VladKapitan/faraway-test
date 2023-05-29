import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from "react-router-dom";
import {useStyles} from "../hooks/useStyles";
import {swIcon} from "../Utils/svgIcons";

function AppMenu() {
    const navigate = useNavigate()
    const {classes} = useStyles();
    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <IconButton className={classes.characterName}>
                    {swIcon}
                </IconButton>
                <Typography
                    variant="h4"
                    noWrap
                    className={classes.characterName}
                    onClick={() => navigate("/")}
                    component="h4"
                    sx={{mr: 2, ml: 2, flexGrow: 1,}}>
                    Fear is the way to the dark side
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
}

export default AppMenu;