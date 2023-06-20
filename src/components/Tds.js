import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const Tds = () => {
  const [inputs, setInputs] = useState({
    espresso_gs: "",
    output: "",
    tds: "",
    percent: "",
  });

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (inputs.espresso_gs && inputs.output && inputs.tds) {
      const percent = (inputs.output * inputs.tds) / inputs.espresso_gs;
      setInputs((prevInputs) => ({
        ...prevInputs,
        percent: percent.toFixed(2),
      }));
    }
  }, [inputs.espresso_gs, inputs.output, inputs.tds]);

  return (
    <div>
      <header className="home-header"></header>
      <form id="home-form">
        <Box
          id="tds-layout"
          display="flex"
          flexDirection="table"
          justifyContent={"center"}
          maxWidth={750}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
          marginBottom={10}
          sx={{
            backgroundColor: "rgba(128, 128, 128, .9)",
            borderRadius: "3px",
          }}
        >
          <Box
            display="flex"
            flexDirection="table"
            justifyContent={"center"}
            maxWidth={100}
            alignContent={"center"}
            alignSelf={"center"}
            textAlign={"center"}
            marginLeft={"10px"}
            marginRight={"10px"}
            marginTop={1}
            marginBottom={1}
          >
            <TextField
              value={inputs.espresso_gs}
              onChange={handleInputChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="espresso_gs"
              placeholder="Input"
              inputProps={{
                inputMode: "decimal",
                pattern: "[0-9]*([.][0-9]+)?",
              }}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  fontFamily: "jost",
                  opacity: 0.9,
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="table"
            justifyContent={"center"}
            maxWidth={100}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"10px"}
            marginRight={"10px"}
            marginTop={1}
            marginBottom={1}
          >
            <TextField
              value={inputs.output}
              onChange={handleInputChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="output"
              placeholder="Output"
              inputProps={{
                inputMode: "decimal",
                pattern: "[0-9]*([.][0-9]+)?",
              }}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  fontFamily: "jost",
                  opacity: 0.9,
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="table"
            justifyContent={"center"}
            maxWidth={100}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"10px"}
            marginRight={"10px"}
            marginTop={1}
            marginBottom={1}
          >
            <TextField
              value={inputs.tds}
              onChange={handleInputChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="tds"
              placeholder="TDS"
              inputProps={{
                inputMode: "decimal",
                pattern: "[0-9]*([.][0-9]+)?",
              }}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                fontFamily: "jost",
                "& .MuiOutlinedInput-root": {
                  fontFamily: "jost",
                  opacity: 0.9,
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="table"
            justifyContent={"center"}
            maxWidth={100}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={2}
            marginBottom={2}
          ></Box>

          <Box
            display="flex"
            flexDirection="auto"
            justifyContent={"center"}
            maxWidth={350}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={2}
            marginBottom={10}
            sx={{
              borderRadius: "16px",
            }}
          >
            <TextField
              value={inputs.percent + "%"}
              margin="normal"
              className="home-percent"
              fullWidth
              variant="standard"
              name="percent"
              placeholder=""
              InputProps={{
                readOnly: true,
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "75px",
                  textAlign: "center",
                  fontFamily: "jost",
                  color:
                    inputs.percent >= 19 && inputs.percent <= 21
                      ? "green"
                      : "inherent",
                },
              }}
            />
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Tds;
