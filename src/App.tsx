import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import CharacterList from './pages/CharacterList';
import CharacterEdit from './pages/CharacterEdit';
import {addCharacters} from './Store/charactersSlice';
import {AlertColor} from "@mui/material";
import AppMenu from './Components/AppMenu';
import {alertType} from "./Types/appTypes";
import renderAlerts from "./Components/renderAlert";


const App: React.FC = () => {
    const dispatch = useDispatch();
    const [alert, setAlert] = React.useState<alertType>({})

    const removeAlert = (message: string) => {
        setAlert(newAlert => {
            if (newAlert[message]) delete newAlert[message]
            return {...newAlert}
        })
    }
    const addAlert = (message: string, type: AlertColor) => {
        setAlert(alert => ({...alert, [message]: type}))
        setTimeout(() => removeAlert(message), 4000)
    }
    React.useEffect(() => {
        try {
            fetch("https://swapi.dev/api/people/")
                .then((res) => res.json())
                .then((data) => {
                    const characters = data.results;
                    dispatch(addCharacters(characters)); // Вызываем экшен для добавления персонажей в хранилище
                })
                .catch((e: any) => {
                    addAlert("Fetch characters error " + e.message, "error")
                });
        } catch (e: any) {
            addAlert("Fetch characters error " + e.message, "error")
        }
    }, []);

    return <BrowserRouter>
        <AppMenu/>
        {renderAlerts({alert, removeAlert})}
        <Routes>
            <Route path="/" element={<CharacterList/>}/>
            <Route path="/characters/:id" element={<CharacterEdit/>}/>
        </Routes>
    </BrowserRouter>
}

export default App