import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blog/Blog';


function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/aboutus' element={<Aboutus />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/blogs' element={<Blogs />} />
    </Routes>
    </div>
  );
}
export default App;
