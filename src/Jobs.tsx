import { useParams } from 'react-router-dom';
import { 
    useGetOne,
    useRedirect,
    RecordContextProvider,
    Title,
    ImageField,
    Loading, 
    SaveButton,
    DeleteButton,
    Edit,
} from 'react-admin';
import { Typography, Box, Grid } from '@mui/material';
import { SimpleForm, TextInput, NumberInput } from 'react-admin';

export const JobsEditView = () => {

    const { id } = useParams();
    const redirect = useRedirect();

    const { data, isLoading } = useGetOne(
        'jobs',
        { id },
        { onError: () => redirect('/jobs') }
    );

    if (isLoading) { return <Loading />; }

    return (
        <RecordContextProvider value={data}>
            <Title title={`${data.title} - Edit Job`} />
            <Box sx={{ flexGrow: 1 }}>
                <Edit>
                    <SimpleForm toolbar={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="h6">Job: {data.id}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput source="company" defaultValue={data.company} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput source="title" defaultValue={data.title} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <NumberInput source="salary" defaultValue={data.salary} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput source="description" defaultValue={data.description} fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <ImageField source="logo" />
                            </Grid>
                            <Grid item xs={12}>
                                <SaveButton/>
                            </Grid>
                            <Grid item xs={12}>
                                <DeleteButton/>
                            </Grid>    
                        </Grid>
                    </SimpleForm>
                </Edit>
            </Box>
        </RecordContextProvider>
    );
};