const ImageCard = (props) => {

    return(
      <div className="img-box">
      <img src={props.imageUrl} alt="User photo" />
      <div className="transparent-box">
        <div className="caption">
          <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>

    );
}

export default ImageCard;