import config from "./config";
import * as firebase from "firebase";

const Firebase = firebase.initializeApp(config);

export default Firebase;
