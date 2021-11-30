import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

const Profile = ({ match }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [accessedUserId, setAccessedUserId] = useState(match.params.userId);
  const [checkMyProfile, setCheckMyProfile] = useState(true);

  const { logout } = useAuth();
  const history = useHistory();

  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "eww0g74o");
    Axios.post(
      "https://api.cloudinary.com/v1_1/defiefioi/image/upload",
      formData
    ).then((response) => {


      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then(function (doc) {
          let photos = doc.data().photos;
          photos.push(response.data.public_id);
          
          firebase.firestore().collection("users").doc(userId).update({
            photos: photos
        });


        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    });
  };

  useEffect(() => {
    if (accessedUserId) {
      if (userId !== accessedUserId) {
        setCheckMyProfile(false);
      }
      firebase
        .firestore()
        .collection("users")
        .doc(accessedUserId)
        .get()
        .then(function (doc) {
          setUser(doc.data());
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      localStorage.clear();
      history.push("/");
      toast.success("Successfully logged out", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <main>
        <Link to="/people">
          <div className="fab-users">
            <i className="fas fa-users"></i>
          </div>
        </Link>

        <div className="wrapper">
          <img
            className="background-image"
            src={user.backgroundPicture}
            alt="Background image"
          />

          <div className="profile">
            <img src={user.profilePicture} alt="Profile image" />
            <div className="overlay">
              <div className="about d-flex flex-column">
                <h4 className="fullName">{user.email}</h4>
                <span className="username">@{user.username}</span>
              </div>
              <ul className="social-icons">
                {checkMyProfile ? (
                  <>
                    <label for="avatar">
                      <li>
                        <i className="far fa-images">
                          <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={(event) => {
                              uploadImage(event.target.files);
                            }}
                          />
                        </i>
                      </li>
                    </label>

                    <Link to="/settings">
                      <li>
                        <i className="fas fa-cog"></i>
                      </li>
                    </Link>

                    <li onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt"></i>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      <i className="fas fa-plus"></i>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />{" "}
                </div>

                <div className="card-content d-flex flex-column align-items-center">
                  <ul className="social-icons">
                    <li>
                      <i className="far fa-heart"></i>
                    </li>
                    <li>
                      <i className="far fa-trash-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />{" "}
                </div>

                <div className="card-content d-flex flex-column align-items-center">
                  <ul className="social-icons">
                    <li>
                      <i className="far fa-heart"></i>
                    </li>
                    <li>
                      <i className="far fa-trash-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #000;
        }
        .profile {
          position: relative;
        }

        .fullName,
        .username {
          color: black;
          background-color: white;
          padding: 5px;
          margin: 5px;
          border-radius: 10px;
        }

        .background-image {
          position: absolute;
          width: 100%;
          height: 100vh;

          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .profile img {
          position: relative;
          width: 400px;
          height: 450px;
          border-radius: 6px;
        }

        .overlay {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          opacity: 0;
          transition: all 1s;
          border-radius: 6px;
        }

        .profile .overlay {
          opacity: 1;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          list-style: none;
          text-align: center;
          padding: 0px;
          margin-top: 10px;
        }

        .social-icons li {
          cursor: pointer;
          width: 25px;
          height: 25px;
          border: 1px solid #eee;
          padding: 20px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          border-radius: 5px;
          transition: all 1s;
        }

        .social-icons li:hover {
          background: #fff;
          color: black;
        }

        .social-icons a {
          color: white;
          text-decoration: none;
        }

        .social-icons a:hover {
          color: black;
        }

        .overlay .about {
          position: relative;
          justify-content: center;
          align-items: center;
          display: flex;
          top: 40%;
          color: #fff;
          flex: column;
        }

        main .container {
          margin-top: 50px;
        }

        .card {
          margin: 5px;
          padding: 0px;
        }

        .card .card-image {
          width: 100%;
          max-height: 340px;
        }

        .card .card-image img {
          width: 100%;
          max-height: 340px;
          object-fit: cover;
        }

        .card .card-content {
          position: absolute;
          bottom: -180px;
          color: #fff;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          min-height: 100px;
          width: 100%;
          transition: bottom 0.4s ease-in;
          box-shadow: 0 -10px 10px rgba(255, 255, 255, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card:hover .card-content {
          bottom: 0px;
        }

        .card .card-content .social-icons {
          list-style: none;
          padding: 0px;
        }

        .card .card-content .social-icons li {
          margin: 20px;
          transition: 0.5s;
          transition-delay: calc(0.15s * var(--i));
          transform: translateY(50px);
        }

        .card:hover .card-content .social-icons li {
          transform: translateY(20px);
        }

        .card .card-content .social-icons li a {
          color: #fff;
        }

        .card .card-content .social-icons li a span {
          font-size: 1.3rem;
        }

        @media (max-width: 991.5px) {
          .container {
            margin-top: 20px;
          }

          .container .row .col-lg-4 {
            margin: 20px 0px;
          }
        }

        .card {
          padding: 0px;
        }

        .fab-users {
          width: 70px;
          height: 70px;
          background-color: #2c2c2e;
          border-radius: 50%;

          font-size: 50px;
          line-height: 70px;
          color: white;
          text-align: center;

          position: fixed;
          right: 30px;
          bottom: 30px;
          z-index: 2;
          cursor: pointer;

          transition: all 0.1s ease-in-out;
        }

        .fab-users a {
          color: white;
          text-decoration: none;
        }

        .fab-users:hover {
          box-shadow: 0 6px 14px 0 #2c2c2e;
          transform: scale(1.05);
        }

        input {
          border: 0;
          clip: rect(1px, 1px, 1px, 1px);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </>
  );
};

export default Profile;
