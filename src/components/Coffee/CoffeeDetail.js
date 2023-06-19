import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';



const CoffeeDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const history = useNavigate();
    
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees/${id}`)
            .then((res) => res.data)
            .then((data)=>setInputs(data.coffee));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees/${id}`, {
             name: String(inputs.name),
             brand: String(inputs.brand),
             country: String(inputs.country),
             espresso_gs: String(inputs.espresso_gs),
             output: String(inputs.output),
             time: String(inputs.time),
             tds: String(inputs.tds),
             percent: String(inputs.percent),
             image: String(inputs.image)
        }).then(res=>res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/coffees"));

    }
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

  return (<div>
      {inputs && (
      <form onSubmit={handleSubmit}>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent={'center'} 
        maxWidth={700}
        alignContent={'center'}
        alignSelf={'center'}
        marginLeft={'auto'}
        marginRight={'auto'}
        marginTop={10}
        marginBottom={10}
       >

      <FormLabel>Coffee</FormLabel>
        <TextField 
        value={inputs.name} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="name" />

      <FormLabel>Roaster</FormLabel>
        <TextField 
        value={inputs.brand} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="brand" />

      <FormLabel>Grams In</FormLabel>
        <TextField 
        value={inputs.espresso_gs} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="espresso_gs" />

      <FormLabel>Grams Out</FormLabel>
        <TextField 
        value={inputs.output} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="output" />

      <FormLabel>Time</FormLabel>
        <TextField 
        value={inputs.time} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="time" />

      <FormLabel>TDS</FormLabel>
        <TextField 
        value={inputs.tds} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="tds" />

    <FormLabel>Percent</FormLabel>
        <TextField 
        value={inputs.percent} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="percent" />


    <FormLabel>Image</FormLabel>
                <TextField
                value={inputs.image}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="image"
                />

    <FormLabel>Notes</FormLabel>
        <TextField 
        value={inputs.country} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth variant='outlined' 
        name="country" 
        multiline='maxRows'
        />


      <Button variant='contained' type='submit' >
          Update Coffee
      </Button>
    </Box>
  </form>
  )};
  </div>)
};

export default CoffeeDetail;