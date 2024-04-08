import { Box, Button } from '@mui/material';
import Logo from '../../assets/icons/logo.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { FormEvent, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../../services/api';
import useStore from '../../store/store';

const Login = () => {
  const { setToken } = useStore();

  const [pwdType, setPwdType] = useState('password');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', {
        phoneNumber,
        password,
      });

      const token = response.data.data;
      console.log(token);
      if (token) {
        setToken(token);
        window.location.replace('/');
        toast.success('Success', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // Handle other cases if needed
      }
    } catch (error) {
      if (error) {
        toast.error('Username yokida Parol xato ', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
          progress: undefined,
        });
      }
    }
  };

  return (
    <Box
      flexDirection={{ xs: 'column', md: 'row' }}
      className='flex flex-wrap font-body login-form'
      style={{ minHeight: '100vh' }}
    >
      <ToastContainer />
      <Box
        flex={{ xs: 0, md: 1 }}
        minHeight={100}
        className='flex justify-center items-center bg-[#A62378]'
      >
        <img src={Logo} alt='logo' style={{ width: '60%' }} />
      </Box>
      <Box
        pt={{ md: 12 }}
        className='flex-1 bg-[#eee]  justify-around items-center flex flex-col shadow px-2'
      >
        <Box
          className='rounded-2xl shadow-lg bg-white p-3 w-full'
          maxWidth={500}
        >
          <div className='text-3xl font-semibold p-4'>Login</div>
          <hr></hr>
          <form onSubmit={onFormSubmit}>
            <div className='flex flex-col p-6 font-semibold space-y-6'>
              <div className={`flex flex-col space-y-2`}>
                <label>Phone number</label>
                <span className='flex items-center space-x-2 p-3 bg-[#eee] rounded-lg form-item'>
                  <span>
                    <AccountCircleIcon style={{ color: '#6E8BB7' }} />
                  </span>
                  <input
                    placeholder={'Enter Phone Number'}
                    type='tel'
                    spellCheck='false'
                    id='login'
                    className='bg-[#eee] outline-none'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </span>
              </div>
              <div className={`flex flex-col space-y-2 `}>
                <label>Password</label>
                <span className='items-center justify-between w-full space-x-2 p-3 bg-[#eee] rounded-lg flex form-item'>
                  <div className='flex items-center gap-2'>
                    <span>
                      <LockIcon style={{ color: '#6E8BB7' }} />
                    </span>
                    <input
                      type={pwdType}
                      placeholder={'Enter password'}
                      spellCheck='false'
                      className='bg-[#eee] outline-none'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <span
                    className='cursor-pointer flex items-center justify-end'
                    onClick={() => {
                      setPwdType((prev) => {
                        return prev === 'password' ? 'text' : 'password';
                      });
                    }}
                  >
                    {pwdType === 'password' ? (
                      <VisibilityIcon style={{ color: '#6E8BB7' }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: '#6E8BB7' }} />
                    )}
                  </span>
                </span>
              </div>
            </div>
            <hr></hr>
            <div className='px-6 py-3'>
              <Button
                type='submit'
                className='w-full flex justify-center align-center'
                variant='outlined'
                // s
                // loading={loader}
              >
                {/* {t('e/nter')} */}
                Enter
              </Button>
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
