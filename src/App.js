import logo from './logo.svg';
import './App.css';
import { Signup_page } from './signup';
import {Login_page} from './login';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
  Route
} from "react-router-dom";

let percent_var=50;
let dirn=true;

function handle_animation(){
  if(dirn){
    percent_var++;
  }else{
    percent_var--;
  }
  if(percent_var>=80 || percent_var<=20)
  {
    dirn=!dirn;
  }
  document.getElementsByTagName('body')[0].style.background="-webkit-linear-gradient(bottom, #F266AB "+String(percent_var)+"%, #A459D1)";
}
window.setInterval(handle_animation,150);

const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login_page />,
  },
  {
    path: "/signup",
    element: <Signup_page />,
  },
  
]);

function App() {
  return (
    <div className="App">
      {/* <Login_page /> */}
      {/* <Signup_page /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
