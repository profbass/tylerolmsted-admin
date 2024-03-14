import { useParams } from 'react-router-dom';
import { 
    useGetOne,
    useRedirect,
    RecordContextProvider,
    Title,
    Labeled,
    TextField,
    DateField,
    Loading 
} from 'react-admin';
import { Card, Stack } from '@mui/material';

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
            <div>
                <Title title="Book Show"/>
                <Card>
                    <Stack spacing={1}>
                        <Labeled label="Title">
-                           <TextField source="title" record={data.first_name} />
+                           <TextField source="title" />
                        </Labeled>
                        <Labeled label="Publication Date">
-                           <DateField source="published_at" record={data.last_name} />
+                           <DateField source="published_at" />
                        </Labeled>
                    </Stack>
                </Card>
            </div>
+       </RecordContextProvider>
    );
};