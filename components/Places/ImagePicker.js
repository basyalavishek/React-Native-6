import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Alert, Button, View } from "react-native";

const ImagePicker = () => {
  const [cameraPermissioiinInformation, requestPermission] = useCameraPermissions();
  //cameraPermissionInformation: the current permission state
  //requestPermission: a function to request permission from the user

  async function verifyPermissions() {
    if (
      cameraPermissioiinInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissioiinInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Permission not allowed", "You need to allow camera access");
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;
