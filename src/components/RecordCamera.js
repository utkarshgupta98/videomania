import React, { PureComponent } from 'react';
import { CameraRoll, AppRegistry, StyleSheet, Text, TouchableOpacity, View, Modal, Platform, ToastAndroid, PermissionsAndroid } from 'react-native';
import { RNCamera, Camera } from 'react-native-camera';
import RNFS from 'react-native-fs';

export default class ShowCamera extends PureComponent {
    await Permissions.askAsync(Permissions.CAMERA);

    cameraType: Camera.Constants.Type.back,
    toggleCameraType: state => () => ({
          cameraType: state.cameraType === Camera.Constants.Type.front
            ? Camera.Constants.Type.back
            : Camera.Constants.Type.front,
        }),

     isCameraReady: false,

     setCameraReady: () => () => ({ isCameraReady: true }),

     cameraRef: null,

     setCameraRef: () => cameraRef => ({ cameraRef }),

  render() {

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
             this.camera = ref;
           }}
           style={styles.preview}
           type={RNCamera.Constants.Type.back}
           flashMode={RNCamera.Constants.FlashMode.on}
           androidCameraPermissionOptions={{
             title: 'Permission to use camera',
             message: 'We need your permission to use your camera',
             buttonPositive: 'Ok',
             buttonNegative: 'Cancel',
           }}
           androidRecordAudioPermissionOptions={{
             title: 'Permission to use audio recording',
             message: 'We need your permission to use your audio',
             buttonPositive: 'Ok',
             buttonNegative: 'Cancel',
           }}
           onGoogleVisionBarcodesDetected={({ barcodes }) => {
             console.log(barcodes);
           }}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          {button}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});