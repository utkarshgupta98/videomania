import React, { Component } from 'react';
import { CameraRoll, View, TouchableOpacity, TouchableWithoutFeedback, Text, Alert, ToastAndroid, PermissionsAndroid, Modal, Image, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const initialState = {
    isRecording: false
}

const Cameratest = ({ initialProps, onStopRecording}) => {
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

const recordOptions = {
  maxDuration: 1,
};

const recordOptionstwo = {
  maxDuration: 7,
};

    onVideoBtnPress  = async function() {
        try {
                setIsRecording(true);
                const data = await recordVideo(recordOptions)
                  if (data.isRecordingInterrupted) {
                      setIsRecording(false);
                  } else {
                      videoData = data;
                      console.log('videoData: ',videoData);
                      onsecondVideoBtnPress();
                  }
                console.warn('3:',data);
              } catch (error) {
                  console.log('error1: ',error);
                  console.warn(error);
              }
          };

     onsecondVideoBtnPress  = async function() {
            try {
                    setIsRecording(true);
                    const data = await recordVideo(recordOptionstwo)
                      if (data.isRecordingInterrupted) {
                          setIsRecording(false);
                      } else {
                          videoData = data;
                          console.log('videoData: ',videoData);
                      }
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
                 style={{ width: '100%', height: 65, backgroundColor: '#f00000' }}
               />
             )}

      {!isRecording && (
        <TouchableOpacity
          onPress={onVideoBtnPress}
          style={{ width: '100%', height: 45, backgroundColor: 'green' }}
        />
      )}
        <TouchableOpacity onPress={onStopRecording} style={{ width: "100%", height: 40, backgroundColor: "orange"}}>
            <View style={{alignItems: "center"}} >
                <Image
                    source={require("./images/back.png")}
                    style={styles.backIcon}
                />
            </View>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    backIcon: {
        width: 30,
        height: 30,
    }
})

export default Cameratest;