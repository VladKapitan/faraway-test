import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App'
import store from './Store/store'
import ErrorBoundary from "./Components/ErrorBoundary";
import {theme} from "./hooks/useStyles";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "@mui/material";

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container!)

root.render(
    <ErrorBoundary>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </ErrorBoundary>
)
