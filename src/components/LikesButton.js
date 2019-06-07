import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import Sampleedit from "./Sampleedit";

export default class LikesButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.iconRow} onPress={this.props.onPressHandler}>
                <Image
                    source={require("./images/new/likes.png")}
                    style={styles.homeIcon}
                />
                <Text style={styles.titleshow}>Likes</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    iconRow: {
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    homeIcon: {
        width: 18,
        height: 16
    },
    titleshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 3
    }
});
