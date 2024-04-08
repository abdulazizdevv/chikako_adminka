import { TextField } from '@mui/material';
import Gallery from '../../../../components/Gallery/Gallery';

export const Russian = ({ formik }: any) => {
  return (
    <div className='flex gap-8'>
      <Gallery formik={formik} />

      <TextField
        id='outlined-basic'
        label='Name'
        name='name.ru'
        variant='outlined'
        size='small'
        // className='w-1/2'
        value={formik.values?.name?.ru}
        onChange={(e) => formik.setFieldValue('name.ru', e.target.value)}
      />
    </div>
  );
};
