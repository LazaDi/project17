import { Routes,
Route,
Link } from 'react-router-dom';

//import css modules and pages
import './App.css';
import Navbar from "./components/Navbar";
import Myprofile from "./pages/MyProfile";
import Userprofile from "./pages/UserProfile";


function App() {
  return (
    <div className="App">
      <nav>
          <Navbar />
      </nav>
      <Routes>
        <Route exact path="/me" element={<Myprofile />}></Route>
        <Route path="/user" element={<Userprofile />}></Route>   
      </Routes>
    </div>
  );
}

export default App;
