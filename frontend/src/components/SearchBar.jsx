import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';

const SearchBar = ({placeholder, onchange}) => {
  return (
    <div>
    <SearchIcon />
        <Input placeholder={placeholder} onChange={onchange} />
    </div>
  )
}

export default SearchBar