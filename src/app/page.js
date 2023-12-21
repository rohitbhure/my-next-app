// pages/index.js
import Login from '../components/login';
import Register from '../components/register';
import GifSearch from '../components/GifSearch';

const Home = () => {
  return (
    <div>
      <Login />
      <Register />
      <GifSearch />
    </div>
  );
};

export default Home;
