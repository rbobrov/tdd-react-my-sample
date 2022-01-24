import logo from './logo.svg';
import './App.css';
import SearchBox from './search/SearchBox';

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <input type = 'button' title='Применить фильтры' value="Применить фильтры"/>
      <label title='Элемент списка'/>
    </div>
  );
}

export default App;
