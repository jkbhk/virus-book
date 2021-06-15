import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT = [
  {
    title: "mRNA vaccines",
    content:
      "mRNA vaccines(Pfizer, Moderna) contain material from the virus that causes COVID-19 that gives our cells instructions for how to make a harmless protein that is unique to the virus. After our cells make copies of the protein, they destroy the genetic material from the vaccine. Our bodies recognize that the protein should not be there and build T-lymphocytes and B-lymphocytes that will remember how to fight the virus that causes COVID-19 if we are infected in the future.",
  },
  {
    title: "Protein subunit vaccines",
    content:
      "Protein subunit vaccines include harmless pieces (proteins) of the virus that causes COVID-19 instead of the entire germ. Once vaccinated, our bodies recognize that the protein should not be there and build T-lymphocytes and antibodies that will remember how to fight the virus that causes COVID-19 if we are infected in the future.",
  },
  {
    title: "Vector vaccines",
    content:
      "Vector vaccines(Johnson & Johnson’s Janssen) contain a modified version of a different virus than the one that causes COVID-19. Inside the shell of the modified virus, there is material from the virus that causes COVID-19. This is called a “viral vector.” Once the viral vector is inside our cells, the genetic material gives cells instructions to make a protein that is unique to the virus that causes COVID-19. Using these instructions, our cells make copies of the protein. This prompts our bodies to build T-lymphocytes and B-lymphocytes that will remember how to fight that virus if we are infected in the future.",
  },
];

export default class VaccineScreen extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? "bounceIn" : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VEKSCTM4ERJNFDZX7ZKNEJZP2A.jpg",
          }}
        />
        <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
          <Text style={styles.title}>Current COVID-19 Vaccine Types</Text>

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>( tap on any category to learn more! )</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
});
