import React, { useEffect, useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import Toast from "react-native-root-toast";

export default function NetInformation() {
  const [isConnected, setIsConnected] = useState(true);
  const netInfo = useNetInfo();

  // useEffect(() => {
  //   let isMounted = true;
  //   const interval = setInterval(() => {
  //     setIsConnected(netInfo.isConnected);
  //   }, 10);
  //   return () => {
  //     clearInterval(interval);
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsConnected(netInfo.isConnected);
    }, 100);
  }, []);
  return (
    <>
      <Toast
        duration={Toast.durations.LONG}
        position={Toast.positions.CENTER}
        shadow={true}
        animation={true}
        delay={2}
        visible={isConnected === false}
      >
        Oops! Connection failed
      </Toast>
    </>
  );
}
