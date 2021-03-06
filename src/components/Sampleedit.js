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
import LightVideo from "./video1.mp4";
import LightVid from "./video2.mp4";
import LightVide from "./vid5.mp4";
import LightVi from "./vid6.mp4";
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
import Addprofile from "./Addprofile";
import SearchButton from "./SearchButton";
import LikesButton from "./LikesButton";
import Profile from "./Profile";
import Likes from "./Likes";
import Search from "./Search";
import ShowCamera from "./ShowCamera"


class Sampleedit extends React.Component {

    constructor(props) {
            super(props);
            this.handleVideoClick = this.handleVideoClick.bind(this);
            this.state = {
                renderContent: true,
                isProfileOverlayVisible: false,
                isLikesOverlayVisible: false,
                isSearchOverlayVisible: false,
                isCameraOverlayVisible: false,
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
                    },

                ]
            };
        }

    showProfileOverlay = () => {
        this.setState({
            isProfileOverlayVisible: true
        });
        this.handleVideoPause();
    }

    hideProfileOverlay = () => {
        this.setState({
            isProfileOverlayVisible: false
        });
        this.handleVideoPlay();
    }

    showLikesOverlay = () => {
            this.setState({
                isLikesOverlayVisible: true
            });
            this.handleVideoPause();
        }

    hideLikesOverlay = () => {
        this.setState({
            isLikesOverlayVisible: false
        });
        this.handleVideoPlay();
    }

    showSearchOverlay = () => {
                this.setState({
                    isSearchOverlayVisible: true
                });
                this.handleVideoPause();
            }

    hideSearchOverlay = () => {
            this.setState({
                isSearchOverlayVisible: false
            });
            this.handleVideoPlay();
        }

    showCameraOverlay = () => {
                    this.props.onStartRecording();
                    this.handleVideoPause();
                }


    handleVideoClick(newIndex) {
        let newin = newIndex;

        const videoData = this.state.videoData.slice(0);

        for (var i = 0; i < this.state.videoData.length; i++) {
            videoData[i].isPaused = i != newin;
        }
        this.setState({ videoData });
        }

    handleVideoPause()
    {
        const videoData = this.state.videoData.slice(0);
        for (var i = 0; i < this.state.videoData.length; i++) {
            if (videoData[i].isPaused === false) {
                videoData[i].isPaused = true;
                this._previouslyPlayingVideoIndex = i;
            }
        }
        this.setState({ videoData });
    }

    handleVideoPlay()
        {
            const videoData = this.state.videoData.slice(0);
            videoData[this._previouslyPlayingVideoIndex].isPaused = false;
            this.setState({ videoData });
        }

    render() {
            return (
                <View style={styles.container}>
                    <View style={{flex: 1}}>
                        <Swiper
                            direction="column"
                            onIndexChanged={this.handleVideoClick}
                            actionMinWidth="0.05"
                            dotStyle={{ display: "none" }}
                            activeDotStyle={{ display: "none" }}
                            prevButtonText=""
                            nextButtonText=""
                            containerStyle={{backgroundColor: '#ffffff', flex: 1}}
                        >
                            {this.state.videoData.map(data => {
                                return (
                                    <View
                                        style={[
                                            styles.slideContainer,

                                        ]}
                                        key={data.source}
                                    >
                                        <Video
                                            paused={data.isPaused}
                                            source={data.source}
                                            style={styles.videostyle}
                                            resizeMode="cover"
                                            ref={ref => (this.player = ref)}

                                        />
                                        <View style={styles.Titleview}>
                                            <Text style={styles.Boldtext}>{"ELLE@ME 1995"}</Text>
                                            <Text style={styles.Titletext}>{"He is like excuse me i ain't moving nowhere"}</Text>
                                            <Text style={styles.Titletext}>{"#travel #aroundtheworld"}</Text>
                                            <Text style={styles.Sounttext}>{"sound track playing..."}</Text>
                                        </View>
                                        <View style={styles.leftalign}>
                                            <Addprofile />
                                            <LikeButton />
                                            <ThumbsButton />
                                            <Comm />
                                            <ShareButton />
                                        </View>
                                    </View>
                                );
                            })}
                        </Swiper>
                    </View>
                    <View style={styles.footer}>

                        <HomeButton />
                        <SearchButton onPressHandler={this.showSearchOverlay} />
                        <Add onPressHandler={this.showCameraOverlay} />
                        <LikesButton onPressHandler={this.showLikesOverlay}/>
                        <ProfileButton onPressHandler={this.showProfileOverlay}/>

                    </View>
                    <Search onBackPress={this.hideSearchOverlay} isVisible={this.state.isSearchOverlayVisible} />
                    <Profile onBackPress={this.hideProfileOverlay} isVisible={this.state.isProfileOverlayVisible} />
                    <Likes onBackPress={this.hideLikesOverlay} isVisible={this.state.isLikesOverlayVisible} />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        position: "relative"
    },
    Boldtext:{
        fontSize:12,
        color:"#FFFFFF",
        fontWeight: "bold"

    },

    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000000'
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
        height: 55,
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    Titletext:{
        fontSize:12,
        color:"#FFFFFF",
    },

    Sounttext:{
        fontSize:12,
        color:"rgba(255,255,255,0.6)",
        lineHeight: 30
    },

    Titleview: {
        width: "100%",
        position: "absolute",
        left: 20,
        bottom: 85,
    },

    leftalign: {
        width: 60,
        backgroundColor: "rgba(255,255,255,0)",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        right: 0,
        bottom: 55,
        paddingRight: 15
    },
    videostyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4a4a4a'
    }
});

export default Sampleedit;
