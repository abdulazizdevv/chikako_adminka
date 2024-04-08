import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category/Category';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import { Layout } from './layout/Layout';
import useStore from './store/store';
import CreateCategory from './pages/Category/Create';
import CreateProduct from './pages/Product/Create';
import Banner from './pages/Banner/Banner';
import CreateBanner from './pages/Banner/Create';

function App() {
  const { token } = useStore();

  if (!token) {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route
              path='/category/create-category'
              element={<CreateCategory />}
            />
            <Route path='/category/:id' element={<CreateCategory />} />
            <Route path='product' element={<Product />} />
            <Route path='/product/create-product' element={<CreateProduct />} />
            <Route path='/product/:id' element={<CreateProduct />} />

            <Route path='banner' element={<Banner />} />
            <Route path='/banner/create-banner' element={<CreateBanner />} />
            <Route path='/banner/:id' element={<CreateProduct />} />
          </Routes>
        </Layout>
      </>
    );
  }
}

export default App;
