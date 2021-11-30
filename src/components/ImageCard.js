

const ImageCard = ({
    url
}) => {

    return(

        <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  {" "}
                  <img
                    src={url}
                    alt="User photo"
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

    );
}

export default ImageCard;