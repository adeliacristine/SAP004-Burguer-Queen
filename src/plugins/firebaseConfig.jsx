import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp ({
	apiKey: "AIzaSyAEVuIeshV88Ty07S9I-mVc0bMLHIsvH7E",
	authDomain: "burger-queen-9aed0.firebaseapp.com",
	databaseURL: "https://burger-queen-9aed0.firebaseio.com",
	projectId: "burger-queen-9aed0",
	storageBucket: "burger-queen-9aed0.appspot.com",
	messagingSenderId: "332667717951",
	appId: "1:332667717951:web:a3dfa1b0fe5e57beebeb8a",
	measurementId: "G-J8QWT5MGZ0"
});

let firebaseApp  = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseFirestore   = firebaseApp.firestore()

export { firebaseAuth, firebaseFirestore }
