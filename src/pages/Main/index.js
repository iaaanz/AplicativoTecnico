import React, {Component} from 'react';
import '~/config/StatusBarConfig.js';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import flatListData from '~/data/flatListData.js';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Testes de Software',
    headerStyle: {
      backgroundColor: '#00BA9E',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
    },
  };

  renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => {
          this.props.navigation.navigate('Item', {item});
        }}>
        <Text style={styles.itemButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={flatListData}
          contentContainerStyle={styles.list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    textAlign: 'justify',
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
