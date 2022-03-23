import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';

const Shop = () =>{
  return (
    <h2>This is a shop route</h2>
  )
}

const  App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} >
        <Route path='shop' element={<Shop/>} />
      </Route>  
    </Routes>
  )
}

export default App;
