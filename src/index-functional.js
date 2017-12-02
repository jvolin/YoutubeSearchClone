import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDdzV7JCMf0A5O35L4v4-Yts6DTCW5JVIg';

YTSearch({key: API_KEY, term:'dogs'}, function(data) {
  console.log(data);
})

// Create a new component. This component should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put component's generated HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));

//<App /> is an instance of App Function
// second arcument is selecting the class 'container' from index.html'.  This is where the componenet will be rendered


