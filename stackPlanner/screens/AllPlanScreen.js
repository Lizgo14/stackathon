import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, FlatList, SafeAreaView, Item} from 'react-native';
import { List, ListItem } from "react-native-elements"
import {connect} from 'react-redux'
import {getPlans} from '../store/plans'
import {createStackNavigator} 
  from 'react-navigation-stack'
import SinglePlan from './SinglePlanView'
import { createAppContainer } from 'react-navigation';


export default createAppContainer(MyStackNavigator)



class AllPlansScreen extends React.Component {
  
  componentDidMount() {
    this.props.onLoadPlans()
  }

  render() {
    return(
      <ScrollView style= {styles.container}>

        <FlatList
          data={this.props.allPlans}
          renderItem={({ item }) => (
            <ListItem
            style = {styles.list}
            title={
              <View >
                <Text style = {{fontSize: 25, fontWeight: 'bold'}}>{item.planName}</Text>
                <Button
          title="View Details"
          //Button Title
          onPress={() =>
            this.props.navigation.navigate('single')
          }

        />
              </View>
            }
            subtitle={item.description}

            />
            
          )}
          keyExtractor={item=>item.planName}
        />
      </ScrollView>
    );
}
}



AllPlansScreen.navigationOptions = {
  title: 'View Plans',
};

const mapStateToProps = (state) =>{
  return {
    allPlans: state.allPlans
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadPlans: function () {
      dispatch(getPlans());
    }
  };
};

const allPlansConnected= connect(mapStateToProps, mapDispatchToProps)(AllPlansScreen)

const MyStackNavigator = createStackNavigator(
  {
  all: allPlansConnected,
  single: SinglePlan
  },
  {
    initialRouteName: 'all',
  }
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#b0e0e6',
  },
  list: {
    marginLeft : 15,
     marginRight : 15,
     marginBottom:5,
     marginTop:5,
     backgroundColor: '#b0e0e6',
     borderColor: 'grey',
    borderWidth:1},
});

const dummydata= [
  {
    planName: "Brunch",
    ppp: 45,
    people: 10,
    description: "Unlimited bottomless mimosas at Cafe Cortadito"
  },
  {
    planName: "Open-Bar at Public House",
    ppp: 50,
    people: 60,
    description: "3 Hour Part in Private Room"
  }
]
