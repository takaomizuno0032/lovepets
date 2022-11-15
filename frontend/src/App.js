import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PetDetail from './pages/PetDetail';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Navbar/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const theme = createTheme(
    {
      palette: {
        custom: {
          light: '#FDEEDC',
          main: '#FFD8A9',
          dark: '#F1A661',
        }
      }
    }
  )

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='pets/id' element={<PetDetail />} />

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>

      </ThemeProvider>
    </div>
  );
}

export default App;
