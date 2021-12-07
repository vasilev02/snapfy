const ImageCard = (props) => {

    return(
      <div className="img-box">
      <img src={props.imageUrl} alt="User photo" />
      {/* <div className="transparent-box">
        <div className="caption">
          <button type="button" class="btn btn-danger">2 <i class="far fa-heart"></i></button>
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div> */}
    </div>

    );
}

export default ImageCard;