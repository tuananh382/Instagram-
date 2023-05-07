import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frontpage from "./components/frontpage";
import Login from "./components/login";
import { AuthProvider } from "./providers/context-provider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Frontpage />} />
            {/* <Route path="message" element={<Message />} /> */}
            {/* <Route path="mypage" element={<Mypage />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

// function ProtectedRoute({ component: Component, ...rest }) {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) =>
//           isLoggedIn ? (
//             <Component {...props} />
//           ) : (
//             <Navigate to="/login" replace />
//           )
//         }
//       />
//     </Routes>
//   );
// }

export default App;