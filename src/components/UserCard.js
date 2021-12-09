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
                
                <Link to={`/people/${user.id}`}>
 
                  <div className="advisor_thumb">
                    <img
                      src={user.profilePicture}
                      alt="User picture"
                    />
                  </div>

                  <div className="single_advisor_details_info">
                    <h6>{user.username}</h6>
                    <p className="designation">{user.fullName}</p>



                    {user.hideFollowers ? 
                    
                    (
                      <p className="designation"><i class="fas fa-lock"></i> followers</p>
                    ) : 
                    
                    (
                      <p className="designation">{user.followersCount} followers</p>
                    )}

                    {user.hideFollowing ? 
                    
                    (
                      <p className="designation"><i class="fas fa-lock"></i> following</p>
                    ) : 
                    
                    (
                      <p className="designation">{user.followingCount} following</p>
                    )}

                  </div>
                

                </Link>
                
              </div>
            </div>

    );
}

export default UserCard;