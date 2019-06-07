import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Button from './src/components/Button';
import Samplecon from './src/components/Samplecon';


class Newindex extends React.Component {

    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAJOWqzpRvsQS4V3urptMYWhnv_TtF6LWY',
            authDomain: 'authentication-464cd.firebaseapp.com',
            databaseURL: 'https://authentication-464cd.firebaseio.com',
            projectId: 'authentication-464cd',
            storageBucket: 'authentication-464cd.appspot.com',
            messagingSenderId: '361342485667',
            appId: '1:361342485667:web:abe4f46330076ed3'
            });

            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    this.setState({ loggedIn: true })
                } else{
                    this.setState({loggedIn: false})
                }
            });
        }

    render() {
        if(this.state.loggedIn){
                    return(
                        <Button onPress={() => firebase.auth().signOut()} btnText="Logout" />
                    );
                }

                return <LoginForm />;
    }
}

export default Newindex;