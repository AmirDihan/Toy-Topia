import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { reload } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser, updateProfileFunc } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateProfileFunc(displayName, photoURL)
      .then(() => {
        reload(user);
        setUser({ ...user, displayName, photoURL });
        e.target.reset();
        toast.success("profile info updated");
      })
      .catch((error) => {
        toast.error(error.message);
        e.target.reset();
      });
  };
  return (
    <div className="bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={user.photoURL}
          alt="user photo"
          className="min-w-40 min-h-40 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{user.displayName}</h1>
          <p className="py-6">{user.email}</p>
        </div>
      </div>
      <div className="hero-content flex justify-center items-center w-full">
        <h3 className="text-3xl font-bold">
          Update your <br /> profile information
        </h3>
        <form onSubmit={handleUpdate} className="relative">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your name"
              required
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Photo Url"
              required
            />
            <button className="btn btn-neutral mt-4">Update</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
