import React from "react";
import { Text, ScrollView, View, Image, Linking } from "react-native";

const Videocard = () => {
    return (
        <ScrollView>
            <View style={styles.containerStyle}>
                <Text>some text</Text>
            </View>
        </ScrollView>
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
    }
};

export default Videocard;
