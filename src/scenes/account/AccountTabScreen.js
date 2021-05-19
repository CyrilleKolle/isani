import React, { useEffect, useState } from "react";
import { checkUser } from "../../api/user/user";
import AuthNavigation from "../../navigation/bottom-navigation/auth-navigation";
import SettingsNavigator from "../../navigation/bottom-navigation/settings-navigation";

export default function AccountTabScreen({ navigation }) {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(true);

  const userAuthentication = async () => {
    const signedIn = await checkUser();
    if (!signedIn) {
      setUserIsAuthenticated(false);
    }
    console.log(signedIn);
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <>{!userIsAuthenticated ? <AuthNavigation /> : <SettingsNavigator />}</>
  );
}
