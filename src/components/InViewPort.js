import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";
import Swiper from "react-native-web-swiper";
import Video from "react-native-video";
import LightVideo from "./vid3.mp4";
import LightVid from "./vid4.mp4";
import LightVide from "./vid5.mp4";
import LightVi from "./vid6.mp4";
s;
import ProgressBar from "react-native-progress/Bar";
import Header from "./header";

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide: {
        backgroundColor: "black"
    },
    controls: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 48,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 18
    },
    mainButton: {
        marginRight: 15
    },
    duration: {
        color: "#FFF",
        marginLeft: 15
    }
});

class Samplecon extends React.Component {
    constructor(props) {
        super(props);
        this.handleVideoClick = this.handleVideoClick.bind(this);
        this.state = {
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
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText={"My App"} />
                <Swiper
                    direction="column"
                    onIndexChanged={this.handleVideoClick}
                >
                    {this.state.videoData.map(data => {
                        return (
                            <View style={[styles.slideContainer, styles.slide]}>
                                <Video
                                    paused={data.isPaused}
                                    source={data.source}
                                    style={StyleSheet.absoluteFill}
                                    controls={true}
                                    ref={ref => (this.player = ref)}
                                />
                            </View>
                        );
                    })}
                </Swiper>
            </View>
        );
    }
}

export default Samplecon;
