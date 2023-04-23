import React from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='rounded-lg border-2 bg-gray-300'> 
      <form
        onSubmit=''
        className="card-body lg:w-1/3 md:mx-auto px-30 bg-base-300 shadow-layer rounded my-20 mx-5"
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
            <Link to="/login" className="label-text-2xl link link-hover">
              Already have an account? Login
            </Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning hover:bg-gray-500">Register</button>
        </div>
        <div className="flex text-3xl justify-center mt-5">
          <button onClick="">
            <BsGoogle />
          </button>
          <button onClick="">
            <BsGithub className="ml-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;