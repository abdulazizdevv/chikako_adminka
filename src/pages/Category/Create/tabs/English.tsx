import { TextField } from '@mui/material';
import Gallery from '../../../../components/Gallery/Gallery';

export const English = ({ formik }: any) => {
  return (
    <div className='flex gap-8'>
      <Gallery formik={formik} />
      <TextField
        id='outlined-basic'
        label='Name'
        name='name.en'
        variant='outlined'
        size='small'
        // className='w-1/2'
        value={formik.values?.name?.en}
        onChange={(e) => formik.setFieldValue('name.en', e.target.value)}
      />
    </div>
  );
};
