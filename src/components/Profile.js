import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import ImageCard from "./ImageCard";

const Profile = ({ match }) => {
  const [user, setUser] = useState({});
  const [images, setImages] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [error, setError] = useState("");
  const [followed, setFollowed] = useState(false);

  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [accessedUserId, setAccessedUserId] = useState(match.params.userId);

  let checkUser = true;
  if(accessedUserId === userId){
    checkUser = false;
  }

  const [checkMyProfile, setCheckMyProfile] = useState(true);
  const [hidePhotos, setHidePhotos] = useState(false);
  const [hideFollowers, setHideFollowers] = useState(false);
  const [hideFollowing, setHideFollowing] = useState(false);


  const { logout } = useAuth();
  const history = useHistory();

  const uploadImage = (files) => {
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
          let userPhotos = doc.data().photos;
          //url or public_id
          userPhotos.push(response.data.url);
          firebase.firestore().collection("users").doc(userId).update({
            photos: userPhotos,
          });
          setImages(userPhotos);
          toast.success("Successfully added image",{position: toast.POSITION.TOP_CENTER});
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    });
  };

  const followUser = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then(function (doc) {
        let myFollows = doc.data().peopleWhoFollow;
        let followingCount = Number(doc.data().followingCount) + 1;

        let result = false;
        myFollows.map((x) => {
          if (x === accessedUserId) {
            result = true;
          }
        });

        if (result === false) {
          myFollows.push(accessedUserId);
          firebase.firestore().collection("users").doc(userId).update({
            peopleWhoFollow: myFollows,
            followingCount: followingCount
          });

          firebase
      .firestore()
      .collection("users")
      .doc(accessedUserId)
      .get()
      .then(function (doc) {
        let othersFollowedMe = doc.data().peopleWhoFollowedMe;
        let followCount = Number(doc.data().followersCount) + 1;

        othersFollowedMe.push(userId);
          firebase.firestore().collection("users").doc(accessedUserId).update({
            peopleWhoFollowedMe: othersFollowedMe,
            followersCount: followCount
          });
          toast.success("Successfully followed " + doc.data().username,{position: toast.POSITION.TOP_CENTER});
          setFollowed(true);
      });

        }
      });
  };

  const unFollowUser = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then(function (doc) {
        let myFollows = doc.data().peopleWhoFollow;
        let followingCount = Number(doc.data().followingCount) -1;

        let result = false;
        myFollows.map((x) => {
          if (x === accessedUserId) {
            result = true;
          }
        });

        if(result === true){

        myFollows = myFollows.filter(e => e !== accessedUserId);

          firebase.firestore().collection("users").doc(userId).update({
            peopleWhoFollow: myFollows,
            followingCount: followingCount
          });

          firebase
      .firestore()
      .collection("users")
      .doc(accessedUserId)
      .get()
      .then(function (doc) {
        let othersFollowedMe = doc.data().peopleWhoFollowedMe;
        let followCount = Number(doc.data().followersCount) - 1;

        othersFollowedMe = othersFollowedMe.filter(e => e !== userId);

          firebase.firestore().collection("users").doc(accessedUserId).update({
            peopleWhoFollowedMe: othersFollowedMe,
            followersCount: followCount
          });
          toast.success("Successfully unfollowed " + doc.data().username,{position: toast.POSITION.TOP_CENTER});
          setFollowed(false);
      });
    }
        
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
          setImages(doc.data().photos);
          setHidePhotos(doc.data().hidePhotos);
          setHideFollowers(doc.data().hideFollowers);
          setHideFollowing(doc.data().hideFollowing);
          setFollowers(doc.data().peopleWhoFollowedMe);
          setFollowing(doc.data().peopleWhoFollow);
          
          let followedMePeople = doc.data().peopleWhoFollowedMe;
          followedMePeople.map(x => {
            if(x === userId){
              setFollowed(true);
            }
          })


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

  const onDeleteProfileImage = (imageUrl) => {
    firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then(function (doc) {
          let userPhotos = doc.data().photos;
          let updatedUserPhotos = userPhotos.filter(x => x !== imageUrl);
          firebase.firestore().collection("users").doc(userId).update({
            photos: updatedUserPhotos,
          });
          setImages(updatedUserPhotos);
          toast.success("Successfully deleted image",{position: toast.POSITION.TOP_CENTER});
        });
  };



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
                <span className="username">{user.username}</span>
              </div>
              <ul className="social-icons">
                {checkMyProfile ? (
                  <>
                    <label htmlFor="avatar">
                      <li>
                        <i className="far fa-images">
                          <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(event) => {
                              uploadImage(event.target.files);
                            }}
                          />
                        </i>
                      </li>
                    </label>

                    <Link to={"/settings/" + userId}>
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

{followed ? (

<li onClick={unFollowUser}>
                      <i className="fas fa-check"></i>
                    </li>

) : (

 <li onClick={followUser}>
                      <i className="fas fa-plus"></i>
                    </li>

)}                 


                  </>
                )}
                <a href="#gallery">


{hidePhotos && checkUser ? 

(
<></>
)

:

(
  <li>
  {images.length}&#160; <i className="fas fa-file-image"></i>
                    </li>
  
)}
</a>

{hideFollowers && checkUser ? 

(
<></>
) : 

(
<Link to={"/followers/" + accessedUserId}>
<li>
{followers.length}&#160; <i className="fas fa-user-check"></i>
                    </li>
  </Link>
)}

{hideFollowing && checkUser ? 

(
<></>
) : 

(
<Link to={"/following/" + accessedUserId}>
<li>
{following.length}&#160; <i class="fas fa-user-plus"></i>
                    </li>
  </Link>
)}


                    
              </ul>
            </div>
            
          </div>
          
        </div>

        

{hidePhotos && checkUser ? 
(
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">No photos</h1>
    <p class="lead">{user.username}'s gallery is private !</p>
  </div>
</div>
) :

(

  <>
  {images.length > 0 ? 
  
  (
    <div className="gallery-image" id="gallery">
{images.map((x => <ImageCard key={x} imageUrl={x} checkMyProfile={checkMyProfile} onDelete={onDeleteProfileImage} /> ))}
</div>
  ) :
  
  (
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">No photos</h1>
    <p class="lead">{user.username}'s gallery is empty !</p>
  </div>
</div>
  )}
  </>


)}
        
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
          object-fit: cover;
          position: relative;
          width: 450px;
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

        .gallery-image {
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .gallery-image img {
          object-fit: cover,
          height: 350px;
          width: 350px;
          transform: scale(1.0);
          transition: transform 0.4s ease;
        }
        
        .img-box {
          box-sizing: content-box;
          margin: 10px;
          height: 350px;
          width: 350px;
          overflow: hidden;
          display: inline-block;
          color: white;
          position: relative;
          background-color: white;
          cursor: none;
        }
        
        .caption {
          position: absolute;
          bottom: 5px;
          right: 155px;
          opacity: 0.0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          cursor: none;
        }
        
        .transparent-box {
          height: 100px;
          width: 350px;
          background-color:rgba(0, 0, 0, 0);
          position: absolute;
          bottom: 0;
          left: 0;
          transition: background-color 0.3s ease;
        }
        
        .img-box:hover img { 
          transform: scale(1.1);
        }
        
        .img-box:hover .transparent-box {
          background-color:rgba(0, 0, 0, 0.5);
        }
        
        .img-box:hover .caption {
          transform: translateY(-20px);
          opacity: 1.0;
        }
        
        .img-box:hover {
          cursor: default;
        }
        
        .caption > p:nth-child(2) {
          font-size: 0.8em;
        }
        
        .opacity-low {
          opacity: 0.5;
        }
        
      `}</style>
    </>
  );
};

export default Profile;
