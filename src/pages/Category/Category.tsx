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
import { useNavigate } from 'react-router-dom';
import CardContent from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { deleteOneCategory, getAllCategory } from '../../services/category';
import { baseURLImg } from '../../services/api';
import ActionMenu from '../../components/ActionMenu/ActionMenu';
import { Delete, Edit } from '@mui/icons-material';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';

const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICategory[]>();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const deleteCategory = async (id: string) => {
    try {
      const res = await deleteOneCategory(id);
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
      title: 'Name',
      width: '30%',
      key: 'name',
      render: (record: any) => record?.name?.en,
    },
    {
      title: 'Image',
      width: '33%',
      key: 'image',
      render: (record: any) => (
        <img
          src={`${baseURLImg}/${record?.image}`}
          alt='brand logo'
          className='w-[100px] h-[70px]'
        />
      ),
    },
    {
      title: 'Create date',
      width: '33%',
      key: 'date',
      render: (record: any) =>
        dayjs(record?.createdAt).format('YYYY-MM-DD / HH:mm:ss'),
    },
    {
      title: '',
      key: 'action',
      width: '5%',
      render: (record: any) => (
        <div>
          <ActionMenu
            actionButtons={
              <div>
                <Button
                  onClick={() => navigate(`/category/${record._id}`)}
                  className='flex justify-start w-full gap-2'
                >
                  <Edit /> Edit
                </Button>
                <Button
                  onClick={() => deleteCategory(record._id)}
                  color='error'
                  className='flex w-full justify-start gap-2'
                >
                  <Delete /> Delete
                </Button>
              </div>
            }
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getAllCategory();
        setData(res.data.data);
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
        text='Category'
        endPoint={
          <Button
            variant='contained'
            color='error'
            onClick={() => navigate('/category/create-category')}
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
                  key={category._id}
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
