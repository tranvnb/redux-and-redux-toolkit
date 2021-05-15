import { render, screen } from '@testing-library/react';
import React, { StrictMode } from "react";
import App from "./App";
import { Provider } from 'react-redux';
import store from './redux/store';

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
