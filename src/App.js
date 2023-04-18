
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from './components/frontpage';
import Message from './components/message';
import Mypage from './components/mypage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Frontpage/>}></Route>    
             <Route path="message" element={<Message/>}></Route> 
             <Route path="mypage" element={<Mypage/>}></Route> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
