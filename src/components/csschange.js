import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import ShareButton from "./ShareButton";

const w = Dimensions.get("window");

export default class LikeButton extends React.Component {
    state = {
        liked: false,
        count: 0
    };

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked,
            count: !this.state.liked
                ? this.state.count + 1
                : this.state.count - 1
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconRow}>
                    <TouchableOpacity
                        onPress={this.toggleLike}
                        style={styles.iconBackground}
                    >
                        <Image
                            source={
                                this.state.liked
                                    ? require("./images/heart.png")
                                    : require("./images/heart-outline3x.png")
                            }
                            style={styles.heartIcon}
                        />

                        {/*<Text style={styles.countshow}>{this.state.count}</Text>*/}
                    </TouchableOpacity>
                </View>
                <ShareButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 180,
        alignSelf: "flex-start"
    },
    iconRow: {
        alignSelf: "flex-end",
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    countshow: {
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 8
    },
    heartIcon: {
        width: 25,
        height: 25,
        tintColor: "#f00000"
    },
    iconBackground: {
        backgroundColor: "yellow",
        height: 45,
        width: 45,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
});
