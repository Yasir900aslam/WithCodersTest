import React, { useEffect, useRef, useState } from 'react';
import { Text, Input, Spacer, Button } from '@geist-ui/react';
import { gql } from '@apollo/client';
import client from '../utils/apollo-client';

const SearchAndShow: React.FC = () => {
  const [city, setCity] = useState(' ');
  const [temperature, setTemperature] = useState(' ');
  const [mintemperature, setMinTemperature] = useState(' ');
  const [maxtemperature, setMaxTemperature] = useState(' ');
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDataOfCity = () => {
    setLoading(true);
    setTemperature(' ');
    setMinTemperature(' ');
    setMaxTemperature(' ');

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
        const { actual, min, max } = data.data.getCityByName.weather.temperature;
        setTemperature(actual);
        setMinTemperature(min);
        setMaxTemperature(max);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
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
      {loading !== false ? (
        <>
          <Text small={true}> Loading...</Text>
          <Spacer />
        </>
      ) : null}

      {err !== false ? (
        <>
          <Text>Error Occured</Text>
          <Spacer />
        </>
      ) : null}

      {temperature !== ' ' ? (
        <>
          <Text small={true}>Actual Temperature: {temperature} Faranheit</Text>
          <Spacer />
        </>
      ) : null}

      {mintemperature !== ' ' ? (
        <>
          <Text small={true}>Minimum Temperature: {mintemperature} Faranheit</Text>
          <Spacer />
        </>
      ) : null}

      {maxtemperature !== ' ' ? (
        <>
          <Text small={true}>Maximum Temperature: {maxtemperature} Faranheit</Text>
          <Spacer />
        </>
      ) : null}
    </>
  );
};

export default SearchAndShow;
