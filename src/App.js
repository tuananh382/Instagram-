
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from './components/frontpage';
import Message from './components/message';
import Mypage from './components/mypage';
import Login from './components/login';
import Resgister from './components/resgister';
import Post from './components/post';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Resgister/>}></Route>
          <Route path="frontpage" element={<Frontpage />}></Route>
          <Route path="message" element={<Message />}></Route>
          <Route path="mypage" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
