import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  boldFont,
  boldRoboFont,
  mediumFont,
  mediumRoboFont,
  semiFont,
} from '../../global/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';

const custData = [
  {
    id: 1,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 2,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 3,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 4,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 5,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 6,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 7,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 8,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 10,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 11,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 12,
    boxID: '000083170013004F',
    amount: 250,
  },
  {
    id: 13,
    boxID: '000083170013004F',
    amount: 250,
  },
];

const Item = ({item}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={[styles.title, semiFont]}>{item.id}</Text>
    <Text style={[styles.subtitle, boldFont]}>{item.boxID}</Text>
    <Text style={[styles.amount, boldRoboFont]}>Rs. {item.amount}</Text>
  </TouchableOpacity>
);
export default function Customer() {
  const [showSearch, setShowSearch] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  console.log({customerData});
  useEffect(() => {
    setCustomerData(custData);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={[styles.headTitle, mediumFont]}>All Customers</Text>
        <TouchableWithoutFeedback onPress={() => setShowSearch(true)}>
          <Ionicons name="search" color="#fff" size={25} />
        </TouchableWithoutFeedback>
      </View>
      {showSearch ? (
        <View style={styles.searchWrapper}>
          <TextInput
            mode="flat"
            keyboardType={'numeric'}
            activeUnderlineColor="#242424"
            activeOutlineColor="transparent"
            underlineColor="transparent"
            textColor="#000"
            placeholder="search"
            style={[
              {
                width: '90%',
                backgroundColor: 'transparent',
              },
              mediumFont,
            ]}
            onChangeText={val => {
              if (val) {
                let data = custData?.filter((sd, i) => sd.id == Number(val));
                console.log({val, data});
                setCustomerData(data);
              } else setCustomerData(custData);
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              setShowSearch(false);
              setCustomerData(custData);
            }}>
            <Ionicons name="close" color="#242424" size={25} />
          </TouchableWithoutFeedback>
        </View>
      ) : null}
      <View style={{position: 'relative', flex: 1}}>
        <FlatList
          data={customerData}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          numColumns={3}
          centerContent
          collapsable={true}
          refreshing={true}
        />
      </View>
      <TouchableOpacity
        style={styles.addBtnwrapper}
        onPress={() => {
          console.log('pressed');
        }}>
        <Text style={[styles.addBtnText, boldFont]}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#84705c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#775d39',
    borderWidth: 1,
    elevation: 8,
  },
  title: {
    fontSize: 40,
  },
  header: {
    padding: 12,

    backgroundColor: '#242424',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headTitle: {
    color: '#cf9f47',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#4e3726',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 0.8,
    paddingVertical: 5,
  },
  amount: {
    fontSize: 16,
    textAlign: 'center',
    color: '#d2a45d',
    paddingVertical: 3,
    letterSpacing: 2,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#84705c',
  },

  addBtnwrapper: {
    position: 'absolute',
    right: 10,
    zIndex: 60,
    width: 45,
    height: 45,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: '#242424',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',

    fontSize: 35,
    marginTop: -4,
  },
});
