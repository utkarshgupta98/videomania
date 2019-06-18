import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ColorBoxes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color1, styles.rows]} />
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color3, styles.rows]} />
            <View style={[styles.color5, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color1, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color5, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color7, styles.rows]} />
            <View style={[styles.color6, styles.rows]} />
            <View style={[styles.color6, styles.rows]} />
            <View style={[styles.color6, styles.rows]} />
            <View style={[styles.color6, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color1, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color8, styles.rows]} />
            <View style={[styles.color8, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color7, styles.rows]} />
            <View style={[styles.color5, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color6, styles.rows]} />
            <View style={[styles.color3, styles.rows]} />
            <View style={[styles.color2, styles.rows]} />
            <View style={[styles.color4, styles.rows]} />
            <View style={[styles.color6, styles.rows]} />
          </View>
        </View>

        <View style={styles.rows}>
          <View style={styles.columns5}>
            <View style={[styles.color6, styles.rows]} />
            <View style={[styles.color3, styles.rows]} />
            <View style={[styles.color3, styles.rows]} />
            <View style={[styles.color1, styles.rows]} />
            <View style={[styles.color1, styles.rows]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  color1: {
    backgroundColor: "blue"
  },
  color2: {
    backgroundColor: "green"
  },
  color3: {
    backgroundColor: "yellow"
  },
  color4: {
    backgroundColor: "orange"
  },
  color5: {
    backgroundColor: "red"
  },
  color6: {
    backgroundColor: "pink"
  },
  color7: {
    backgroundColor: "purple"
  },
  rows: {
    flex: 1
  },
  columns5: {
    flex: 1,
    flexDirection: "row"
  }
});
