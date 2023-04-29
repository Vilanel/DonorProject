import * as React from 'react';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import {AddressAutofill} from "@mapbox/search-js-react";

function App() {
    const [value, setValue] = React.useState('');
  return (
      <div>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
          </Routes>
          {/*<AddressAutofill accessToken='pk.eyJ1IjoibmF0YS0tLSIsImEiOiJjbGd6a3Uxd3YwMGd4M2tvaDg2NjB2c3I2In0.WhRzS1TsDdsJpb0HpBDvFA'>*/}
          {/*    <input*/}
          {/*        autoComplete="shipping address-line1"*/}
          {/*        value={value}*/}
          {/*        onChange={(e) => setValue(e.target.value)}*/}
          {/*    />*/}
          {/*</AddressAutofill>*/}
      </div>
  );
}

export default App;
