import { Box } from '@mui/material';
import { Tabs, Tab, Typography, Button } from '@mui/material';
import { Link as LinkMui, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../../layout/Header/Header';
import { ArrowBack } from '@mui/icons-material';
import CardContent from '../../../components/Card/Card';
import Footer from '../../../components/Footer/Footer';
import CustomTabPanel from '../../../components/CustomTab/CustomTab';
import { postBanner, putBanner } from '../../../services/banner';
import { IBannerValue } from '../../../types/initialValues';
import { Uzbek } from './tabs/Uzbek';
import { Russian } from './tabs/Russian';
import { English } from './tabs/English';
import { Krill } from './tabs/Krill';

export default function CreateBanner() {
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

  const initialValues: IBannerValue = {
    url: '',
    image: { uz: '', ru: '', en: '', cr: '' },
  };

  const onSubmit = async (values: IBannerValue) => {
    console.log(values);

    try {
      if (params?.id) {
        const res = await putBanner(params.id, values);
        if (res.status === 200) {
          toast.success('Successfully Update banner');
          setTimeout(() => navigate(-1), 1000);
        }
      } else {
        const res = await postBanner(values);
        if (res.status === 200) {
          toast.success('Successfully create banner');
          setTimeout(() => navigate(-1), 1000);
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const formik = useFormik({ onSubmit, initialValues });
  const { handleSubmit } = formik;

  // useEffect(() => {
  //   if (params.id) {
  //     const getOneBannerFetch = async () => {
  //       const res = await getOneBanner(params.id);
  //       setValues(res.data.data);
  //     };
  //     getOneBannerFetch();
  //   }
  // }, []);

  return (
    <>
      <div style={{ paddingBottom: '50px', minHeight: 'calc(100vh - 62px)' }}>
        <Header
          startPoint={
            <div className='flex gap-3 items-center'>
              <LinkMui to={'/banner'} className='text-[gray]'>
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
