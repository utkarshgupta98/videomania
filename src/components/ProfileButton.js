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

export default class ProfileButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.iconRow} onPress={this.props.onPressHandler}>
                <Image
                    source={require("./images/new/profile.png")}
                    style={styles.homeIcon}
                />
                <Text style={styles.titleshow}>Me</Text>
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
        height: 20
    },
    titleshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 3
    }
});
