import { MenuItem, Select, TextField } from '@mui/material';
import TextArea from '../../../../components/TextArea/TextArea';

export const Russian = ({ formik, categories }: any) => {
  return (
    <div className='flex items-start gap-8'>
      <div className='w-full flex flex-col gap-3'>
        <TextField
          id='outlined-basic'
          label='Name'
          name='name.ru'
          variant='outlined'
          size='small'
          className='w-full'
          value={formik.values?.name?.ru}
          onChange={(e) => formik.setFieldValue('name.ru', e.target.value)}
        />
        <TextArea
          aria-label='minimum height'
          minRows={3}
          placeholder='Description'
          value={formik.values?.description?.ru}
          onChange={(e: any) =>
            formik.setFieldValue('description.ru', e.target.value)
          }
        />
        <TextField
          id='outlined-basic'
          label='Price'
          name='price'
          type='number'
          variant='outlined'
          size='small'
          className='w-full'
          value={formik.values?.price}
          onChange={(e) => formik.setFieldValue('price', e.target.value)}
        />
        <Select
          className='w-full'
          variant='outlined'
          size='small'
          labelId='demo-select-small-label'
          id='demo-select-small'
          value={formik.values?.categoryId}
          onChange={(e) => formik.setFieldValue('categoryId', e.target.value)}
          // IconComponent={CustomSelectIcon}
        >
          {categories?.map((el: any) => (
            <MenuItem value={el._id} key={el?._id}>
              {el?.name?.en}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
