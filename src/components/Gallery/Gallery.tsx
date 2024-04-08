import { CloudUpload } from '@mui/icons-material';
import { uploadFile } from '../../services/upload';
import { baseURLImg } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';

const Gallery = ({ formik, ...res }: any) => {
  const handleChangeFile = async (e: any) => {
    try {
      const file = e?.target?.files[0];
      const formData = new FormData();
      formData.append('image', file);

      const result = await uploadFile(formData);

      formik.setFieldValue('image', result.data?.data);
    } catch (error) {
      toast.error('Invalid image format', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='border-dashed border-[2px] text-[gray] border-[#ddd] rounded-md '>
        <label
          htmlFor='file'
          className='flex text-center items-center justify-center cursor-pointer w-[150px] h-[150px]'
        >
          {formik?.values?.image ? (
            <img
              src={`${baseURLImg}/${formik?.values?.image}`}
              alt='pic'
              className='w-[140px] h-[140px]'
            />
          ) : (
            <div>
              <CloudUpload />
              <p className='whitespace-nowrap'>Upload image</p>
            </div>
          )}
        </label>
        <input
          className='hidden'
          name='image'
          id='file'
          type='file'
          onChange={handleChangeFile}
        />
      </div>
    </>
  );
};

export default Gallery;
