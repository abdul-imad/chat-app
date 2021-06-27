import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyCivCRgkoyWHbPGmYSYwNdGZKjCMk_rT6g",
		authDomain: "chat--app-2a1fa.firebaseapp.com",
		projectId: "chat--app-2a1fa",
		storageBucket: "chat--app-2a1fa.appspot.com",
		messagingSenderId: "556465501814",
		appId: "1:556465501814:web:9ffe31a88ec2f14ba49157",
	})
	.auth();
