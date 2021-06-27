import React, { useRef, useState } from 'react'
import { AutoComplete, Text } from '@geist-ui/react'

interface Props {
	cityoptions: string[];
 }

 export type AutoSearchProps = Props;

const AutoSearch: React.FC<AutoSearchProps> = ({cityoptions}) => {
	const allOptions = [
	  { label: 'London', value: 'london' },
	  { label: 'Sydney', value: 'sydney' },
	  { label: 'Shanghai', value: 'shanghai' },
	]
	const [options, setOptions] = useState()
	const [searching, setSearching] = useState(false)
	const [temperature, setTemperature] = useState(null)
	
	const timer = useRef()

	const searchHandler = (currentValue) => {
	  if (!currentValue) return setOptions([])
	  setSearching(true)
	  const relatedOptions = allOptions.filter(item => item.value.includes(currentValue))
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