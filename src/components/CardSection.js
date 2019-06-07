import React from "react";
import { Text, View } from "react-native";

const Cardsection = props => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
            <Text style={styles.breakit} />
        </View>
    );
};

const styles = {
    contatinerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#ddd",
        position: "relative"
    },

    breakit: {
        lineHeight: 40
    }
};

export default Cardsection;
