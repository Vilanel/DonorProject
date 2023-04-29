import * as React from 'react';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";

function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
          </Routes>
      </div>
  );
}

export default App;
