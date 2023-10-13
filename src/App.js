// import logo from './logo.svg';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import './App.css';
import CreateUsers from './components/CreateUsers';
import ListUsers from './components/ListUsers';
import EditUsers from './components/EditUsers';

function App() {
  return (
  <div>
    CRUD USING PHP AND MYSQL
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/' >ListUsers</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='user/create' >CreateUsers</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<ListUsers/>}/>
        <Route path='user/create' element={<CreateUsers/>}/>
        <Route path='user/:id/edit' element={<EditUsers/>}/>

      </Routes>
    </nav>
    </BrowserRouter>
  </div>
  );
}

export default App;
