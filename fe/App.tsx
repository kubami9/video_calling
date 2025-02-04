import "./App.scss";
import { Link, Route, Routes } from "react-router";
import useWebSocket from "react-use-websocket";
import VideoCall from "./pages/VideoCall/VideoCall.tsx";
import Login from "./pages/Login/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";
import About from "./pages/About/About.tsx";

function App() {
  const socketParams = useWebSocket(
    "ws://localhost:8000",
  );

  return (
    <>
      <nav>
        <Link to={"/"}>Chat</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/about"}>What is this???</Link>
      </nav>
      <h1>Piękna aplikacja rozmów video</h1>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <VideoCall {...socketParams}></VideoCall>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </>
  );
}

export default App;
