import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {boldFont} from '../../global/fonts';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#2e2e2e',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.boxWrapper}>
          <Image source={require('../../assets/images/profile.png')} />
          <Text style={[boldFont, styles.contact]}>P. Vijay Prakash</Text>
          <Text style={[boldFont, styles.contact]}>7904572158</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  boxWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  box: {
    borderWidth: 2,
    borderColor: '#d2a45d',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  contact: {
    color: '#d2a45d',
    fontSize: 20,
    letterSpacing: 2,
  },
});
