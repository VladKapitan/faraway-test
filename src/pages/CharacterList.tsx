import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../Store/store';
import {Container, Grid, Pagination, TextField, Typography} from '@mui/material';
import {Character} from '../Types/appTypes';
import CharacterCard from "./CharacterCard";
import Loading from "../Components/Loading";
import {useStyles} from "../hooks/useStyles";


const CharacterList: React.FC = () => {
    const characters = useSelector((state: RootState) => state.characters.characters);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const {classes} = useStyles();

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(event.target.value);
    };

    const filteredCharacters = characters.filter((character: Character) =>
        character.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleCharacters = filteredCharacters.slice(startIndex, startIndex + itemsPerPage);


    return <Container>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={8}>
                <Typography variant="h2" component="h2" align="justify" className={classes.neonText}>
                    Character list
                </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TextField
                    color='primary'
                    label="Search by name"
                    inputProps={{className: classes.MuiInputBase}}
                    className={classes.inputField}
                    value={searchName}
                    onChange={handleSearchChange}
                    fullWidth
                    margin="normal"/>
            </Grid>
        </Grid>
        {!characters[0] ? <Loading text={'...character list is loading. Please wait'}/>
            :
            <>
                <Grid container spacing={2}>
                    {visibleCharacters.map((character: Character) => (
                        <Grid item xs={12} sm={6} md={4} key={character.url}>
                            <CharacterCard key={character.name} character={character}/>
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    count={Math.ceil(filteredCharacters.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className={classes.pagination}
                />

            </>}
    </Container>
};

export default CharacterList;
