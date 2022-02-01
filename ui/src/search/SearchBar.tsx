import React, { useState } from 'react';

export interface SearchBarProps {
  autocompleteOptions: string[];
  change?: (query :string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [inputFocus, setInputFocus] = useState(false);
  const [query, setQuery] = useState('');

  const searchHandlers = {
    click() {
      setInputFocus(true);
    },
    blur() {
      setInputFocus(false);
    },
    change(event: React.ChangeEvent<HTMLInputElement>) {
      setQuery(event.target.value);
      if (props.change) props.change(event.target.value);
    }
  }

  return (
    <div>
      <div>
        Search Text: {query}
      </div>
      <input
        type='text'
        name='search'
        placeholder='Search'
        onChange={searchHandlers.change}
        onClick={searchHandlers.click}
        onBlur={searchHandlers.blur}
      />
      {
        inputFocus &&
        (
          <div id="auto-populate-results">
            {
            props.autocompleteOptions.map((option) => (
              <div key={option}>{option}</div>
            ))
            }
          </div>
        )
      }
    </div>
  );
}
