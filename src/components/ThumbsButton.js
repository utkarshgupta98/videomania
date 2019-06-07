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
import Comment from "./Comment";
const likedIcon = require("./images/new/palmlike.png");

const w = Dimensions.get("window");

export default class ThumbsButton extends React.Component {
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
        const imageStyles = [styles.heartIcon];
                if (this.state.liked) {
                    imageStyles.push(styles.changeIcon);
                }
                return (
                    <TouchableOpacity style={styles.iconRow} onPress={this.toggleLike}>
                        <Image
                            source={likedIcon}
                            style={imageStyles}
                        />
                        <Text style={styles.countshow}>{"4K"}</Text>
                    </TouchableOpacity>
                );
    }
}

const styles = StyleSheet.create({
    iconRow: {
        alignItems: "center",
        marginVertical: 7
    },
    countshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center"
    },
    heartIcon: {
        width: 30,
        height: 30
    },
    changeIcon: {
        tintColor: "#EC910A"
        }
});
