import { Box, Grid, DialogTitle, DialogContent, FilledInput, Container, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import SingleCard from "./SingleCart";
import { Link } from "react-router-dom";

function Cart() {

    
    const cartList = [{
        name: 'Smart Garden 3',
        image: "1.jpeg",
        price: '129.99 CAD'
    },
    {
        name: 'Indoor Growlight ',
        image: '2.jpeg',
        price: '199.95 CAD'
    },
    {
        name: 'Fixed Wall System',
        image: '3.jpeg',
        price: '599 CAD'
    },]

    return(
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <h1>Cart</h1>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <Box>
                {cartList.map((cart) => {
                    return (
                        <Grid item xs={4}>
                        <SingleCard cart={cart}/>
                        </Grid>)})}
                        <Link to="/payement">
                        <Button size="small" variant='contained'>Proceed to Payement</Button>  
                        </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Cart;