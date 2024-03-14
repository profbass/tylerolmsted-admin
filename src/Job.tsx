import { 
    DateInput,
    Edit,
    ReferenceInput,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
} from 'react-admin';

export const JobEditView = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="people_id" reference="people">
                <SelectInput optionText={(record) => `${record.first_name} ${record.last_name}`} />
            </ReferenceInput>
            <TextInput source="company" />
            <TextInput source="logo" />
            <TextInput source="title" />
            <NumberInput source="salary" />
            <TextInput source="description" />
            <DateInput source="start_date" />
            <DateInput source="end_date" />
            {/* <DateInput source="created_at" />
            <DateInput source="updated_at" /> */}
        </SimpleForm>
    </Edit>
);
