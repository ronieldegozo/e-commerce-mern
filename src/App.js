import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './routes/home/home.component';

const Navigation = () =>{
  return(
    <nav>
      <ul>
        <li>
          <a href="/">Path</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
      <Outlet/>
    </nav>
  
  )
}

const Shop = () =>{
  return <h1>test</h1>
}

const  App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  )
}

export default App;
