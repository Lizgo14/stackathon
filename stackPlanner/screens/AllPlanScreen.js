import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { db } from '../db/config'

export default class NewActivityScreen extends React.Component {
  constructor(props){
  super(props)
  this.state = {}}


  render() {
  const allPlans = loadPlans()
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data = {allPlans}
      renderItem={({item}) => <Item title={item.planName}/>}
      />
    </SafeAreaView>
  );
}
}

NewActivityScreen.navigationOptions = {
  title: 'View Plans',
};


const loadPlans = () => {
  db.ref('/Plan').once('value', function(snapshot){
    console.log(Object.values(snapshot.val()), "Loaded")
    return(Object.values(snapshot.val()))
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
