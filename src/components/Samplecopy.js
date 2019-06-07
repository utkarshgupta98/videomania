import React, { Component } from "react";
import {
    Alert,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import Swiper from "react-native-web-swiper";
import Video from "react-native-video";
import LightVideo from "./vid3.mp4";
import LightVid from "./vid4.mp4";
import LightVide from "./vid5.mp4";
import LightVi from "./vid6.mp4";
import ProgressBar from "react-native-progress/Bar";
import Header from "./header";
import Button from "./Button";
import firebase from "firebase";
import LoginForm from "./LoginForm";
import LikeButton from "./LikeButton";
import HomeButton from "./HomeButton";
import ShareButton from "./ShareButton";
import Comment from "./Comment";
import Add from "./Add";
import ProfileButton from "./ProfileButton";
import ThumbsButton from "./ThumbsButton";
import Comm from "./Comm";

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        position: "relative"
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 40
    },
    slide: {
        backgroundColor: "black"
    },
    mainButton: {
        marginRight: 15
    },
    duration: {
        color: "#FFF",
        marginLeft: 15
    },
    footer: {
        width: "100%",
        height: 60,
        backgroundColor: "rgba(255,255,255,0.7)",
        flexDirection: "row",
        alignItems: "center"
    },

    leftalign: {
        width: 60,
        backgroundColor: "rgba(255,255,255,0)",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 50,
        paddingLeft: 15
    }
});

class Sampleedit extends React.Component {
    showAlert = () => {
        Alert.alert("Last page");
    };

    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAJOWqzpRvsQS4V3urptMYWhnv_TtF6LWY",
            authDomain: "authentication-464cd.firebaseapp.com",
            databaseURL: "https://authentication-464cd.firebaseio.com",
            projectId: "authentication-464cd",
            storageBucket: "authentication-464cd.appspot.com",
            messagingSenderId: "361342485667",
            appId: "1:361342485667:web:abe4f46330076ed3"
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    constructor(props) {
        super(props);
        this.handleVideoClick = this.handleVideoClick.bind(this);
        this.state = {
            renderContent: true,
            videoData: [
                {
                    isPaused: false,
                    source: LightVideo
                },
                {
                    isPaused: true,
                    source: LightVid
                },
                {
                    isPaused: true,
                    source: LightVide
                },
                {
                    isPaused: true,
                    source: LightVi
                }
            ]
        };
    }

    handleVideoClick(newIndex) {
        let newin = newIndex;

        const videoData = this.state.videoData.slice(0);

        for (var i = 0; i < this.state.videoData.length; i++) {
            videoData[i].isPaused = i != newin;
        }
        this.setState({ videoData });

        if (newin > 2) {
            this.showAlert();
        }
    }
    refreshScreen = () => {
        this.setState(
            {
                renderContent: false
            },
            () => {
                this.setState({ renderContent: true });
            }
        );
    };
    render() {
        if (this.state.loggedIn && this.state.renderContent) {
            return (
                <View style={styles.container}>
                    <Button
                        onPress={() => firebase.auth().signOut()}
                        btnText="Logout"
                    />
                    <Swiper
                        direction="column"
                        onIndexChanged={this.handleVideoClick}
                        actionMinWidth="0.05"
                    >
                        {this.state.videoData.map(data => {
                            return (
                                <View
                                    style={[
                                        styles.slideContainer,
                                        styles.slide
                                    ]}
                                >
                                    <Video
                                        paused={data.isPaused}
                                        source={data.source}
                                        style={StyleSheet.absoluteFill}
                                        controls={true}
                                        ref={ref => (this.player = ref)}
                                    />
                                    <View style={styles.leftalign}>
                                        <LikeButton />
                                        <ThumbsButton />
                                        <Comm />
                                        <ShareButton />
                                    </View>
                                </View>
                            );
                        })}
                    </Swiper>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={this.refreshScreen}>
                            <HomeButton />
                        </TouchableOpacity>
                        <Add />
                        <ProfileButton />
                    </View>
                </View>
            );
        }
        return <LoginForm />;
    }
}

export default Sampleedit;
