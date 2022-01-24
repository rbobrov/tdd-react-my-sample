import { render, screen,  fireEvent} from '@testing-library/react';
import SearchBox from './SearchBox';

const setup = () => {
  var searchBox = render(<SearchBox />);
  const searchboxInput = screen.getByPlaceholderText(/Введите для фильтрации.../i);
  return {
    searchboxInput,
    ...searchBox,
  }
}

test('renders searchbox', () => {
  const {searchboxInput} = setup()
  expect(searchboxInput).toBeInTheDocument();
});

test('set value in the searchbox', () => {
  const {searchboxInput} = setup()
  fireEvent.change(searchboxInput, {target: {value: '23'}})
  expect(searchboxInput.value).toBe('23')
})