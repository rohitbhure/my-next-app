// pages/index.js
import Login from '../components/Login';
import Register from '../components/Register';
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
