import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import addUser from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [age, setAge] = useState(user?.age || 18);
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
      dispatch(addUser(res?.data?.data));
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">Photo Url</span>
                  </div>
                  <input
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs my-4">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <input
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, gender, age, about }}
        />
      </div>
    </>
  );
};

export default EditProfile;
