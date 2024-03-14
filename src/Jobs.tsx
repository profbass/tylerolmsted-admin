// import { useParams } from 'react-router-dom';
import { 
    TextField,
    List,
    Datagrid,
    Create,
    ImageField,
    NumberField,
    ReferenceField
} from 'react-admin';
// import { Typography, Box, Grid } from '@mui/material';
import { JobEditView } from './Job';

export const JobsList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="company" />
                <TextField source="title" />
                <ReferenceField source="people_id" reference="people">
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                </ReferenceField>
                <NumberField source="salary" />
                <TextField source="description" />
                <ImageField source="logo" />
            </Datagrid>
        </List>
    );
}

export const JobsEdit = JobEditView;

export const JobCreate = () => (
    <Create>
        <JobEditView />
    </Create>
);