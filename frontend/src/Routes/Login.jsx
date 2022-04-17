
import LoginForm from "../UIcomponents/LoginForm/LoginForm";
import "../Routes/Login.css";

// <Route extact path="/login">
//     <h1>
//         HELLLLLOO
//     </h1>
//     <Login />   
// </Route> 


function Login() {
    
  return (
      <div className="LoginPage" style={{background: '#2f3135'}}>
       <LoginForm />
   </div>
  )
}

export default Login;

