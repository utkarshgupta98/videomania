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

export default class Addprofile extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Image
                    source={require("./images/new/photo.png")}
                    style={styles.homeIcon}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    iconRow: {
        alignItems: "center",
        marginVertical: 7
    },
    homeIcon: {
        width: 32,
        height: 32
    }
});
