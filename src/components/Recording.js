import React, { Component } from 'react';
import { CameraRoll, View, TouchableOpacity, TouchableWithoutFeedback, Text, ToastAndroid, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';


class Recording extends React.Component{
    state = {
        recordOptions: {
          mute: false,
          maxDuration: 5,
          quality: RNCamera.Constants.VideoQuality['288p'],
        },
        ratio: '16:9',
        isRecording: false,
      };

        takeVideo = async () => {
            if (this.camera) {
                  try {
                    const promise = this.camera.recordAsync(this.state.recordOptions);
                    if (promise) {
                      this.setState({ isRecording: true });
                      const data = await promise;
                      }
                      else{
                      this.setState({ isRecording: false });
                      console.warn('takeVideo', data);
                    }
                  } catch (e) {
                    console.error(e);
                  }
                }
        };

        onVideoStop  = async () => {
          const storagePermGranted = await requestExternalStoragePermission();
          if (storagePermGranted) {
              CameraRoll.saveToCameraRoll(data.uri);
              this.setState({ isRecording: false });
          } else {
              ToastAndroid.show("Cannot save, perm not granted", ToastAndroid.LONG);
          }
        };

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

      render(){
          return (
            <View style={{ flex: 1 }}>
              <RNCamera
                ref={ref => {
                          this.camera = ref;
                }}
                ratio={this.state.ratio}
                style={{ flex: 1 }}

              />
               {this.state.isRecording && (
                       <TouchableOpacity
                         onPress={this.onVideoStop}
                         style={{ width: '100%', height: 45, backgroundColor: '#f00000' }}
                       />
                     )}

              {!this.state.isRecording && (
                <TouchableOpacity
                  onPress={this.takeVideo}
                  style={{ width: '100%', height: 45, backgroundColor: 'green' }}
                />
              )}
            </View>
          )
      };
};

export default Recording;