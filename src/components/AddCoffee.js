import { Button, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


 const AddCoffee = () => {
     const history = useNavigate();
     const [inputs, setInputs] = useState({
         name: '',
         brand: '',
         country: '',
         espresso_gs: '',
         output: '',
         time: '',
         tds: '',
         percent: '',
         image: ''
     });
     
     const handleChange = (e) => {
         setInputs((prevState) => ({
             ...prevState,
             [e.target.name]: e.target.value
         }));
        //  console.log(e.target.name,"value",e.target.value);
     };

     const sendRequest = async() => {
         axios.post("https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees", {
             name:String(inputs.name),
             brand:String(inputs.brand),
             country:String(inputs.country),
             espresso_gs:String(inputs.espresso_gs),
             output:String(inputs.output),
             time:String(inputs.time),
             tds:String(inputs.tds),
             percent:String(inputs.percent),
             image: String(inputs.image)
         }).then(res => res.data);
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(inputs);
         sendRequest().then(() => history('/coffees'))
     };

  return <form className='addcoffee' onSubmit={handleSubmit}>

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
            name="name" 
        />

      <FormLabel>Roaster</FormLabel>
        <TextField 
            value={inputs.brand} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="brand" 
        />

      <FormLabel>Grams In</FormLabel>
        <TextField 
            value={inputs.espresso_gs} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="espresso_gs" 
        />

      <FormLabel>Grams Out</FormLabel>
        <TextField 
            value={inputs.output} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="output" 
        />

      <FormLabel>Time</FormLabel>
        <TextField 
            value={inputs.time} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="time" 
        />

      <FormLabel>TDS</FormLabel>
        <TextField 
            value={inputs.tds} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="tds" 
        />

      <FormLabel>Percent</FormLabel>
        <TextField 
            value={inputs.percent} 
            onChange={handleChange} 
            margin='normal' 
            fullWidth variant='outlined' 
            name="percent" 
        />


      <FormLabel>Image</FormLabel>
        <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            ariant="outlined"
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
          Add Coffee
      </Button>
    </Box>
  </form>;
  
};

export default AddCoffee;