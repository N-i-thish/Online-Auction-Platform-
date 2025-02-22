import { BrowserRouter , Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage';
import Homepage from './pages/Homepage';
import Yacht from './Components/Yacht';
import Sidebar from './Components/SideBar';
import AddYacht from './Components/AddYacht';
import Profile from './Components/Profile';
import UserHomePage from './pages/UserHomepage';
import UserAbout from './Components/UserAbout';



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <CssBaseline/>
        <Routes >
          <Route path="/" element={<SigninPage/>} />
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/adminhomepage" element={<Homepage/>} />
          <Route path="/yacht" element={<Yacht/>} />
          <Route path="/addyacht" element={<AddYacht/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/UserHomepage" element={<UserHomePage/>} />
          <Route path="/UserAbout" element={<UserAbout/>} />
          
          </Routes>
          </div>
          </BrowserRouter>
  );
}

export default App;
