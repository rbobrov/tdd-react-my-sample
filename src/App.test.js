import { render, screen,  fireEvent} from '@testing-library/react';
import App from './App';

const setup = () => {
  render(<App />);
  
  const applyFilterButton = screen.getByTitle(/Применить фильтры/i);
  const fiterResults = screen.getByTitle(/Элемент списка/i);
  return {
    applyFilterButton,
    fiterResults
  }
}

test('renders filters, search button and the search results', () => {
  const formControls = setup()

  expect(formControls.applyFilterButton).toBeInTheDocument();
  expect(formControls.fiterResults).toBeInTheDocument();
});