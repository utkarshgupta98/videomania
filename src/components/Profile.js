import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Header from "./header";
import LightVid1 from "./images/new/profile/img1.png";
import LightVid2 from "./images/new/profile/img2.png";
import LightVid3 from "./images/new/profile/img3.png";
import LightVid4 from "./images/new/profile/img4.png";
import LightVid5 from "./images/new/profile/img5.png";
import LightVid6 from "./images/new/profile/img6.png";
import LightVid7 from "./images/new/profile/img7.png";
import LightVid8 from "./images/new/profile/img8.png";
import LightVid9 from "./images/new/profile/img9.png";
import LightVid10 from "./images/new/profile/img10.png";
import LightVid11 from "./images/new/profile/img11.png";
import LightVid12 from "./images/new/profile/img12.png";

const data = [
  { source: LightVid1 },
  { source: LightVid2 },
  { source: LightVid3 },
  { source: LightVid4 },
  { source: LightVid5 },
  { source: LightVid6 },
  { source: LightVid7 },
  { source: LightVid8 },
  { source: LightVid9 },
  { source: LightVid10 },
  { source: LightVid11 },
  { source: LightVid12 }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ source: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 4;

export default class Profile extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image source={item.source} style={styles.listicon} />
      </View>
    );
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => this.props.onBackPress()}
      >
        <ScrollView>
          <TouchableOpacity
            onPress={this.props.onBackPress}
          >
            <Image
              source={require("./images/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.viewStyle}>
            <Image
              source={require("./images/new/Vector.png")}
              style={styles.imageIcon}
            />
            <Text style={styles.Textstyle}>{"Sam"}</Text>
            <Text style={styles.smalltext}>{"Delhite Singer Songwriter"}</Text>
          </View>
          <View style={styles.middle1}>
            <Image
              source={require("./images/new/image1.png")}
              style={styles.middleIcon}
            />
            <Image
              source={require("./images/new/image2.png")}
              style={styles.middleIcon}
            />
            <Image
              source={require("./images/new/image3.png")}
              style={styles.middleIcon}
            />
            <Image
              source={require("./images/new/image4.png")}
              style={styles.middleIcon}
            />
          </View>
          <View style={styles.countRow}>
            <View style={styles.countColumn}>
              <Text style={styles.count}>0</Text>
              <Text style={styles.countTitle}>Followers</Text>
            </View>
            <View style={styles.countColumn}>
              <Text style={styles.count}>0</Text>
              <Text style={styles.countTitle}>Following</Text>
            </View>
            <View style={styles.countColumn}>
              <Text style={styles.count}>0</Text>
              <Text style={styles.countTitle}>Posts</Text>
            </View>
          </View>
          <View style={styles.container}>
            <FlatList
              data={formatData(data, numColumns)}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = {
  Textstyle: {
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
    marginTop: 10
  },

  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 65
  },
  imageIcon: {
    width: 96,
    height: 96
  },

  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").width / numColumns, // approximate a square
    width: Dimensions.get("window").width / numColumns,
    overflow: "hidden",
    margin: 2
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  },
  listicon: {
    height: Dimensions.get("window").width / numColumns,
    width: Dimensions.get("window").width / numColumns
  },
  backIcon: {
    width: 20,
    height: 20,
    top: 0,
    left: 0,
    margin: 20
  },
  smalltext: {
    fontSize: 14,
    color: "black",
    marginTop: 10
  },
  middle1: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  countRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 14
  },
  countColumn: {
    justifyContent: "center",
    flex: 1
  },
  count: {
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },

  countTitle: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    color: "rgba(31, 32, 65, 0.5)",
    textAlign: "center"
  },

  middleIcon: {
    width: 44,
    length: 44,
    borderRadius: 50,
    margin: 2
  },

  container: {
    marginLeft: -2,
    marginRight: -2
  }
};
