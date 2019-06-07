import React from "react";
import Swiper from "react-native-web-swiper";
import Video from "react-native-video";
import LightVideo from "./vid3.mp4";
import LightVid from "./vid4.mp4";
import LightVide from "./vid5.mp4";
import ProgressBar from "react-native-progress/Bar";
import Header from "./header";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    withNavigationFocus
} from "react-native";

import ScrollableTabView, {
    ScrollableTabBar,
    DefaultTabBar
} from "react-native-scrollable-tab-view";

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

export default class Scrolltab extends React.Component {
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
                }
            ]
        };
    }

    handleVideoClick(event) {
        const oldIndex = event.from;
        const newIndex = event.i;
        const videoData = this.state.videoData.slice(0);
        videoData[oldIndex].isPaused = true;
        videoData[newIndex].isPaused = false;

        this.setState({ videoData });
    }

    render() {
        return (
            <ScrollableTabView
                horizontal={true}
                renderTabBar={() => <DefaultTabBar />}
                //ref={(tabView) => { this.tabView = tabView; }}
                onChangeTab={this.handleVideoClick}
            >
                {this.state.videoData.map((data, index) => {
                    return (
                        <Video
                            paused={data.isPaused}
                            source={data.source}
                            style={StyleSheet.absoluteFill}
                            controls={true}
                            ref={ref => (this.player = ref)}
                            key={index}
                        />
                    );
                })}
            </ScrollableTabView>
        );
    }
}
