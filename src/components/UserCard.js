import { Link } from "react-router-dom";

const UserCard = ({
    user
}) => {

    return(

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
                      src={user.profilePicture}
                      alt="User picture"
                    />
                  </div>

                  <div className="single_advisor_details_info">
                    <h6>{user.fullName}</h6>
                    <p className="designation">{user.username}</p>
                    <p className="designation">{user.followersCount} followers</p>
                  </div>
                </a>

                </Link>
                
              </div>
            </div>

    );
}

export default UserCard;