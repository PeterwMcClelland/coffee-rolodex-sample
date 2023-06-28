import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    image: '',
    roast: ''
  });

  const handleChange = (e) => {
    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    };

    if (
      ["output", "tds", "espresso_gs"].includes(e.target.name) &&
      newInputs.output &&
      newInputs.tds &&
      newInputs.espresso_gs
    ) {
      newInputs.percent = (
        (Number(newInputs.output) * Number(newInputs.tds)) /
        Number(newInputs.espresso_gs)
      ).toFixed(2);
    }

    setInputs(newInputs);
  };

  const sendRequest = async () => {
    axios
      .post("https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees", {
        name: String(inputs.name),
        brand: String(inputs.brand),
        country: String(inputs.country),
        espresso_gs: String(inputs.espresso_gs),
        output: String(inputs.output),
        time: String(inputs.time),
        tds: String(inputs.tds),
        percent: String(inputs.percent),
        image: String(inputs.image),
        roast: Date(inputs.roast)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/coffees"));
  };

  return (
    <form className="addcoffee" onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
        marginBottom={10}
      >
        <FormLabel>Coffee</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          placeholder='Example "NAMBALLE - Cajamarca, Peru"'
        />

        <FormLabel>Roaster</FormLabel>
        <TextField
          value={inputs.brand}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="brand"
          placeholder='Example "Sweet Bloom"'
        />

        <FormLabel>Roast Date</FormLabel>
        <TextField
        type="date"
          value={inputs.roast}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="roast"
          placeholder='Example "Dark Roast"'
        />

        <FormLabel>Grams In</FormLabel>
        <TextField
          value={inputs.espresso_gs}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="espresso_gs"
          placeholder="Grams of Espresso"
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*([.][0-9]+)?" }}
        />

        <FormLabel>Grams Out</FormLabel>
        <TextField
          value={inputs.output}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="output"
          placeholder="Grams of Liquid"
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*([.][0-9]+)?" }}
        />

        <FormLabel>Time</FormLabel>
        <TextField
          value={inputs.time}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="time"
          placeholder="Number of Seconds"
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*([.][0-9]+)?" }}
        />

        <FormLabel>TDS</FormLabel>
        <TextField
          value={inputs.tds}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="tds"
          placeholder='TDS Results "9.24"'
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*([.][0-9]+)?" }}
        />

        <FormLabel>Percent</FormLabel>
        <TextField
          value={inputs.percent}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="percent"
          placeholder="AutoFill %"
        />

        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          placeholder='Paste "Copy Image Address" Here'
        />

        <FormLabel>Notes</FormLabel>
        <TextField
          value={inputs.country}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="country"
          multiline maxRows={4}
          placeholder="Tasting Notes"
        />

        <Button variant="contained" type="submit">
          Add Coffee
        </Button>
      </Box>
    </form>
  );
};

export default AddCoffee;
