import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const People = () => {
  return (
    <>
    <ToastContainer/>
    <Link to="/profile">
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
                placeholder="Search... @"
              />
              <a href="#" className="search_icon">
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
                <h3>Find your friends</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.2s"
                styles="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >
                

                <Link to="/profile">

                <a className="profile-link" href="/profile.html">
                  <div className="advisor_thumb">
                    <img
                      src="https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/250403194_393277259143809_5424763556326976011_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CAtFYFEdlMAAX_HCZvN&_nc_ht=scontent.fsof11-1.fna&oh=7ab05e46c4844bea7881ba86376961f8&oe=61A58289"
                      alt="User picture"
                    />
                  </div>

                  <div className="single_advisor_details_info">
                    <h6>Valentin Vasilev</h6>
                    <p className="designation">val3ntin</p>
                    <p className="designation">699 followers</p>
                  </div>
                </a>

                </Link>
                
              </div>
            </div>

  
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

        .profile-link{
          text-decoration:none;
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

        .row{
          justify-content:center;
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