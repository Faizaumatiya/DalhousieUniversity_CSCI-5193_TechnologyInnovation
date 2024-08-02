import { Box, Button, Container, FormControl, FormGroup, Grid, Input, InputLabel, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    formStyle: {
        width: '50%',
        margin: "auto",
        padding: 30,
        paddingTop: 20,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
    btn: {
        marginTop: "40px",
    }
})

function RegisterPage() {

    const classes = useStyle();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email, 
            password, 
            name
        }
        localStorage.setItem('user', JSON.stringify(user))
        alert('User registered successfully')
        navigate('/login')
    }

    return(
        <Box>
            <Grid container justifyContent="center">
                <FormGroup className={classes.formStyle}>
                <Typography variant="h5" gutterBottom>Register Here</Typography>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input value={name} onChange={(event) => setName(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>
                    <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.btn}>
                        Register
                    </Button>
                    <Link to="/login">
                    <Button variant="text">Already Registered? Login in</Button>
                    </Link>
                </FormGroup>
            </Grid>
        </Box>
    )
}

export default RegisterPage;