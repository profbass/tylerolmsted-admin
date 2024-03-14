import { useParams } from 'react-router-dom';
import { 
    useGetOne,
    useRedirect,
    RecordContextProvider,
    Title,
    ImageField,
    ImageInput,
    Loading, 
    SaveButton,
    DeleteButton,
    Edit,
    ArrayInput,
    SimpleFormIterator,
    TextField,
} from 'react-admin';
import { Typography, Box, Grid } from '@mui/material';
import { SimpleForm, TextInput, NumberInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
// import { JobsEditView } from './Jobs';

export const PersonEditView = () => {

    const { id } = useParams();
    const redirect = useRedirect();

    const { data, isLoading } = useGetOne(
        'people',
        { id },
        { onError: () => redirect('/people') }
    );

    if (isLoading) { return <Loading />; }

    return (
        <RecordContextProvider value={data}>
            <Title title={`${data.first_name} ${data.last_name}'s Page`} />
            <Box sx={{ flexGrow: 1 }}>
                <Edit>
                    <SimpleForm toolbar={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <Typography variant="small" component="small">user #: {data.id}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align="center" variant="small" component="small">last updated: {data.updated_at}</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <TextInput source="first_name" defaultValue={data.first_name} fullWidth />
                            </Grid>
                            <Grid item xs={5}>
                                <TextInput source="last_name" defaultValue={data.last_name} fullWidth />
                            </Grid>
                            <Grid item xs={8}>
                                <TextInput source="email" defaultValue={data.email} fullWidth />
                            </Grid>
                            <Grid item xs={2}>
                                <NumberInput source="age" defaultValue={data.age} fullWidth />
                            </Grid>
                            <Grid item xs={3}>
                                <ImageField
                                    title="Photo"
                                    source="photo_url" 
                                    sx={{ 
                                        width: 200, 
                                        height: 200, 
                                        '& img': { 
                                        maxWidth: '100%', 
                                        maxHeight: '100%', 
                                        objectFit: 'fill', 
                                        borderRadius: 10 
                                        } 
                                    }}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <ImageInput source="photo_url" />
                            </Grid>
                            <Grid item xs={10}>
                                <RichTextInput source="bio" defaultValue={data.bio} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <ArrayInput source="jobs" title="My Jobs">
                                    <SimpleFormIterator>
                                        <TextField source="company" ></TextField>
                                        <TextField source="title" />
                                    </SimpleFormIterator>
                                </ArrayInput>
                            </Grid>
                            <Grid item xs={9}>
                                <SaveButton/>
                            </Grid>
                            <Grid item xs={2}>
                                <DeleteButton/>
                            </Grid>    
                        </Grid>
                    </SimpleForm>
                </Edit>
            </Box>
        </RecordContextProvider>
    );
};