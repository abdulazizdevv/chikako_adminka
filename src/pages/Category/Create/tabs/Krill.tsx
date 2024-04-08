import { TextField } from '@mui/material';
import Gallery from '../../../../components/Gallery/Gallery';

export const Krill = ({ formik }: any) => {
  return (
    <div className='flex gap-8'>
      <Gallery formik={formik} />
      <TextField
        id='outlined-basic'
        label='Name'
        name='name.cr'
        variant='outlined'
        size='small'
        // className='w-1/2'
        value={formik.values?.name?.kr}
        onChange={(e) => formik.setFieldValue('name.cr', e.target.value)}
      />
    </div>
  );
};
