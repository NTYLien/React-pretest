import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Food from './Food';
import AddNewFood from './AddNewFood';
import NotFound from './NotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodDetail from './FoodDetail';
import EditFood from './EditFood';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-sm  bg-light'>
        <div className='container-fluid'>
          <ul className="navbar-nav">
            <li className='nav-item nav-link '><Link to="/">Home</Link></li>
            <li className='nav-item nav-link'><Link to="/food">Food</Link></li>
            <li className='nav-item nav-link'><Link to="/addnewfood">Add New Food</Link></li>
            <li className='nav-item nav-link'><Link to="/about">About</Link></li>
          </ul>
        </div>

      </nav>


      <Routes>
        <Route path="/"></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/food/:id" element={<FoodDetail />}></Route>
        <Route path="/addnewfood" element={<AddNewFood />} ></Route>
        <Route path="/edit/:id" element={<EditFood />} ></Route>
        <Route path="/fooddetail/:id" element={<FoodDetail />} ></Route>
        <Route path="/about" element={<AddNewFood />} ></Route>
        <Route path="/*" element={<NotFound />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
