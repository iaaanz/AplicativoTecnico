import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import '~/config/StatusBarConfig.js';

export default class Item extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.item.title,
      headerStyle: {
        backgroundColor: '#00BA9E',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
    };
  };

  render() {
    const item = this.props.navigation.getParam('item');
    if (item.id === 1) {
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.textContainer}>
            <Text>{item.title1}</Text>
            <Text style={styles.textConteudo}>{item.text1}</Text>
            <Text>{item.title2}</Text>
            <Text style={styles.textConteudo}>{item.text2}</Text>
            <Text style={styles.textTopics}>{item.topics}</Text>
            <Text style={styles.textConteudo}>{item.text3}</Text>
            <Text>{item.title3}</Text>
            <Text style={styles.textConteudo}>{item.text4}</Text>
          </Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textContainer}>
          <Text style={styles.textContainer}>
            {item.title}
            {'\n \n'}
          </Text>
          <Text style={styles.textConteudo}>{item.text}</Text>
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: '#FFF',
  },

  textContainer: {
    textAlign: 'justify',
    fontSize: 18,
    lineHeight: 23,
    padding: 20,
    marginBottom: 20,
  },

  textTopics: {
    fontSize: 16,
  },

  textTitle: {
    fontFamily: 'Nunito-Bold',
  },

  textConteudo: {
    fontFamily: 'Nunito-Light',
    fontSize: 16,
  },
});
