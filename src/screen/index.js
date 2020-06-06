import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import I18n from '../I18n';

class Screen extends Component {
  state: {
    changeLanguage: 'english',
  };
  heading = () => {
    return (
      <View style={styles.mainTitle}>
        <Text>Multi Language in React Native</Text>
      </View>
    );
  };
  button = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(
            'Language Selection',
            'Multi language support',
            [
              {
                text: 'French',
                onPress: () => {
                  I18n.locale = 'fr-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'English',
                onPress: () => {
                  I18n.locale = 'en-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'Arabic',
                onPress: () => {
                  I18n.locale = 'ar-Us';
                  this.setState({changeLanguage: 'arabic'});
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text>Click Change Language</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.heading()}
        <View style={{flex: 2, width: '90%'}}>
          <Text style={styles.text}>{I18n.t('greeting')}</Text>
          <Text style={styles.text}>{I18n.t('title')}</Text>
          <Text style={styles.text}>{I18n.t('Message')}</Text>
          {this.button()}
        </View>
      </View>
    );
  }
}
export default Screen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#F5FCFF', flex: 1, alignItems: 'center'},
  text: {
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 20,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  mainTitle: {
    flex: 1,
    justifyContent: 'center',
  },
});
