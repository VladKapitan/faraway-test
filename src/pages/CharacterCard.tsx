import React from "react";
import {useStyles} from "../hooks/useStyles";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {getIdFromUrl} from "../Utils/utils";
import {useNavigate} from "react-router-dom";
import {Character} from "../Types/appTypes";

interface CharacterCardProps {
    character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
    const {classes} = useStyles();
    const navigate = useNavigate()
    return <Card className={classes.characterCard}
                 data-testid="character-card"
                 onClick={() => navigate("/characters/" + getIdFromUrl(character.url))}>
        <CardContent>
            <Grid container>
                <Grid item className={classes.characterLeftColumn}>
                    <div className={classes.characterName}>{character.name}</div>
                    <img src={"https://i.ebayimg.com/images/g/7OQAAOSw3xVaD0sU/s-l500.jpg"}
                         className={classes.characterImage}/>
                </Grid>
                <Grid item className={classes.characterDescription}>
                    <Typography>Height: {character.height}</Typography>
                    <Typography>Mass: {character.mass}</Typography>
                    <Typography>Hair color: {character.hair_color}</Typography>
                    <Typography>Skin color: {character.skin_color}</Typography>
                    <Typography>Eye color: {character.eye_color}</Typography>
                    <Typography>Birth year: {character.birth_year}</Typography>
                    <Typography>Gender: {character.gender}</Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
};

export default CharacterCard;
