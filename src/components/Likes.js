import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Header from "./header";


export default class Likes extends React.Component {
  render() {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isVisible}
            onRequestClose={() => this.props.onBackPress()}
        >
            <TouchableOpacity
                onPress={this.props.onBackPress}
            >
                <Image
                    source={require("./images/back.png")}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <Image
                    source={require("./images/new/Likeshow.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.messagetext}>You have not recieved any messages</Text>
                <Text style={styles.createtext}>Create an amazing video now!</Text>
            </View>
        </Modal>
    );
  }
}

const styles = {
    imageIcon: {
        width: 82,
        height: 74,
        opacity: 0.1,
      },
    container: {
        marginTop: 205,
        alignItems: "center",
    },
    messagetext: {
        fontSize: 14,
        color: "black",
        marginTop: 16
    },
    createtext: {
        fontSize: 12,
        color: "rgba(0,0,0,0.5)"
    },
    backIcon: {
        width: 20,
        height: 20,
        top: 20,
        left: 20
      },
};
