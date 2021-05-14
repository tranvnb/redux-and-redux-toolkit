import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react'
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

test('renders learn react link', () => {
  render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>);
  const eleArr = screen.getAllByText(/Counter Redux/i);
  expect(eleArr).not.toBeNull();
  expect(eleArr.length).toEqual(2);
});
