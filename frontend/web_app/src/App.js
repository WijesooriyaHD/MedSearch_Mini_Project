
import './App.css';
import Form from './Pages/form';
import Home from './Pages/home';
import UpdateDetails from './Pages/updateMedicine'

import {Route,Routes , Link} from "react-router-dom"
import ListMedicine from './Pages/listMedicine';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route exact path="/" element={ <Home /> }/>
      <Route path="/listmedicines" element={ <ListMedicine/> }/>
      <Route path="/form" element={ <Form /> }/>
      <Route path="/updatedetails" element={ <UpdateDetails/> }/>
      
      <Route path="/home" element={ <Home /> }/>
    
      </Routes>

    </div>
    


    

  );
}

export default App;
