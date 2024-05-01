import { CloudUpload } from '@mui/icons-material';
import { uploadFile } from '../../services/upload';
import { baseURLImg } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import { IoCloseCircleOutline } from 'react-icons/io5';

const GalleryArray = ({ formik }: any) => {
  const handleChangeFile = async (e: any) => {
    try {
      const file = e?.target?.files[0];
      const formData = new FormData();
      formData.append('image', file);

      const result = await uploadFile(formData);
      const newImages = [...formik.values.images, result.data?.data];
      formik.setValues((prev: any) => ({
        ...prev,
        images: newImages,
      }));
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

  const handleRemoveImage = (idToRemove: string) => {
    const newImages = formik.values.images.filter(
      (id: string) => id !== idToRemove
    );
    formik.setValues((prev: any) => ({
      ...prev,
      images: newImages,
    }));
  };

  return (
    <>
      <ToastContainer />
      <div className='flex items-start gap-5 mt-5 ms-2'>
        <div className='border-dashed border-[2px] text-[gray] border-[#ddd] rounded-md '>
          <label
            htmlFor='file'
            className='flex text-center items-center justify-center cursor-pointer w-[130px] h-[130px]'
          >
            <div>
              <CloudUpload />
              <p className='whitespace-nowrap'>Upload image</p>
            </div>
          </label>
          <input
            className='hidden'
            name='image'
            id='file'
            type='file'
            onChange={handleChangeFile}
          />
        </div>
        <div className='flex gap-3 flex-wrap'>
          {formik?.values?.images?.length > 0 &&
            formik?.values?.images?.map((el: string, index: number) => (
              <div
                key={index}
                className='relative border-dashed border-[red] rounded-md border-[2px] p-[10px]'
              >
                <img
                  src={`${baseURLImg}/${el}`}
                  alt='pic'
                  className='w-[120px] h-[110px]'
                />
                <button
                  type='button'
                  className='absolute top-0 right-0'
                  onClick={() => handleRemoveImage(el)}
                >
                  <IoCloseCircleOutline color={'red'} size={20} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GalleryArray;
