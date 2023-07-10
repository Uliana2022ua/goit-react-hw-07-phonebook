import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { store } from 'redux/store';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#e4d1d1',
    sectionBackgroundColor: '#d9ecd0',
    buttonBackgroundColor: '#77a8a8',
  },
  containerBorderRadius: '20px',
  inputBorderRadius: '8px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);