import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import t from 'tcomb-form-native'
import SelectMultiple from 'react-native-select-multiple'

const Form = t.form.Form

const Plan = t.struct({
  "Plan Name:": t.String,
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
  constructor(props){
  super(props)
  this.state = {
    planName: '',
    ppp: 0,
    people:0,
    description: '',
    selectedTags: []
  }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.onSelectionsChange = this.onSelectionsChange.bind(this)
  
  }

  handleSubmit = () => {
    this.setState({
      planName: '',
      ppp: 0,
      people:0,
      description: '',
      selectedTags: []
    })
  }
  
  onSelectionsChange = (selectedTags) => {
    this.setState({selectedTags})
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>Plan Name:</Text>
        <TextInput style ={styles.input}
        placeholder="Enter Plan Name"
        name = "planName"
        value = {this.state.planName}
        onChange={planName => this.setState({planName})}
        />

       <Text>Price per Person:</Text>
        <TextInput style ={styles.input}
        placeholder="Enter Price per Person"
        name = "ppp"
        keyboardType="numeric"
        value = {this.state.ppp}
        onChange={ppp => this.setState({ppp})}
        />

        <Text>Number of people:</Text>
                <TextInput style ={styles.input}
                placeholder="Enter Number of People"
                name = "people"
                keyboardType="numeric"
                value = {this.state.people}
                onChange={people => this.setState({people})}
                />
        <Text>Description:</Text>
        <TextInput style ={{backgroundColor: '#fffaf0', borderColor: 'gray', borderWidth: 1, multiline: true, numberOfLines: 3,height:80}}
        placeholder="Enter Description"
        name = "description"
        value = {this.state.description}
        onChange={description => this.setState({description})}
        />        

        <Text>Plan Type (Select All that Apply):</Text>
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
  input:{
    backgroundColor: '#fffaf0',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
