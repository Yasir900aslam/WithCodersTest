import React, { useEffect, useRef, useState } from "react";
import { Text, Input, Spacer, Button } from "@geist-ui/react";
import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

const SearchAndShow: React.FC = () => {
  const [city, setCity] = useState(" ");
  const [temperature, setTemperature] = useState(" ");
  const [mintemperature, setMinTemperature] = useState(" ");
  const [maxtemperature, setMaxTemperature] = useState(" ");
  const [err, setErr] = useState(false);
  const timer = useRef();

  const getDataOfCity = () => {
    client
      .query({
        query: gql`
			query {
				getCityByName(name: "${city}") {
				  weather {
				    temperature {
				      actual
				      feelsLike
				      min
				      max
				    }
				  }
				}
		}
			`,
      })
      .then((data) => {
        const { actual, min, max } =
          data.data.getCityByName.weather.temperature;
        setErr(false);
        setTemperature(actual);
        setMinTemperature(min);
        setMaxTemperature(max);
      })
      .catch((err) => {
        setErr(true);
      });
  };

  return (
    <>
      <Input
        label="City Name"
        value={city}
        placeholder="Enter City Name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <Spacer />
      <Button shadow type="secondary" onClick={getDataOfCity}>
        Search
      </Button>
      <Spacer />
      {err !== false ? <Text>Error Occured</Text> : null}
      {temperature !== " " ? (
        <Text>Actual Temperature: {temperature} Faranheit</Text>
      ) : null}
      {mintemperature !== " " ? (
        <Text>Minimum Temperature: {mintemperature} Faranheit</Text>
      ) : null}

      {maxtemperature !== " " ? (
        <Text>Maximum Temperature: {maxtemperature} Faranheit</Text>
      ) : null}
    </>
  );
};

export default SearchAndShow;
