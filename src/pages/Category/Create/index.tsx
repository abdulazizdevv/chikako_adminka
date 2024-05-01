import { Box } from '@mui/material';
import { Tabs, Tab, Typography, Button } from '@mui/material';
import { Link as LinkMui, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../../layout/Header/Header';
import { ArrowBack } from '@mui/icons-material';
import CardContent from '../../../components/Card/Card';
import Footer from '../../../components/Footer/Footer';
import { IinitialValues } from '../../../types/initialValues';
import {
  getOneCategory,
  postCategory,
  putCategory,
} from '../../../services/category';
import { Russian } from './tabs/Russian';
import { Uzbek } from './tabs/Uzbek';
import { English } from './tabs/English';
import { Krill } from './tabs/Krill';
import CustomTabPanel from '../../../components/CustomTab/CustomTab';

export default function CreateCategory() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const initialValues: IinitialValues = {
    image: '',
    name: { uz: '', ru: '', en: '', cr: '' },
  };

  const onSubmit = async (values: IinitialValues) => {
    try {
      if (params?.id) {
        const res = await putCategory(params.id, values);
        if (res.status === 201) {
          toast.success('Successfully Update category');
          setTimeout(() => navigate(-1), 800);
        }
      } else {
        const res = await postCategory(values);
        if (res.status === 201) {
          toast.success('Successfully create category');
          setTimeout(() => navigate(-1), 800);
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const formik = useFormik({ onSubmit, initialValues });
  const { handleSubmit, setValues } = formik;

  useEffect(() => {
    if (params.id) {
      const getOneCategoryFetch = async () => {
        const res = await getOneCategory(params.id);
        setValues(res.data.data);
      };
      getOneCategoryFetch();
    }
  }, []);

  return (
    <>
      <div style={{ paddingBottom: '50px', minHeight: 'calc(100vh - 62px)' }}>
        <Header
          startPoint={
            <div className='flex gap-3 items-center'>
              <LinkMui to={'/category'} className='text-[gray]'>
                <ArrowBack />
              </LinkMui>

              <Typography variant='body1' color='gray'>
                Create
              </Typography>
            </div>
          }
        />
        <form onSubmit={handleSubmit}>
          <CardContent
            title='General information'
            className='m-5 rounded-lg p-2 w-1/2'
          >
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { background: '#B31312' },
                  }}
                  textColor='inherit'
                >
                  <Tab label='Uz' {...a11yProps(0)} />
                  <Tab label='Ru' {...a11yProps(1)} />
                  <Tab label='En' {...a11yProps(2)} />
                  <Tab label='Kr' {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Uzbek formik={formik} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Russian formik={formik} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <English formik={formik} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Krill formik={formik} />
              </CustomTabPanel>
            </Box>
          </CardContent>
          <Footer>
            <Button
              variant='outlined'
              color='error'
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type='submit' variant='outlined' color='success'>
              Save
            </Button>
          </Footer>
        </form>
      </div>
    </>
  );
}
