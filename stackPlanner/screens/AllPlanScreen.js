import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, FlatList, SafeAreaView, Item} from 'react-native';
import { List, ListItem } from "react-native-elements"
import { db } from '../db/config'
import {connect} from 'react-redux'
import {getPlans} from '../store/plans'

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

export default connect(mapStateToProps, mapDispatchToProps)(AllPlansScreen)



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
