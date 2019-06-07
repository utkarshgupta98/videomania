import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, btnText }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: "stretch",
        backgroundColor: "#007aff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
