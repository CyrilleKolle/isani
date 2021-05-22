import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import Toast from "react-native-root-toast";

export default function NetInformation() {
  const netInfo = useNetInfo();

  return (
    <>
      <Toast
        duration={Toast.durations.LONG}
        position={Toast.positions.CENTER}
        shadow={true}
        animation={true}
        delay={2}
        visible={!netInfo.isConnected}
      >
        Oops! Connection failed
        {console.log(netInfo.isConnected)}
      </Toast>
    </>
  );
}
