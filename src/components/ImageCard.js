const ImageCard = ({imageUrl, checkMyProfile, onDelete}) => {

    return(
      <div className="img-box">
      <img src={imageUrl} alt="User photo" />
      <div className="transparent-box">
        <div className="caption">

{checkMyProfile ? 

(
  <button onClick={() => onDelete(imageUrl)} type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>

)
:
(
  <button  type="button" class="btn btn-danger"><i class="far fa-heart"></i></button>
)
}

        </div>
      </div>
    </div>

    );
}

export default ImageCard;