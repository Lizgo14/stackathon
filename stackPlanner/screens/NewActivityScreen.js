import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'
import SelectMultiple from 'react-native-select-multiple'

const Form = t.form.Form

const Plan = t.struct({
  "Plan Title:": t.String,
  "Price Per Person ($):": t.Number,
  "Number of people:": t.Number,
  "Description:": t.String
})

const eventType =[
    { label: 'Birthday', value: 'birthday' },
    { label: 'Boozy Brunch', value: 'boozybrunch' },
    { label: 'Brunch', value: 'brunch' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'Bachlorette', value: 'bachlorette' },
    { label: 'Open Bar', value: 'openbar' },
    { label: 'Free', value: 'free' },
    { label: 'Active', value: 'active' },
    { label: 'Outdoor', value: 'outdoor' },
    { label: 'Day', value: 'day' },
    { label: 'Night', value: 'night' },
    { label: 'Holiday', value: 'holiday' }
  ]

export default class NewActivityScreen extends React.Component {

  state = {selectedTags: []}

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value); 
  }

  onSelectionsChange = (selectedTags) => {
    this.setState({ selectedTags })
  }

  render(){

    return (
      <View style={styles.container}>
        <Form ref={x => this._form = x} type ={Plan}/>
        <Text>Plan type (select all that apply):</Text>
        <SelectMultiple
          items={eventType}
          selectedItems={this.state.selectedTags}
          onSelectionsChange={this.onSelectionsChange}
           />
        <Button
          title="Share Your Plan!"
          onPress={this.handleSubmit}
        />
      </View>
    );
    }}
  
    NewActivityScreen.navigationOptions = {
      title: 'Add Plan',
    };



  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#b0e0e6',
  },
});
