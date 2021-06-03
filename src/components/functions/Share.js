import React from "react";
import { Share, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ShareContent(message) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: { message },
        url: "www.isani.com",
        title: "isani app",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 15 }}>
      <Feather name="share-2" onPress={onShare} size={24} />
    </View>
  );
}
