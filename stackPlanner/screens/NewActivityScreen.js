import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import NumericInput from 'react-native-numeric-input'
import {addPlan} from '../store/plans'
import {connect} from 'react-redux'


class NewActivityScreen extends React.Component {
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

  handleSubmit = (event) => {
    this.props.addPlan(this.state)
    this.setState({
      planName: '',
      ppp: 0,
      people:0,
      description: '',
      selectedTags: []
    })
    Alert.alert('Thanks for sharing your plan!')
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
        onChangeText={planName => this.setState({planName})}
        />

       <Text>Price per Person:</Text>
        <NumericInput style ={styles.input}
        placeholder="Enter Price per Person"
        name = "ppp"
        value = {this.state.ppp}
        onChange={ppp => this.setState({ppp})}
        />

        <Text>Number of people:</Text>
                <NumericInput style ={styles.input}
                className="form-control"
                placeholder="Enter Number of People"
                name = "people"
                keyboardType="numeric"
                value = {this.state.people}
                onChange={people => this.setState({people})}
                />
        <Text>Description:</Text>
        <TextInput style ={{backgroundColor: '#fffaf0', borderColor: 'gray', borderWidth: 1,height:80}}
        placeholder="Enter Description"
        name = "description"
        multiline = {true}
        numberOfLines = {3}
        value = {this.state.description}
        onChangeText={description => this.setState({description})}
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


    const mapStateToProps = (state) =>{
      return {
        allPlans: state.allPlans
      }
    }
    
    const mapDispatchToProps = function (dispatch) {
      return {
        addPlan: function (newPlan) {
          dispatch(addPlan(newPlan));
        }
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(NewActivityScreen)

  

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
