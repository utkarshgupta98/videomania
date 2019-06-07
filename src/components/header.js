import React from "react";
import { Text, View } from "react-native";

const Header = props => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 15,
        backgroundColor: "orange",
        borderRadius: 2,
        borderStyle: "solid"
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold"
    }
};

export default Header;
