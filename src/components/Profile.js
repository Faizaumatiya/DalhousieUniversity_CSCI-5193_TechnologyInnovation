import { Box, Grid, DialogTitle, DialogContent, FilledInput, Container, Button } from "@mui/material";
import React, { useState } from "react";

function Profile() {

    const user = JSON.parse(localStorage.getItem('user'))

    const [pronouns, setPronouns] = useState("");
    const [salutation, setSaultation] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [interests, setInterests] = useState("");

    const handleSubmit = (event) => {
    user.pronouns = pronouns
    user.salutation = salutation
    user.address1 = address1
    user.address2 = address2
    user.interests = interests
    localStorage.setItem('user', JSON.stringify(user))
        alert('details updated')
    }

    return(
        <>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Profile Details
            </Box>
        </DialogTitle>
        <DialogContent>
            <Container>
                <Box sx={{ mb: "4" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6}>
                            <FilledInput value={pronouns} onChange={(event) => setPronouns(event.target.value)} placeholder="Pronouns" fullWidth>
                            </FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput value={salutation} onChange={(event) => setSaultation(event.target.value)} placeholder="Salutation" fullWidth></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput value={user.name} placeholder="Name" fullWidth></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput value={user.email} placeholder="Email" fullWidth></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput value={address1} onChange={(event) => setAddress1(event.target.value)} name="companyName" placeholder="Address 1" fullWidth multiline rows={2}></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput value={address2} onChange={(event) => setAddress2(event.target.value)} placeholder="Address 2" fullWidth multiline rows={2}></FilledInput>
                        </Grid>
                        <Grid item xs={12}>
                            <FilledInput value={interests} onChange={(event) => setInterests(event.target.value)} placeholder="User Interests" fullWidth multiline rows={2}></FilledInput>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                    <Button onClick={handleSubmit} variant="contained" color="secondary">
                        Update Information
                    </Button>
                    </Box>
                </Box>
            </Container>
            </DialogContent>
            </>
    )
}

export default Profile;