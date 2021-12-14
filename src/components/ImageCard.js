import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const ImageCard = ({
  userId,
  accessedUserId,
  imageUrl,
  counter,
  checkMyProfile,
  onDelete,
}) => {

  const [isLoved, setIsLoved] = useState(false);
  const [imageCounter, setImageCounter] = useState(counter);

  useEffect(() => {
      firebase
      .firestore()
      .collection("users")
      .doc(accessedUserId)
      .get()
      .then(function (doc) {
        let photos = doc.data().photos;

        photos.map((p) => {
          if(p.imageUrl === imageUrl){
            let ids = p.ids;
            ids.map((x) => {
              if (x === userId) {
                setIsLoved(true);
                setImageCounter(p.counter);
              }
            });
          }
          
        });
      });
    
  }, []);

  const lovePhoto = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(accessedUserId)
      .get()
      .then(function (doc) {
        let photos = doc.data().photos;

        photos.map((p) => {
          if(p.imageUrl === imageUrl){
            let ids = p.ids;
            p.counter += 1;
            ids.push(userId);

            firebase.firestore().collection("users").doc(accessedUserId).update({
              photos: photos,
            });
            setIsLoved(true);
            setImageCounter(imageCounter + 1);
          }
        });
      });
  };

  const unlovePhoto = () => {
    firebase
    .firestore()
    .collection("users")
    .doc(accessedUserId)
    .get()
    .then(function (doc) {
      let photos = doc.data().photos;

      photos.map((p) => {
        if(p.imageUrl === imageUrl){
          let ids = p.ids;
          p.counter -= 1;
          p.ids = ids.filter(x => x !== userId);
          firebase.firestore().collection("users").doc(accessedUserId).update({
            photos: photos,
          });
          setIsLoved(false);
          setImageCounter(imageCounter -1);
        }
      });
    });
  };

  return (
    <div className="img-box">
      <img src={imageUrl} alt="User photo" />
      <div className="transparent-box">
        <div className="caption">
          {checkMyProfile ? (
            
            <button
              onClick={() => onDelete(imageUrl)}
              type="button"
              className="btn btn-danger"
            >
              {imageCounter} - <i className="fas fa-trash-alt"></i>
            </button>

          ) : (
            <>
            {isLoved ? 
            (
              <button onClick={unlovePhoto}type="button" className="btn btn-danger">
                {imageCounter} <i className="fas fa-heart"></i>
              </button>
            ) : 
            (
              <button
                onClick={lovePhoto}
                type="button"
                className="btn btn-danger"
              >
                {imageCounter} <i className="far fa-heart"></i>
              </button>
            )
          }
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ImageCard;
