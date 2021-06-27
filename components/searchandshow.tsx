import React, { useEffect, useRef, useState } from 'react'
import { Text, Input, Spacer, Button } from '@geist-ui/react'
import { gql } from "@apollo/client";
import client from "../utils/apollo-client";


const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;


const SearchAndShow: React.FC = () => {

	const [city, setCity] = useState(" ")
	const [options, setOptions] = useState()
	const [searching, setSearching] = useState(false)
	const [temperature, setTemperature] = useState(null)
	const [json, setjson] = useState(null)
	const timer = useRef()

	const getDataOfCity = ()=>{
		client.query({
			query: gql`
			query {
				getCityByName(name: "Gothenburg") {
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
		      }).then(data=>{
			      setjson(data)
		      })
	}

	return (
		<>
		  <Input label="City Name" value={city} placeholder="Enter City Name" onChange={(e)=>{
			  setCity(e.target.value)
		  }}/>
 		  <Spacer y='.5' />
		   <Spacer y='.5' />
		  <Button shadow type="secondary" onClick={getDataOfCity}>Search</Button>

	    </>

	)
}


export default SearchAndShow