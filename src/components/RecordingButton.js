import React, { PureComponent } from 'react';
import { CameraRoll, AppRegistry, StyleSheet, Text, TouchableOpacity, View, Modal,Platform, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

export const dirHome = Platform.select({
  ios: `${RNFS.DocumentDirectoryPath}/myAppName`,
  android: `${RNFS.ExternalStorageDirectoryPath}/myAppName`
});

export const dirPicutures = `/Pictures`;
export const dirAudio = `${dirHome}/Audio`;

export default class ShowCamera extends PureComponent {

requestExternalStoragePermission = async () => {
   try {
     const granted = await PermissionsAndroid.request(
       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
       {
         title: 'My App Storage Permission',
         message: 'My App needs access to your storage ' +
           'so you can save your photos',
       },
     );
     return granted;
   } catch (err) {
     console.error('Failed to request permission ', err);
     return null;
   }
 };
  render() {
    return (
    <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isVisible}
            onRequestClose={() => this.props.onBackPress()}
    >
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
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    );
  }

   takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5 };
        const data = await this.camera.takePictureAsync(options).then(async (data) => {
          ToastAndroid.show(data.uri, ToastAndroid.LONG);
          const storagePermGranted = await this.requestExternalStoragePermission();
          if (storagePermGranted) {
            CameraRoll.saveToCameraRoll(data.uri);
          } else {
            ToastAndroid.show("Cannot save, perm not granted", ToastAndroid.LONG);
          }
          console.log(data);
        });
        console.log(data);
        this.setState({uri: "file:///data//3771be91-28f5-499a-ad3e-b04ea0183f1f.jpg" })
      }
    };
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

