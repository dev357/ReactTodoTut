import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAuzl4AqPgnj0MDXX90olJ85_3Xrvees94",
    authDomain: "dev357-todo-app-615e1.firebaseapp.com",
    databaseURL: "https://dev357-todo-app-615e1.firebaseio.com",
    storageBucket: "dev357-todo-app-615e1.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
