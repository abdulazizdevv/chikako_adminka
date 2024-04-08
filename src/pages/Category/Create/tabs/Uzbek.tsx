import { TextField } from '@mui/material';
import Gallery from '../../../../components/Gallery/Gallery';

export const Uzbek = ({ formik }: any) => {
  return (
    <div className='flex items-start gap-8'>
      <Gallery formik={formik} />
      <TextField
        id='outlined-basic'
        label='Name'
        name='name.uz'
        variant='outlined'
        size='small'
        // className='w-1/2'
        value={formik.values?.name?.uz}
        onChange={(e) => formik.setFieldValue('name.uz', e.target.value)}
      />
    </div>
  );
};
