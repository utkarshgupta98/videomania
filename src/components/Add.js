import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";

export default class Add extends React.Component {
    render() {
        return (
            <View style={styles.iconRow}>
                <Image
                    source={require("./images/new/add.png")}
                    style={styles.homeIcon}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconRow: {
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#E64A19",
        width: 56,
        height: 38,
        justifyContent: "center",
        borderRadius: 8
    },
    homeIcon: {
        width: 14,
        height: 14
    },

    titleshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 3
    }
});
