import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";

const CoffeeDetail = () => {
  
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
    
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(
          `https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees/${id}`
        );
        setInputs(res.data.coffee);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(
        `https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees/${id}`,
        {
          name: String(inputs.name),
          brand: String(inputs.brand),
          country: String(inputs.country),
          espresso_gs: String(inputs.espresso_gs),
          output: String(inputs.output),
          time: String(inputs.time),
          tds: String(inputs.tds),
          percent: String(inputs.percent),
          image: String(inputs.image),
        }
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/coffees"));
  };

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

  return (
    <div>
      {loading ? (
        <div className="loading-bar">Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        inputs && (
          <form onSubmit={handleSubmit}>
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

              <FormLabel>Grams In</FormLabel>
              <TextField
                value={inputs.espresso_gs}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="espresso_gs"
                placeholder="Grams of Espresso"
                inputProps={{
                  inputMode: "decimal",
                  pattern: "[0-9]*([.][0-9]+)?",
                }}
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
                inputProps={{
                  inputMode: "decimal",
                  pattern: "[0-9]*([.][0-9]+)?",
                }}
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
                inputProps={{
                  inputMode: "decimal",
                  pattern: "[0-9]*([.][0-9]+)?",
                }}
              />

              <FormLabel>TDS</FormLabel>
              <TextField
                value={inputs.tds}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="tds"
                placeholder='TDS Results "6.66"'
                inputProps={{
                  inputMode: "decimal",
                  pattern: "[0-9]*([.][0-9]+)?",
                }}
              />

              <FormLabel>Percent</FormLabel>
              <TextField
                value={inputs.percent}
                margin="normal"
                fullWidth
                variant="outlined"
                name="percent"
                placeholder="AutoFill %"
                InputProps={{
                  readOnly: true,
                }}
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
                Update Coffee
              </Button>
            </Box>
          </form>
        )
      )}
    </div>
  );
};

export default CoffeeDetail;
