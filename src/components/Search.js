import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput
} from "react-native";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Header from "./header";

export default class Search extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => this.props.onBackPress()}
      >
        <ScrollView>
          <View style={{ backgroundColor: "#181919", flex: 1 }}>
            <TouchableOpacity onPress={this.props.onBackPress}>
              <Image
                source={require("./images/back.png")}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.searchTitle}>Search</Text>
              <View style={{ position: "relative", marginTop: 18 }}>
                <Image
                  source={require("./images/new/searchicon.png")}
                  style={styles.searchicon}
                />
                <TextInput
                  placeholder="Search here..."
                  style={styles.searchbar}
                />
              </View>
              <Text style={styles.recommendtext}>RECOMMENDED FOR YOU</Text>
            </View>

            <View style={styles.middle1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.countRow}>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R1img1.png")}
                      style={styles.middleIcon}
                    />
                    <Text style={styles.imageTitle}>SaReGama Champs</Text>
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R1img2.png")}
                      style={styles.middleIcon}
                    />
                    <Text style={styles.imageTitle}>Indian Idol Junior</Text>
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R1img3.png")}
                      style={styles.middleIcon}
                    />
                    <Text style={styles.imageTitle}>Rising Star South</Text>
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R1img4.png")}
                      style={styles.middleIcon}
                    />
                    <Text style={styles.imageTitle}>Rising Star South</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 46 }}>
              <Text style={styles.singingtext}># SINGING TALENT</Text>
              <Text style={styles.imageTitle}>{"Trending hashtag, 1m"}</Text>
            </View>
            <View style={styles.middle1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.countRow}>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img1.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img2.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img3.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img1.png")}
                      style={styles.imagenew}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 24 }}>
              <Text style={styles.singingtext}># DANCE TALENT</Text>
              <Text style={styles.imageTitle}>{"Trending hashtag, 1m"}</Text>
            </View>
            <View style={styles.middle1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.countRow}>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb1.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb2.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb3.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb4.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 24 }}>
              <Text style={styles.singingtext}># SINGING TALENT</Text>
              <Text style={styles.imageTitle}>{"Trending hashtag, 1m"}</Text>
            </View>
            <View style={styles.middle1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.countRow}>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img1.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img2.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img3.png")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/new/search/R2img1.png")}
                      style={styles.imagenew}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 24 }}>
              <Text style={styles.singingtext}># SINGING TALENT</Text>
              <Text style={styles.imageTitle}>{"Trending hashtag, 1m"}</Text>
            </View>
            <View style={styles.middle1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.countRow}>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb1.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb2.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb3.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                  <View style={styles.countColumn}>
                    <Image
                      source={require("./images/celeb4.jpg")}
                      style={styles.imagenew}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = {
  imageIcon: {
    width: 82,
    height: 74,
    opacity: 0.1
  },
  container: {
    backgroundColor: "rgba(31, 32, 65, 0.5)"
  },
  backIcon: {
    width: 20,
    height: 20,
    top: 20,
    left: 20,
    tintColor: "#FFFFFF"
  },
  searchTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 45,
    color: "#FFFFFF"
  },
  searchbar: {
    width: 320,
    height: 44,
    backgroundColor: "white",
    paddingLeft: 35
  },
  recommendtext: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 24
  },
  middle1: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 21,
    paddingRight: 21
  },
  middleIcon: {
    width: 90,
    length: 90,
    borderRadius: 100
  },
  singingtext: {
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold"
  },
  countRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  countColumn: {
    justifyContent: "center",
    height: 142,
    margin: 17,
    width: 90,
    overflow: "hidden"
  },
  imageTitle: {
    fontSize: 12,
    color: "#C4C4C4",
    textAlign: "center"
  },
  imagenew: {
    resizeMode: "cover",
    width: "100%"
  },
  searchicon: {
    width: 17,
    height: 18,
    position: "absolute",
    left: 10,
    top: 14,
    zIndex: 2
  }
};
