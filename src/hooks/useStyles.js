import {makeStyles} from "tss-react/mui";
import {blue, green, grey, pink, teal} from "@mui/material/colors";

import {createTheme} from "@mui/material";

export const main = teal[500];
export const secondary = pink[500];
const greyLight = grey[600];
const greyDark = grey[800];
const success = green[500];
const info = blue[500];

export const theme = createTheme({
    palette: {
        primary: {
            main: main,
        },
        secondary: {
            main: secondary,
        },
        success: {
            main: success,
        },
        info: {
            main: info,
        },
        mode: "dark", // Changed 'mode' to 'type' for MUI v5
    },
    typography: {
        fontFamily: "'Arial', sans-serif",
        h1: {
            fontSize: "4rem",
            fontWeight: "bold",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: "bold",
        },
        h3: {
            fontSize: "2rem",
            fontWeight: "bold",
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: "bold",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: "bold",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },
        button: {
            fontWeight: "bold",
            textTransform: "none",
        },
    },
});

export const useStyles = makeStyles({
    name: "Test"
})((theme) => ({


    neonText: {
        display: 'flex',
        alignItems: 'center',
        textShadow: `0 0 0.5rem ${main}, 0 0 1.5rem ${main}, 0 0 3rem ${main}, 0 0 5rem ${main}`,
    },
    //   btn: {
//     marginTop: theme.spacing(2),
//     backgroundColor: teal[500],
//     color: pink[50],
//     '&:hover': {
//       backgroundColor: teal[700],
//     },
//   },
    characterCard: {

        padding: theme.spacing(1),
        minHeight: "250px",
        borderRadius: theme.spacing(1),
        background: `linear-gradient(45deg,${greyDark}, ${greyLight})`,
        boxShadow: `0 0 0.5rem ${greyDark}, 0 0 1rem ${greyDark}, 0 0 1.5rem ${greyDark}`,
        '&:hover': {
            background: `linear-gradient(45deg, ${main}, ${secondary})`,
            boxShadow: `0 0 1rem ${main}, 0 0 2rem ${main}, 0 0 3rem ${main}`,
        },

    },
    characterLeftColumn: {
        minWidth: "40%",
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1),
    },
    characterImage: {
        width: "100%",
        maxWidth: "80px",
        borderRadius: "50%",
        marginBottom: theme.spacing(1),
    },
    characterName: {
        // fontSize: "1.2rem",
        fontWeight: "bold",
        color: theme.palette.primary.secondary,
        textShadow: `0 0 0.5rem ${secondary}, 0 0 0.5rem ${secondary}, 0 0 0.5rem ${secondary}, 0 0 1rem ${secondary}`,
        marginBottom: theme.spacing(1),
    },
    characterDescription: {
        maxWidth: "50%",
        fontSize: "0.8rem",
        textAlign: "left",
        paddingLeft: theme.spacing(2),
    },
    pagination: {
        marginTop: theme.spacing(2) + '!important',
        backgroundColor: `transparent !important`,
    },
    // textRed: {
    //     color: theme.palette.secondary.main
    // },
    // textDisabled: {
    //     color: theme.palette.grey.A200
    // },
    // textPrimary: {
    //     color: theme.palette.primary.main
    // },

    margin: {
        margin: theme.spacing(1) + '!important',
    },
    padding: {
        padding: theme.spacing(3) + '!important',
    },
    marginTop: {
        marginTop: theme.spacing(2) + '!important',
    },

    floatRight: {
        float: 'right',
        // margin: theme.spacing(0, 0, 'auto', 'auto'),

    },
    fullWidth: {
        width: '100%',
    },
    textCenter: {
        textAlign: 'center',
    },
    title: {
        // fontSize: '4rem',
        fontWeight: 'bold',
        letterSpacing: '0.5rem',
        textShadow: `0 0 0.5rem ${main}, 0 0 1.5rem ${main}, 0 0 3rem ${main}, 0 0 5rem ${main}`,
    },
    inputField: {
        borderBottom: "none !important",
        // paddingLeft: theme.spacing(2),
        background: `linear-gradient(45deg,${greyDark}, ${greyLight})`,
        boxShadow: `0 0 0.5rem ${greyDark}, 0 0 1rem ${greyDark}, 0 0 1.5rem ${greyDark}`,
        '&:hover': {
            background: `linear-gradient(45deg, ${main}, ${secondary})`,
            boxShadow: `0 0 0.5rem ${main}, 0 0 1rem ${main}, 0 0 2rem ${main}`,
            borderBottom: "none !important",
        },
        '&:active': {
            borderBottom: "none !important",
            background: `linear-gradient(45deg, ${main}, ${secondary})`,
            boxShadow: `0 0 0.5rem ${secondary}, 0 0 1rem ${secondary}, 0 0 2rem ${secondary}`,
            // borderBottom: "red !important",
            // background: `linear-gradient(45deg,${greyDark}, ${greyLight})`,
        }

    },
    MuiInputBase: {
        borderBottom: "none !important",
        paddingLeft:theme.spacing(2)+ '!important',
        // color: theme.palette.primary.secondary,
        // textShadow: `0 0 0.5rem ${secondary}, 0 0 1rem ${secondary}, 0 0 1rem ${secondary}, 0 0 2rem ${secondary}`,
        '&:hover': {
            borderBottom: "none !important",
        },
        '&:active': {
            borderBottom: "none !important",
        },
        '&:focus': {
            borderBottom: "none !important",
            // borderBottom: "red !important",
            // background: `linear-gradient(45deg,${greyDark}, ${greyLight})`,
        }

    },
    pageRoot: {
        minHeight: "90vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageIcon: {
        color: theme.palette.secondary.main
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        marginTop: theme.spacing(2) + '!important',
    },
    // input: {
    //     marginBottom: theme.spacing(2) + '!important',
    // },
    socialButtons: {
        transform: "scale(2)",
        margin: 10
    },

    container: {

        boxShadow: `0 0 1rem ${main}, 0 0 2rem ${main}, 0 0 3rem ${main}`,
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
        }
    },

    loading: {
        animation: "$loading-text 2s infinite linear forwards reverse"
    },
    "@keyframes loading-text": {
        "0%": {
            opacity: 1
        },
        "50%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }
}));
