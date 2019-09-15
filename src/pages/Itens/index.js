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
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.itemContainer}>{item.text}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fafafa',
  },

  list: {
    padding: 20,
  },

  itemContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  itemDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  itemButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00BA9E',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  itemButtonText: {
    fontSize: 16,
    color: '#00BA9E',
    fontWeight: 'bold',
  },
});
