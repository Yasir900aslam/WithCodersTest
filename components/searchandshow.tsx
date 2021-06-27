import React, { useRef, useState } from 'react'
import { AutoComplete, Text } from '@geist-ui/react'

interface Props {
	cityoptions: {
		label: String,
		value: String
	}[]
 }

 export type AutoSearchProps = Props;

const SearchAndShow: React.FC<AutoSearchProps> = ({cityoptions}) => {
	
	const [options, setOptions] = useState()
	const [searching, setSearching] = useState(false)
	const [temperature, setTemperature] = useState(null)
	
	const timer = useRef()

	const searchHandler = (currentValue) => {
	  if (!currentValue) return setOptions([])
	  setSearching(true)
	  const relatedOptions = cityoptions.filter(item => item.value.includes(currentValue))
	  // this is mock async request
	  // you can get data in any way
	  timer.current && clearTimeout(timer.current)
	  timer.current = setTimeout(() => {
	    setOptions(relatedOptions)
	    setSearching(false)
	    clearTimeout(timer.current)
	  }, 1000)
	}
	return (
		<>
	  <AutoComplete searching={searching}
	    options={options}
	    placeholder="Enter Location here"
	    onSearch={searchHandler} />
	    <Text size={12}>{temperature}</Text>
	    </>

	)
      }

export default SearchAndShow