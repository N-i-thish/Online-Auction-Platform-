import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import Homepage from './pages/Homepage';

import UserHomePage from './pages/UserHomepage';
 



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <CssBaseline/>
        <Routes >
          <Route path="/" element={<SigninPage/>} />
          
          <Route path="/adminhomepage" element={<Homepage/>} />
         
          
         
          <Route path="/UserHomepage" element={<UserHomePage/>} />
       
          
          </Routes>
          </div>
          </BrowserRouter>
  );
}

export default App;
