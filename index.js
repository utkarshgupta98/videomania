import React from 'react';
import {AppRegistry,Text,View} from 'react-native';
import Sampleedit from './src/components/Sampleedit';
import HomeButton from './src/components/HomeButton';
import Profile from './src/components/Profile';
import Likes from './src/components/Likes';
import Search from './src/components/Search';
import ShowCamera from './src/components/ShowCamera';




const App = () => {
    return(
        <ShowCamera />
        )
};

AppRegistry.registerComponent('albums'  , () => App);
