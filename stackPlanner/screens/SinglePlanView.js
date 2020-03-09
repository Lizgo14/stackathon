import React from 'react'
import { ScrollView, StyleSheet, View, Text, Button, FlatList, SafeAreaView, Item} from 'react-native'
import {connect} from 'react-redux'

export default class SinglePlanScreen extends React.Component{

  render(){
    return(
      <ScrollView style= {styles.container}>
      <Text style = {{fontSize: 25, fontWeight: 'bold'}}>Title</Text>
      <Text>$50/ Person  15 People</Text>
      <Text>Description</Text>
      





      </ScrollView>
    )
  }
}