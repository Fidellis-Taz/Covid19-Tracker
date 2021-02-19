import React, { useState, useEffect } from "react";

import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //the code inside here will run once
    //when the component loads and not again

    //run async _> send a request to a server and wait for it then do something
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid19 Tracker</h1>
        {/* dropdown */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* loop through all the countries and display them as the droopdown list */}

            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* header*/}

      {/* infoboxes */}
      {/* map */}
      {/* table */}
      {/* graph */}
    </div>
  );
};

export default App;
