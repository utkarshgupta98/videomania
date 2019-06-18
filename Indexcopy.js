import React, {Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';
import Sampleedit from './src/components/Sampleedit';
import HomeButton from './src/components/HomeButton';
import ShareButton from './src/components/ShareButton';
import Profile from './src/components/Profile';
import Likes from './src/components/Likes';
import Search from './src/components/Search';
import ShowCamera from './src/components/ShowCamera';
import Cameratest from './src/components/Cameratest';
import Recording from './src/components/Recording';
import ColorBoxes from './src/components/ColorBoxes';





class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecordingVisible: false
        }
    }

    StartRecording = () => {
        this.setState({
            isRecordingVisible: true
        });
    }

    StopRecording = () => {
         this.setState({
            isRecordingVisible: false
        });
    }

    render(){
        if(this.state.isRecordingVisible)
        {
            return(
                <ShowCamera onStopRecording={this.StopRecording}/>
            )
        }
        else
        {
            return(
                <Sampleedit onStartRecording={this.StartRecording} />
            )
        }
    }
};

AppRegistry.registerComponent('albums'  ,() =>App);
