// import * as React from "react";
import { Admin, houseLightTheme, houseDarkTheme, Resource, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PeopleList, PersonEdit, PersonCreate } from './People';
import { JobsList, JobsEdit, JobCreate } from './Jobs';
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
      create={PersonCreate}
      icon={UserIcon}
    />
    <Resource 
      name="people" 
      list={PeopleList} 
      show={PersonEdit} 
      create={PersonCreate}
      recordRepresentation="name" 
      icon={UserIcon}
    />
    <Resource
      name="jobs"
      list={JobsList}
      edit={JobsEdit}
      create={JobCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
