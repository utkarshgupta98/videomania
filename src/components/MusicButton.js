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

export default class MusicButton extends React.Component {
    render() {
        return (
        <View style={styles.backview}>
            <TouchableOpacity style={styles.iconRow} onPress={this.props.onPress}>

                <Image
                    source={require("./images/new/music_noteup.png")}
                    style={styles.tuneIcon}
                />
                <View style={styles.leftnote}>
                    <Image
                        source={require("./images/new/music_noteleft.png")}
                        style={styles.tuneIcon}
                    />
                </View>
                <Image
                    source={require("./images/new/disc_full.png")}
                    style={styles.homeIcon}
                />
                <Text style={styles.titleshow}>Me</Text>
            </TouchableOpacity>
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
        height: 16
    },
    tuneIcon: {
    width: 12,
    height: 18
    },
    titleshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 3
    },

    backview: {
        backgroundColor: "black"
    },

    leftnote: {

    }
});
