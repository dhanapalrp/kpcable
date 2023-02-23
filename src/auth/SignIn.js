import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {signIn, signOut} from '../../redux/features/authSlice';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  boldRoboFont,
  regularRoboFont,
  mediumFont,
  boldFont,
  blackColor,
} from '../../global/fonts';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
const cardHeight = height * 0.6;
export default function Sign() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#2e2e2e',
      }}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            mobile: '',
            password: '',
          }}
          validationSchema={yup.object({
            mobile: yup
              .string()
              .min(10, 'Invalid Mobile')
              .max(10, 'Invalid Mobile')
              .required('Mobile is required'),
            password: yup
              .string()
              .min(5, 'Invalid Password')
              .max(5, 'Invalid Password')
              .required('Password is required'),
          })}
          onSubmit={(values, formik) => {
            console.log({values});
            dispatch(
              signIn({
                username: 'kminchelle',
                password: '0lelplR',
              }),
            );
          }}>
          {formik => {
            return (
              <>
                <LinearGradient
                  style={styles.card}
                  colors={['#826833', '#d9b25b']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={360}
                  angleCenter={{x: 0.5, y: 0.5}}>
                  <Text style={[boldFont, styles.headTitle]}>Welcome !</Text>
                  <View>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        label={'Mobile'}
                        textContentType="telephoneNumber"
                        maxLength={10}
                        activeUnderlineColor="#775d39"
                        onChangeText={val => {
                          formik.setFieldValue('mobile', val);
                        }}
                        keyboardType="numeric"
                        error={formik.touched.mobile && formik.errors.mobile}
                      />
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <View>
                          <Text style={[styles.errorTxt, regularRoboFont]}>
                            {formik.errors.mobile}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        label="Password"
                        textContentType="password"
                        secureTextEntry={show}
                        activeUnderlineColor="#775d39"
                        onChangeText={val => {
                          formik.setFieldValue('password', val);
                        }}
                        error={
                          formik.touched.password && formik.errors.password
                        }
                        right={
                          <TextInput.Icon
                            icon={show ? 'eye' : 'eye-off'}
                            onPress={() => setShow(!show)}
                          />
                        }
                        maxLength={5}
                        keyboardType="numeric"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <View>
                          <Text style={[styles.errorTxt, regularRoboFont]}>
                            {formik.errors.password}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 30,
                      }}>
                      <TouchableRipple
                        onPress={formik.handleSubmit}
                        centered
                        rippleColor="#3c3c3c"
                        style={styles.btnContainer}>
                        <Text style={styles.btnText}>Login</Text>
                      </TouchableRipple>
                    </View>
                  </View>
                </LinearGradient>
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    height: cardHeight,
    padding: 20,
    backgroundColor: '#cf9f47',
    borderRadius: 10,
    // justifyContent: 'center',
  },
  headTitle: {
    fontSize: 15,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#',
    marginBottom: 50,
  },
  inputWrapper: {
    marginVertical: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#fff',
  },
  btnContainer: {
    backgroundColor: '#242424',
    borderRadius: 8,
    width: '98%',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTxt: {
    color: '#901D04',
    padding: 2,
    fontSize: 13,
    letterSpacing: 0.5,
    paddingLeft: 5,
  },
});
