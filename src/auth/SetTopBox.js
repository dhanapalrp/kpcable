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

const boxes = [
  {
    key: 1,

    image1: require('../../assets/images/scv.png'),

    //   backgroundColor: '#59b2ab',
  },
  {
    key: 2,

    image1: require('../../assets/images/vk.png'),

    //   backgroundColor: '#59b2ab',
  },
  {
    key: 3,

    image1: require('../../assets/images/tccl.png'),

    //   backgroundColor: '#59b2ab',
  },
  {
    key: 4,

    image1: require('../../assets/images/vk.png'),

    //   backgroundColor: '#59b2ab',
  },
];

const SetTopBox = ({navigation}) => {
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
          {boxes?.map((bd, i) => {
            return (
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  navigation.navigate('Main');
                }}>
                <Image source={bd.image1} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SetTopBox;

const styles = StyleSheet.create({
  boxWrapper: {
    flexDirection: 'row',
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
});
