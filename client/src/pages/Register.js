import React, { useContext, useState } from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {



  //! error message handle
  const [error, setError] = useState('');



  // ! authcontext theke createuser niye aste hobe
  const { createUser, updateUserProfile, signInWithGithub } = useContext(AuthContext);

  //!github❤❤❤



  const navigate = useNavigate();
  //! get browser location
  // ! rederect source 💥💥💥💥💥💥💥💥
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // !rederect source end 💥💥💥💥💥💥💥💥





  //! from data showed in console , event = e , use it..
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // !console.log(name, photoURL, email, password);




    // !create user 🌟🌟🌟🌟🌟🌟
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL); //🌟🌟
        navigate(from, { replace: true });  //! rederect💥💥
        toast.success('Successfully Registered, Please Reload Page .')
      })
      .catch(e => {
        console.error(e)
        setError(e.message);
      });
  } // !create user 🌟🌟🌟🌟🌟🌟





  //!register ar user name and photo store-manage user🌟🌟
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
  }
  //! manage user🌟🌟




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







  return (
    <div className=' '>
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-xs mx-auto lg:max-w-md px-30 bg-base-300 shadow-layer rounded my-20"
      >
        <h1
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="text-3xl font-semibold text-center"
        >
          Please <span className="text-yellow-500">Register</span>
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <small className="text-red-600"></small>
          </label>
          <label className="label">
            <Link to="/login" className="label-text-xl text-red-700 font-semibold link link-hover">
              Already have an account? Login.
            </Link>
          </label>
          <div>
            <p className='text-red-500 text-center'>{error}</p>
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning hover:bg-gray-500">Register</button>
        </div>
        <div className="flex text-3xl justify-center mt-5">
          <button onClick={handleGoogleSignIn}>
            <BsGoogle />
          </button>
          <button onClick={handleGithubSignIn}>
            <BsGithub className="ml-5" />
          </button>
        </div>
      </form>
    </div>
  );

};

export default Register;