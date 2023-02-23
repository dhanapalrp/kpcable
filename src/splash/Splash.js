import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  regularFont,
  boldFont,
  mediumFont,
  demiFont,
  primaryColor,
  primaryBgColor,
} from '../constants/fonts';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');
const slides = [
  {
    key: 1,

    image1: require('../../assets/images/splash1.png'),

    //   backgroundColor: '#59b2ab',
  },
  //   {
  //     key: 2,

  //     image1: require('../../assets/images/splash1.png'),

  //     //   backgroundColor: '#59b2ab',
  //   },
];

function Splash({navigation}) {
  const [showRealApp, setShow] = useState(true);

  function renderItem({item}) {
    return (
      <SafeAreaView style={styles.slide}>
        <View style={styles.splashImages}>
          <Image resizeMode="contain" source={item.image1} />
        </View>
      </SafeAreaView>
    );
  }

  function renderNextButton() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.buttonCircle}>
          <Ionicons
            name="arrow-forward-sharp"
            // color="rgba(255, 255, 255, .9)"
            // color="#2e2e2e"
            size={24}
          />
        </View>
      </View>
    );
  }

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.buttonCircle}>
          <AntDesign name="login" color="rgba(255, 255, 255, .9)" size={24} />
        </View>
      </View>
    );
  };

  const onDone = () => {
    navigation.replace('SignIn', {
      mob: '',
    });
  };

  const onSkip = () => {
    setShow(true);
  };

  return (
    <>
      <>
        <StatusBar
          backgroundColor={'#cf9f47'}
          animated={true}
          //   hidden={true}
          barStyle="default"
        />
        <AppIntroSlider
          keyExtractor={item => item.key.toString()}
          renderItem={renderItem}
          data={slides}
          onDone={onDone}
          // onSkip={onSkip}
          bottomButton={true}
          activeDotStyle={[
            {
              backgroundColor: '#cf9f47',
            },
          ]}
          dotStyle={{
            backgroundColor: '#aaa',
          }}
          showNextButton={true}
          showSkipButton={false}
          showDoneButton={true}
          renderNextButton={renderNextButton}
          // renderSkipButton={renderDoneButton}
          renderDoneButton={renderDoneButton}
        />
      </>
    </>
  );
}

export default Splash;

// slider data's

const styles = StyleSheet.create({
  slide: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 50,
    backgroundColor: 'rgba(50,50,50,255)',
    height: height,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cf9f47',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: width / 2 - 40,
    // borderWidth: 1,
  },
  // doneButton: {
  //   backgroundColor: '#FFB100',
  //   padding: 10,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   marginTop: -5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // marginLeft: 5,
  //   left: 50,
  //   borderRadius: 8,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.23,
  //   shadowRadius: 2.62,
  //   elevation: 4,
  // },

  doneButton: {
    backgroundColor: '#cf9f47',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginRight: width / 2 - 90,
  },

  text: {
    textAlign: 'center',
    marginTop: 10,
    width: '90%',
    marginLeft: '5%',
    fontSize: 16,
    color: '#2B2A29',
  },
  splashImages: {
    alignItems: 'center',

    width: '98%',
    overflow: 'hidden',
    // justifyContent: 'center'
  },
  splashImages1: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: '30%',
    backgroundColor: '#bbb',

    // width: "100%",
    // justifyContent: 'center'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#cf9f47',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
