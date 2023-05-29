import React from "react";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";
import {alertType} from "../Types/appTypes";
import {Container} from "@mui/material";

const renderAlerts = (alertPros: { alert: alertType, removeAlert: (message: string) => void }) => <Container>

    <Stack sx={{width: '100%', marginTop: 2}} spacing={1}>
        {Object.entries(alertPros.alert).map(([message, severity]) =>
            <Alert key={message}
                   action={
                       <IconButton

                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                               alertPros.removeAlert(message);
                           }}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
                   severity={severity}>
                <AlertTitle>{severity === "error" ? "Error" : "Message"}</AlertTitle>
                {message}
            </Alert>
        )}
    </Stack>
</Container>

export default renderAlerts