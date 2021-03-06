import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import List from './pages/List';
import Detail from './pages/Detail';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{
      shape: {
        radius: '5px'
      },
      palette: {
        blue: {
          color: 'white',
          background: '#228be6',
        },
        gray: {
          color: 'white',
          background: '#495057'
        },
        black: {
          color: 'white',
          background: 'black'
        },
        pink: {
          color: '#f06595',
          background: 'transparent'
        }
      }
    }}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/detail/:detailId" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
