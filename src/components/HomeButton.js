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

export default class HomeButton extends React.Component {
    render() {
        return (
            <View style={styles.iconRow}>
                <Image
                    source={require("./images/new/home.png")}
                    style={styles.homeIcon}
                />
                <Text style={styles.titleshow}>{"Home"}</Text>
            </View>
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
        width: 20,
        height: 20
    },

    titleshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 3
    }
});
