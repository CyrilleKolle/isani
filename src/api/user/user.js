import Firebase from "../api";

export const checkUser = () => {
  return new Promise((resolve, reject) => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        resolve("success");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          resolve("inuse");

          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          resolve("invalid");

          console.log("That email address is invalid!");
        }
        resolve("error");

        console.error(error);
      });
  });
};

export const signOut = () => {
  Firebase.auth()
    .signOut()
    .then(() => console.log("User signed out!"));
};

export const signUp = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        resolve("success");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          resolve("inuse");

          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          resolve("invalid");

          console.log("That email address is invalid!");
        }
        resolve("error");

        console.error(error);
      });
  });
};
