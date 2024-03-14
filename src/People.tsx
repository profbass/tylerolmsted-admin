
import { 
    Datagrid, 
    DateField, 
    EmailField, 
    List, 
    NumberField, 
    TextField, 
    ImageField,
    EditButton,
    Create
} from 'react-admin';
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


export const PersonCreate = () => (
    <Create>
        <PersonEditView />
    </Create>
);