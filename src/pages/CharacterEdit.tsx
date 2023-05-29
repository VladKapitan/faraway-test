import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Store/store'; // Путь к корневому состоянию Redux
import {updateCharacter} from '../Store/charactersSlice';
import {Character} from "../Types/appTypes"; // Путь к экшену обновления персонажа
import {useNavigate, useParams} from 'react-router-dom';
import {Container, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography} from "@mui/material";
import {useStyles} from "../hooks/useStyles";
import Loading from "../Components/Loading";
import CharacterCard from "./CharacterCard";
import Saving from "../Components/Saving";
import Button from "@mui/material/Button";

interface CharacterEditProps {
    character_id?: string;
}

const CharacterEdit: React.FC<CharacterEditProps> = ({character_id}) => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const characters = useSelector((state: RootState) => state.characters.characters);
    const [character, setCharacter] = useState<Character | null>(null);
    const [isSaving, setIsSaving] = React.useState<boolean>(false);
    const {classes, cx} = useStyles();
    const navigate = useNavigate()

    useEffect(() => {
        //character_id get from props for testing mode
        const characterId = id || character_id
        const foundCharacter = characters.find((c) => c.url === `https://swapi.dev/api/people/${characterId}/`);
        if (foundCharacter) setCharacter(foundCharacter);

    }, [characters, id, character_id]);

    const handleChange = (field: string, value: string) => {
        if (character) {
            const newCharacter = {...character}
            //@ts-ignore I'm too lazy to prescribe the types of all fields)
            newCharacter[field] = value
            setCharacter(newCharacter)
        }
    }

    const handleSave = () => {
        if (character) {
            setIsSaving(true)
            dispatch(updateCharacter({...character}));
            //Emulating sending to the server
            setTimeout(() => setIsSaving(false), 1000)
        }
    };

    console.log("character", character)

    if (!character) return <Loading text='...character is loading'/>;
    else return <Container>
        <Saving open={isSaving}/>
        <CharacterCard character={character}/>
        <Paper sx={{marginTop: "34px",marginBottom: "24px", padding: "16px"}}>
            <Typography variant="h2" component="h2" align="justify" className={cx(classes.neonText, classes.margin)}>
                Edit character
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Name:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        // data-testid='charter_name'
                        inputProps={{className: classes.MuiInputBase, "data-testid":'charter_name'}}
                        className={classes.inputField}
                        value={character.name}
                        onChange={e => handleChange('name', e.target.value)}
                        fullWidth/>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Height:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        inputProps={{className: classes.MuiInputBase}}
                        className={classes.inputField}
                        value={character.height}
                        onChange={e => handleChange('height', e.target.value)}
                        fullWidth/>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Hair color:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        inputProps={{className: classes.MuiInputBase}}
                        className={classes.inputField}
                        value={character.hair_color}
                        onChange={e => handleChange('hair_color', e.target.value)}
                        fullWidth/>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Skin color:</Typography>

                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        inputProps={{className: classes.MuiInputBase}}
                        className={classes.inputField}
                        value={character.skin_color}
                        onChange={e => handleChange('skin_color', e.target.value)}
                        fullWidth/>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Eye color:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        inputProps={{className: classes.MuiInputBase}}
                        className={classes.inputField}
                        value={character.eye_color}
                        onChange={e => handleChange('eye_color', e.target.value)}
                        fullWidth/>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Birth year:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                        <TextField
                            inputProps={{className: classes.MuiInputBase}}
                            className={classes.inputField}
                            value={character.birth_year}
                            onChange={e => handleChange('birth_year', e.target.value)}/>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant='h6' className={cx(classes.neonText, classes.padding)}>Gender:</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            className={classes.inputField}
                            value={character.gender}
                            onChange={e => handleChange('gender', e.target.value)}>
                            <MenuItem value="n/a">n/a</MenuItem>
                            <MenuItem value="male">male</MenuItem>
                            <MenuItem value="female">female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("/")}>
                        CANCEL
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSave}>
                        SAVE
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
};

export default CharacterEdit;
