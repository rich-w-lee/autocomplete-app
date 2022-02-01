import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SearchBar } from './search/SearchBar';

function App() {
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);

  function searchBarChangeHandler(value: string) {
    console.log(value);
    if (value) getAutocomplete(value);
    else setAutocompleteOptions([]);
  }

  async function getAutocomplete(value: string) {
    try {
      const response = await axios.get(`/api/autocomplete?searchQuery=${value}`);
      setAutocompleteOptions(response.data);
    } catch (e) {
      console.error(e);
      setAutocompleteOptions([]);
    }
  }

  useEffect(() => {
    // Do things
  });

  return (
    <div className="App">
      <h1>Autocomplete Application</h1>
      <SearchBar
        autocompleteOptions={autocompleteOptions}
        change={searchBarChangeHandler}
      />
    </div>
  );
}

export default App;
