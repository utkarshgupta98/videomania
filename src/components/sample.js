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
import LightVideo from "./fb.mp4";
import LightVid from "./vid1.mp4";
import LightVide from "./vid2.mp4";
import ProgressBar from "react-native-progress/Bar";

const ARTICLES = [
    { id: "1", uri: require("./fb.mp4") },
    { id: "2", uri: require(".//vid1.mp4") },
    { id: "3", uri: require("./vid2.mp4") }
];

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

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    state = {
        paused: false,
        progress: 0,
        duration: 0
    };

    handleMainButtonTouch = () => {
        if (this.state.progress >= 1) {
            this.player.seek(0);
        }

        this.setState(state => {
            return {
                paused: !state.paused
            };
        });
    };

    handleProgressPress = e => {
        const position = e.nativeEvent.locationX;
        const progress = (position / 250) * this.state.duration;
        const isPlaying = !this.state.paused;

        this.player.seek(progress);
    };

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration
        });
    };

    handleEnd = () => {
        this.setState({ paused: true });
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration
        });
    };

    renderArticles = () => {
        return ARTICLES.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
            }
            if (i == this.state.currentIndex) {
                const { width } = Dimensions.get("window");
                const height = width * 0.5625;
                return (
                    <View style={styles.container}>
                        <Swiper direction="column">
                            <View style={[styles.slideContainer, styles.slide]}>
                                <Video
                                    source={ARTICLES[i].uri}
                                    paused={this.state.paused}
                                    style={StyleSheet.absoluteFill}
                                    onLoad={this.handleLoad}
                                    onProgress={this.handleProgress}
                                    onEnd={this.handleEnd}
                                    ref={ref => (this.player = ref)}
                                />

                                <View style={styles.controls}>
                                    <TouchableWithoutFeedback
                                        onPress={this.handleMainButtonTouch}
                                    >
                                        <Icon
                                            name={
                                                !this.state.paused
                                                    ? "pause"
                                                    : "play"
                                            }
                                            size={30}
                                            color="#FFF"
                                        />
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback
                                        onPress={this.handleProgressPress}
                                    >
                                        <View>
                                            <ProgressBar
                                                progress={this.state.progress}
                                                color="#FFF"
                                                unfilledColor="rgba(255,255,255,.5)"
                                                borderColor="#FFF"
                                                width={250}
                                                height={20}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <Text style={styles.duration}>
                                        {secondsToTime(
                                            Math.floor(
                                                this.state.progress *
                                                    this.state.duration
                                            )
                                        )}
                                    </Text>
                                </View>
                            </View>
                        </Swiper>
                    </View>
                );
            }
        });
    };

    render() {
        return <View style={{ flex: 1 }}>{this.renderArticles()}</View>;
    }
}
