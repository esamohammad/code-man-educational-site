
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsGoogle, BsGithub } from "react-icons/bs";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  // ! error message states
  const [error, setError] = useState('');


  //! login sing in with registration
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  //! get browser location
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  //! login submit handler
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(''); //!error clear when all is ok
        navigate('/'); // ! redirect
      })
      .catch(error => {
        console.error(error)
        setError(error.message);
      })
  }






  // ! Google singin pop up
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }



  return (
    <form onSubmit={handleSubmit} className="card-body lg:w-1/3 mx-auto px-30 bg-base-300 shadow-layer rounded mt-20">
      <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className='text-3xl font-semibold text-center'>Please <span className='text-yellow-500'>Login</span></h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="text" name='password' placeholder="password" className="input input-bordered" required />
        <label className="label">
        </label>
        <label className="label">
          <Link className="label-text-alt link link-hover">Forgot password?</Link>
        </label>

        <label className="label">
          <Link to="/register" className="label-text-alt link link-hover">
            New to this site ? Create an account
          </Link>
        </label>
      </div>
      <div>
        <p className='text-red-500 text-center'>{error}</p>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-warning">Login</button>
      </div>
      <div className="flex text-3xl justify-center mt-5">
        <button onClick={handleGoogleSignIn}>
          <BsGoogle />
        </button>
        <button onClick="">
          <BsGithub className="ml-5" />
        </button>
      </div>
    </form>
  );
};

export default Login;