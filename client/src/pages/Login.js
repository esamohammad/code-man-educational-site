
import { Link } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
// ! rederect source 💥💥💥💥💥💥💥💥
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

import toast from 'react-hot-toast';


const Login = () => {

  // ! error message states
  const [error, setError] = useState('');


  //! login sing in with registration
  const { signIn, signInWithGithub, signInWithFacebook } = useContext(AuthContext);
  //!github❤❤❤
  //! facebook❤❤❤ 


  const navigate = useNavigate();
  //! get browser location
  // ! rederect source 💥💥💥💥💥💥💥💥
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // !rederect source end 💥💥💥💥💥💥💥💥





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
        navigate(from, { replace: true });  //! rederect💥💥
        toast.success('Successfully Login Done 💥💖💥')
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
        navigate(from, { replace: true });  //! rederect💥💥
        toast.success('Successfully Login Done 💥💖💥')
      })
      .catch(error => console.error(error))
  }





  //!github popup ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤


  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });  //! rederect💥💥
        toast.success('Successfully Login Done 💥💖💥')
      })
      .catch(e => {
        console.error(e)

      });

  }
  //!github popup ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤








  //!Facebook popup ❤❤  user pic ase na so pore try korbo ok
  const facebookProvider = new FacebookAuthProvider();

  const handleFacebookSignIn = () => {
    signInWithFacebook(facebookProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });  //! rederect💥💥
        toast.success('Successfully Login Done 💥💖💥')
      })
      .catch(e => {
        console.error(e)

      });

  }
  //!Facebook popup ❤❤





  return (
    <form onSubmit={handleSubmit} className="card-body w-max mx-auto lg:w-1/3 bg-base-300 shadow-layer rounded mt-20">
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
          <Link to="/register" className="label-text-xl link link-hover text-red-700 font-semibold">
            New to this site ? Create an account.
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
        <button onClick={handleGithubSignIn}>
          <BsGithub className="ml-5" />
        </button>
        <button onClick={handleFacebookSignIn}>
          <BsFacebook className="ml-5" />
        </button>
      </div>
    </form>
  );
};

export default Login;