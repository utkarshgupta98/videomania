import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ToastAndroid,
    AlertIOS,
    Platform,
    Image
} from "react-native";
import Share, { ShareSheet, Button } from "react-native-share";
import Card from "./Card";
import CardSection from "./CardSection";
import Header from "./header";

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    onCancel = () => {
        console.log("CANCEL");
        this.setState({ visible: false });
    };
    onOpen = () => {
        console.log("OPEN");
        this.setState({ visible: true });
    };
    render() {
        let shareOptions = {
            title: "React Native",
            message: "Videomania",
            url: "http://facebook.github.io/react-native/",
            subject: "Share Link"
        };

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onOpen}
                    style={styles.iconBackground}
                >
                    <Image
                        source={require("./images/comment2.png")}
                        style={styles.ShareIcon}
                    />
                </TouchableOpacity>

                <ShareSheet
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    style={styles.contain}
                >
                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                source={require("./images/celeb1.jpg")}
                                style={styles.Commenticon}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.Headstyle}>{"Mario"}</Text>
                            <Text style={styles.Textstyle}>
                                {"Sing from the bottom of your heart"}
                            </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                source={require("./images/celeb2.jpg")}
                                style={styles.Commenticon}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.Headstyle}>{"Dancer"}</Text>
                            <Text style={styles.Textstyle}>
                                {"Dance is like flowing water"}
                            </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                source={require("./images/celeb3.jpg")}
                                style={styles.Commenticon}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.Headstyle}>{"Nick"}</Text>
                            <Text style={styles.Textstyle}>
                                {"Acting is my passion"}
                            </Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                source={require("./images/celeb4.jpg")}
                                style={styles.Commenticon}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.Headstyle}>{"David"}</Text>
                            <Text style={styles.Textstyle}>
                                {"I love football"}
                            </Text>
                        </View>
                    </CardSection>
                </ShareSheet>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignSelf: "flex-start"
    },

    instructions: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginTop: 210,
        paddingVertical: 5,
        paddingHorizontal: 15,
        width: 410,
        height: 410
    },
    ShareIcon: {
        width: 40,
        height: 40
    },
    Textstyle: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    Headstyle: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        lineHeight: 40
    },
    Viewstyle: {
        justifyContent: "center",
        alignItems: "center"
    },
    iconBackground: {
        height: 45,
        width: 45,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    Commenticon: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    thumbnailContainerStyle: {
        justifyContent: "center",

        marginLeft: 10,
        marginRight: 10
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10
    },
    iconBackground: {
        backgroundColor: "#00FF00",
        height: 45,
        width: 45,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    contain: {
        width: 410,
        height: 410,
        marginBottom: -200,
        marginLeft: -60
    }
});
