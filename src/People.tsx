
import { 
    Datagrid, 
    DateField, 
    EmailField, 
    List, 
    NumberField, 
    TextField, 
    ImageField,
    EditButton,
    // ArrayInput,
    // DateInput,
    // Edit,
    // NumberInput,
    // ImageInput,
    // ReferenceInput,
    // TextInput,
    // SimpleForm,
    // SimpleFormIterator,
} from 'react-admin';
// import { RichTextInput } from 'ra-input-rich-text';
import { PersonEditView } from './Person';


export const PeopleList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ImageField
                title="Photo"
                source="photo_url" 
                sx={{ 
                    width: 50, 
                    height: 50, 
                    '& img': { 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'cover', 
                      borderRadius: 10 
                    } 
                  }}
            />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <NumberField source="age" />
            <EmailField source="email" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PersonEdit = PersonEditView;

// export const PersonEdit = () => (
//     <Edit>
//         <SimpleForm>
//             <TextInput source="id" InputProps={{ disabled: true }} />
//             <TextInput source="first_name" fullWidth />
//             <TextInput source="last_name" fullWidth />
//             <NumberInput source="age" fullWidth />
//             <TextInput source="email" fullWidth />
//             <ImageField source="photo_url" />
//             <ImageInput source="photo_url" />
//             <RichTextInput source="bio" />
//             <DateInput source="created_at" disabled />
//             <DateInput source="updated_at" defaultValue={new Date()} disabled />
//             <ArrayInput source="jobs" title="My Jobs">
//                 <SimpleFormIterator>
//                     <TextInput source="id" disabled />
//                     <TextInput source="company" />
//                     <TextInput source="title" />
//                     <TextInput source="salary" />
//                     <TextInput source="desctiption" />
//                     <DateInput source="start_date" />
//                     <DateInput source="end_date" />
//                     <TextInput source="logo" />
//                     <ReferenceInput source="people_id" reference="people" />
//                     <DateInput source="created_at" disabled />
//                     <DateInput source="updated_at" defaultValue={new Date()} disabled />
//                 </SimpleFormIterator>
//             </ArrayInput>
//             <ArrayInput source="social_links">
//                 <SimpleFormIterator>
//                     <TextInput source="id" disabled />
//                     <TextInput source="platform" />
//                     <TextInput source="url" />
//                     <ReferenceInput source="people_id" reference="people" />
//                     <DateInput source="created_at" disabled />
//                     <DateInput source="updated_at" defaultValue={new Date()} disabled />
//                 </SimpleFormIterator>
//             </ArrayInput>
//         </SimpleForm>
//     </Edit>
// );