import firebase from "../firebase";

export function getAll(){

    const ref = firebase.firestore().collection("users");

    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return items;
      });

}