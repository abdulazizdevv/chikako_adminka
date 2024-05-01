import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Header from '../../layout/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import CardContent from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { baseURLImg } from '../../services/api';
import { Delete } from '@mui/icons-material';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import { deleteOneBanner, getAllBanner } from '../../services/banner';
import { IBanner } from '../../types/data';

const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IBanner[]>();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteBanner = async (id: string) => {
    try {
      const res = await deleteOneBanner(id);
      toast.success(res?.data?.message);
      setDeleteLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: '№',
      width: '5%',
      key: 'order-number',
      render: (_: any, index: number) => <>{index + 1}</>,
    },
    {
      title: 'Image',
      width: '43%',
      key: 'image',
      render: (record: any) => (
        <div className='flex items-center gap-2'>
          <div className='border-dashed border-[#ea8787] border-[1px] rounded-md w-full p-1'>
            <img
              src={`${baseURLImg}/${record?.image?.uz}`}
              alt='brand logo'
              className='w-full h-[80px] object-contain'
            />
          </div>
          <div className='border-dashed border-[#ea8787] border-[1px] rounded-md w-full p-1'>
            <img
              src={`${baseURLImg}/${record?.image?.ru}`}
              alt='brand logo'
              className='w-full h-[80px] object-contain'
            />
          </div>
          <div className='border-dashed border-[#ea8787] border-[1px] rounded-md w-full p-1'>
            <img
              src={`${baseURLImg}/${record?.image?.en}`}
              alt='brand logo'
              className='w-full h-[80px] object-contain'
            />
          </div>
          <div className='border-dashed border-[#ea8787] border-[1px] rounded-md w-full p-1'>
            <img
              src={`${baseURLImg}/${record?.image?.cr}`}
              alt='brand logo'
              className='w-full h-[80px] object-contain'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Url',
      width: '20%',
      key: 'name',
      render: (record: any) => (
        <Link to={record?.url} target='_blank'>
          {record?.url}
        </Link>
      ),
    },

    {
      title: 'Create date',
      width: '20%',
      key: 'date',
      render: (record: any) => dayjs(record?.createdAt).format('YYYY-MM-DD'),
    },
    {
      title: '',
      key: 'action',
      width: '5%',
      render: (record: any) => (
        <Button
          onClick={() => deleteBanner(record._id)}
          color='error'
          variant='outlined'
          className='flex w-full justify-start gap-2'
        >
          <Delete /> Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getAllBanner();
        setData(res.data.banners);
        setDeleteLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [deleteLoading]);
  return (
    <div>
      <ToastContainer />
      <Header
        text='Banner'
        endPoint={
          <Button
            variant='contained'
            color='error'
            onClick={() => navigate('/banner/create-banner')}
          >
            + Add
          </Button>
        }
      />
      <CardContent title='List category' className='m-5 p-3 rounded-lg'>
        <TableContainer
          className=' border border-[#ddd] '
          sx={{ maxHeight: 610, marginTop: 2 }}
        >
          <Table aria-label='customized table' sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                {columns?.map((elm) => (
                  <TableCell
                    width={elm.width}
                    key={elm.key}
                    className='font-semibold'
                  >
                    {elm.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((category, index) => (
                <TableRow
                  key={category?._id}
                  className={
                    index % 2 === 0 ? 'bg-[#eee] text-center' : 'text-center'
                  }
                >
                  {columns?.map((col) => (
                    <TableCell
                      key={col.key}
                      width={col.width}

                      // className='flex justify-center items-center text-center'
                    >
                      {col.render ? col.render(category, index) : '----'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </div>
  );
};

export default Category;
