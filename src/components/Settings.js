import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = ({ match }) => {

    const history = useHistory();
    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    if(userId !== match.params.userId){
        history.push("/people/"+ match.params.userId);
    }

    const [user, setUser] = useState({});
    const [profilePicture, setProfilePicture] = useState("");
    
    

    const uploadProfileImage = (files) => {
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
              firebase.firestore().collection("users").doc(userId).update({
                profilePicture: response.data.url
            });
            toast.success("Successfully uploaded profile picture",{position: toast.POSITION.TOP_CENTER});
            history.push("/people/"+ userId);
            })
        });
      };

      const uploadBackgroundImage = (files) => {
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
              firebase.firestore().collection("users").doc(userId).update({
                backgroundPicture: response.data.url
            });
            toast.success("Successfully uploaded background picture",{position: toast.POSITION.TOP_CENTER});
            history.push("/people/"+ userId);
            })
        });
      };

    useEffect(() => {
          firebase
            .firestore()
            .collection("users")
            .doc(match.params.userId)
            .get()
            .then(function (doc) {
              setUser(doc.data());
            })
            .catch(function (error) {
              console.log("Error getting document:", error);
            });
        
      }, []);


    return(
    
        <>

<main>


<Link to={"/people/"+userId}>
    <div className="fab"><i className="far fa-user fa-sm"></i></div>
</Link>


<div className="wrapper bg-white mt-sm-5">
<h4 className="pb-4 border-bottom">Account settings</h4>

<div className="py-2">



    <div className="d-flex align-items-start py-3 border-bottom"> <img src={user.profilePicture} className="img" alt="Profile picture" />
      <div className="pl-sm-4 pl-2" id="img-section"> <b>Profile photo</b>
          <p>Accepted file type .png, .jpg and .jpeg.</p> 
          
              
          <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(event) => {
                              uploadProfileImage(event.target.files);
                            }}
                          />

      </div>
  </div>

  <div className="d-flex align-items-start py-3 border-bottom"> <img src={user.backgroundPicture} className="img" alt="Background picture" />
    <div className="pl-sm-4 pl-2" id="img-section"> <b>Background photo</b>
        <p>Accepted file type .png, .jpg and .jpeg.</p>
        
        
         
         
        
         <input
                            type="file"
                            accept="image/png, image/jpeg , image/jpg"
                            onChange={(event) => {
                              uploadBackgroundImage(event.target.files);
                            }}
                          />

         


    </div>
</div>

  

    <div className="row py-2">
      <div className="col-md-6"> <label htmlFor="firstname">Email</label> <input type="text" value={user.email} className="bg-light form-control" /></div>
      <div className="col-md-6"> <label htmlFor="firstname">Username</label> <input type="text" value={user.username} className="bg-light form-control" /> </div>
    </div>


    <div className="d-sm-flex align-items-center pt-3" id="deactivate">
        <div> <b>Deactivate your account</b>
            <p>Details about your account and password</p>
        </div>
    </div>
    <div className="ml-auto"> <button className="btn danger">Deactivate</button> </div>
</div>
</div>

</main>


      <style jsx>{`
    
    @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}

.wrapper {
    padding: 30px 50px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 600px
}

h4 {
    letter-spacing: -1px;
    font-weight: 400
}

.img {
    margin-right: 20px;
    width: 150px;
    height: 150px;
    border-radius: 6px;
    object-fit: cover
}

#img-section p,
#deactivate p {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
    text-align: justify
}

#img-section b,
#img-section button,
#deactivate b {
    font-size: 14px
}

label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    color: #777;
    padding-left: 3px
}

.form-control {
    border-radius: 10px
}

input[placeholder] {
    font-weight: 500
}

.form-control:focus {
    box-shadow: none;
    border: 1.5px solid #2c2c2e
}

select {
    display: block;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 40px;
    padding: 5px 10px
}

select:focus {
    outline: none
}

.button {
    background-color: #fff;
    color: #2c2c2e
}

.button:hover {
    background-color: #2c2c2e;
    color: #fff
}

.btn-primary {
    margin-right: 20px;
}

.danger {
    background-color: #e20404;
    color: #fff;
    border: 1px solid #ddd
}

.danger:hover {
    background-color: #9e0000;
    color: #fff
}

@media(max-width:576px) {
    .wrapper {
        padding: 25px 20px
    }

    #deactivate {
        line-height: 18px
    }
}

.fab {
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
  
  .fab a {
    color: white;
    text-decoration: none;
  }
  
  .fab:hover {
    box-shadow: 0 6px 14px 0 #2c2c2e;
    transform: scale(1.05);
  }
    
    `}</style>
    
    
    
      </>
      
    
    );
    };
    
    export default Settings;