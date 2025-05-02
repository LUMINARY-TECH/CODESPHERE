import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/index';

const App = () =>{
    return(
        <BrowserRouter>
          <Navbar/>
          <main>
            <AppRoutes/>
          </main>
        </BrowserRouter>
    )
}
export default App;
