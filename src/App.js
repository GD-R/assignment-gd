import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ContextApi from './ContextApi/ContextApi';
import ErrorPage from "./Pages/ErrorPage";



function App() {

  

  return (
    <>
     <ContextApi>
     <NavBar/>
     <SideBar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>}/>
       <Route path="/home/collection:cIndex/sub:sIndex/:item" element={<Home/>} />
       <Route path="*" element={<ErrorPage/>}  />
     </Routes>
     </ContextApi>
    
    </>
  );
}

export default App;
