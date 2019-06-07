import React, { Component } from "react";
import {
    Modal,
    Text,
    ScrollView,
    View,
    Alert,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Header from "./header";

export default class Comm extends React.Component {
    state = {
        modalVisible: false
    };

    openModal = () => {
        this.setState({ modalVisible: true });
    };

    closeModal = () => {
        this.setState({ modalVisible: false });
    };

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalWrapper}>
                        <TouchableOpacity
                            style={styles.crossIcon}
                            onPress={this.closeModal}
                        >
                            <Image
                                source={require("./images/close.png")}
                                style={styles.CloseIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.blackOverlay}
                            onPress={this.closeModal}
                            activeOpacity={0.99}
                        />
                        <View style={styles.modalContent}>
                            <ScrollView>
                                <View style={styles.Headstylecom}>
                                    <Text style={styles.Headstyle}>
                                        {"4 Comments"}
                                    </Text>
                                </View>
                                <CardSection>
                                    <View
                                        style={styles.thumbnailContainerStyle}
                                    >
                                        <Image
                                            source={require("./images/celeb1.jpg")}
                                            style={styles.Commenticon}
                                        />
                                    </View>
                                    <View style={styles.headerContentStyle}>
                                        <Text style={styles.Headstyle}>
                                            {"Mario"}
                                        </Text>
                                        <Text style={styles.Textstyle}>
                                            {
                                                "Sing from the bottom of your heart"
                                            }
                                        </Text>
                                    </View>
                                </CardSection>

                                <CardSection>
                                    <View
                                        style={styles.thumbnailContainerStyle}
                                    >
                                        <Image
                                            source={require("./images/celeb2.jpg")}
                                            style={styles.Commenticon}
                                        />
                                    </View>
                                    <View style={styles.headerContentStyle}>
                                        <Text style={styles.Headstyle}>
                                            {"Dancer"}
                                        </Text>
                                        <Text style={styles.Textstyle}>
                                            {"Dance is like flowing water"}
                                        </Text>
                                    </View>
                                </CardSection>

                                <CardSection>
                                    <View
                                        style={styles.thumbnailContainerStyle}
                                    >
                                        <Image
                                            source={require("./images/celeb3.jpg")}
                                            style={styles.Commenticon}
                                        />
                                    </View>
                                    <View style={styles.headerContentStyle}>
                                        <Text style={styles.Headstyle}>
                                            {"Nick"}
                                        </Text>
                                        <Text style={styles.Textstyle}>
                                            {"Acting is my passion"}
                                        </Text>
                                    </View>
                                </CardSection>

                                <CardSection>
                                    <View
                                        style={styles.thumbnailContainerStyle}
                                    >
                                        <Image
                                            source={require("./images/celeb4.jpg")}
                                            style={styles.Commenticon}
                                        />
                                    </View>
                                    <View style={styles.headerContentStyle}>
                                        <Text style={styles.Headstyle}>
                                            {"David"}
                                        </Text>
                                        <Text style={styles.Textstyle}>
                                            {"I love football"}
                                        </Text>
                                    </View>
                                </CardSection>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    onPress={this.openModal}
                    style={styles.shareBtn}
                >
                    <Image
                        source={require("./images/new/comment.png")}
                        style={styles.ShareIcon}
                    />
                    <Text style={styles.countshow}>{"1K"}</Text>
                </TouchableOpacity>
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
    shareBtn: {
        alignItems: "center",
        marginVertical: 7
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
        width: 23,
        height: 23
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
    Headstylecom: {
        justifyContent: "center",
        alignItems: "center"
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
        backgroundColor: "yellow",
        height: 45,
        width: 45,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    contain: {
        width: 410,
        height: 410
    },
    countshow: {
        fontSize: 10,
        color: "#FFFFFF",
        textAlign: "center"
    },

    modalContent: {
        maxHeight: 410,
        position: "relative",
        zIndex: 2,
        backgroundColor: "#ffffff"
    },
    modalWrapper: {
        justifyContent: "flex-end",
        backgroundColor: "transparent",
        flex: 1
    },
    blackOverlay: {
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
    },
    crossIcon: {
        width: "100%",
        height: 200,
        left: 350
    },
    CloseIcon: {
        height: 25,
        width: 25
    }
});
