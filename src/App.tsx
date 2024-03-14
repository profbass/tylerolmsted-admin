// import * as React from "react";
import { Admin, houseLightTheme, houseDarkTheme, Resource, ShowGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PeopleList, PersonEdit } from './People';
import { authProvider } from './authProvider';
import UserIcon from "@mui/icons-material/Group";

const lightTheme = houseLightTheme;
const darkTheme = houseDarkTheme;

const dataProvider = simpleRestProvider('http://localhost:3000');

const App = () => (
  <Admin 
    dataProvider={dataProvider}  
    theme={lightTheme}
    darkTheme={darkTheme}
    title="tylerolmsted control center"
    authProvider={authProvider}
  >
    <Resource 
      name="people" 
      list={PeopleList} 
      edit={PersonEdit}
      icon={UserIcon}
    />
    <Resource 
      name="people" 
      list={PeopleList} 
      show={ShowGuesser} 
      recordRepresentation="name" 
      icon={UserIcon}
    />
  </Admin>
);

export default App;
