import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from  "react-router-dom"; //React BrowserRouter = biblio qui permet de transformer app react en spa (affichage des diff pages)
// composant de la librairie de react, route = "/", routes= les routes, BrowserRouter= router du navigateur
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
