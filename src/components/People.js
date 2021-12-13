import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import UserCard from "./UserCard";

const People = () => {
  const [users, setUsers] = useState([]);
  const [randomUsers, setRandomUsers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const ref = firebase.firestore().collection("users");
  const userId = localStorage.getItem("userId");

  function getAllUsers() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });
  }

  function getRandomUsers() {
    ref.onSnapshot( (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {

        if(items.length === 3){
          return;
        }

        let userFollowers = doc.data().peopleWhoFollowedMe;
        let userFollowing = doc.data().peopleWhoFollow;
  
        let firstCheck = userFollowers.find(x => x === userId);
        let secondCheck = userFollowing.find(x => x === userId);
        let thirdCheck = doc.data().id === userId;

        if(!firstCheck && !secondCheck && ! thirdCheck){
          items.push(doc.data());
        }
      });
      setRandomUsers(items);
    });
  }

  useEffect(() => {
    getAllUsers();
    getRandomUsers();
  }, []);

  return (
    <>
      <Link to={"/people/" + userId}>
        <div className="fab">
          <i className="far fa-user fa-sm"></i>
        </div>
      </Link>

      <header>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder="Search..."
                onChange={(event) => {
                  setSearchItem(event.target.value);
                }}
              />
              <a className="search_icon">
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div
                className="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
                styles="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >

                {searchItem ? 
                
                (
<h3>Find your friend by username</h3>
                ) :

                (
                  <h3>Get in touch with someone new</h3>
                )
              
              }
                
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row">

            {searchItem ? 
            
            (

              <>
              {users
                .filter((val) => {
                  if (searchItem === "") {
                    return {
                      val
                    };
                  } else if (
                    val.username.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((x) => (
                  <UserCard key={x.id} user={x} />
                ))}
                </>
             

            ) :

            (

              <>
              {randomUsers
                .filter((val) => {
                  if (searchItem === "") {
                    return {
                      val
                    };
                  } else if (
                    val.username.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((x) => (
                  <UserCard key={x.id} user={x} />
                ))}
                </>

            )
          
          }
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

        a {
          text-decoration: none;
        }

        .searchbar {
          margin: 10px auto;
          height: 60px;
          background-color: #2c2c2e;
          border-radius: 30px;
          padding: 10px;
        }

        .search_input {
          color: white;
          border: 0;
          outline: 0;
          background: none;
          width: 0;
          caret-color: transparent;
          line-height: 40px;
          transition: width 0.4s linear;
        }

        .searchbar:hover > .search_input {
          padding: 0 10px;
          width: 250px;
          caret-color: #ea4335;
          transition: width 0.4s linear;
        }

        .searchbar:hover > .search_icon {
          background: white;
          color: #ea4335;
        }

        .image-logo {
          width: 20px;
          margin: 0px auto;
        }

        .search_icon {
          height: 40px;
          width: 40px;
          float: right;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: white;
          text-decoration: none;
        }

        body {
          margin-top: 20px;
          background: #eee;
        }

        .row {
          justify-content: center;
        }

        .single_advisor_profile {
          position: relative;
          margin-bottom: 50px;
          -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
          z-index: 1;
          border-radius: 15px;
          -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.125);
          box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.125);
        }

        .advisor_thumb {
          display: flex;
          justify-content: center;
        }

        .advisor_thumb img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .single_advisor_profile .advisor_thumb {
          position: relative;
          z-index: 1;
          border-radius: 15px 15px 0 0;
          margin: 0 auto;
          background-color: white;
          overflow: hidden;
        }

        .single_advisor_profile .single_advisor_details_info {
          position: relative;
          z-index: 1;
          padding: 30px;
          text-align: center;
          -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
          border-radius: 0 0 15px 15px;
          background-color: #ffffff;
        }

        .single_advisor_profile .single_advisor_details_info h6 {
          margin-bottom: 0.25rem;
          -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
        }
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single_advisor_profile .single_advisor_details_info h6 {
            font-size: 14px;
          }
        }
        .single_advisor_profile .single_advisor_details_info p {
          -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
          margin-bottom: 0;
          font-size: 14px;
        }
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single_advisor_profile .single_advisor_details_info p {
            font-size: 12px;
          }
        }

        .single_advisor_profile:hover .advisor_thumb .social-info a,
        .single_advisor_profile:focus .advisor_thumb .social-info a {
          color: #ffffff;
        }
        .single_advisor_profile:hover .advisor_thumb .social-info a:hover,
        .single_advisor_profile:hover .advisor_thumb .social-info a:focus,
        .single_advisor_profile:focus .advisor_thumb .social-info a:hover,
        .single_advisor_profile:focus .advisor_thumb .social-info a:focus {
          color: #ffffff;
        }
        .single_advisor_profile:hover .single_advisor_details_info,
        .single_advisor_profile:focus .single_advisor_details_info {
          background-color: #2c2c2e;
        }
        .single_advisor_profile:hover .single_advisor_details_info::after,
        .single_advisor_profile:focus .single_advisor_details_info::after {
          background-color: #ffffff;
        }
        .single_advisor_profile:hover .single_advisor_details_info h6,
        .single_advisor_profile:focus .single_advisor_details_info h6 {
          color: #ffffff;
        }
        .single_advisor_profile:hover .single_advisor_details_info p,
        .single_advisor_profile:focus .single_advisor_details_info p {
          color: #ffffff;
        }

        .single_advisor_details_info {
          color: black;
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

export default People;
