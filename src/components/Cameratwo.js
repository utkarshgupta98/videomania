import React, { Component } from 'react';
import { CameraRoll, View, TouchableOpacity, TouchableWithoutFeedback, Text, ToastAndroid, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const Cameratwo = ({ initialProps }) => {
  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
    {
      toggleFacing,
      touchToFocus,
      textRecognized,
      facesDetected,
      recordVideo,
      setIsRecording,
      stopRecording
    },
  ] = useCamera(initialProps);
let videoData;
    onVideoBtnPress  = async function() {
        let data;
        try {
          setIsRecording(true);
          data = await recordVideo().then(async (data) => {
            if (data.isRecordingInterrupted) {
                setIsRecording(false);
            } else {
                videoData = data;
                onVideoBtnPress();
            }
          });
          console.log('2:',data);
          console.warn('3:',data);
        } catch (error) {
            console.log('error1: ',error);
          console.warn(error);
        }
    };

    onVideoStop  = async function() {
      const storagePermGranted = await requestExternalStoragePermission();
      if (storagePermGranted) {
          CameraRoll.saveToCameraRoll(videoData.uri);
          setIsRecording(false);
      } else {
          ToastAndroid.show("Cannot save, perm not granted", ToastAndroid.LONG);
          setIsRecording(true);
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

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        type={type}
        ratio={ratio}
        style={{ flex: 1 }}

      />
       {isRecording && (
               <TouchableOpacity
                 onPress={onVideoStop}
                 style={{ width: '100%', height: 45, backgroundColor: '#f00000' }}
               />
             )}

      {!isRecording && (
        <TouchableOpacity
          onPress={onVideoBtnPress}
          style={{ width: '100%', height: 45, backgroundColor: 'green' }}
        />
      )}
    </View>
  );
};

export default Cameratwo;