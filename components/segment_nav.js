


import React, { Component } from "react";
import { Segment, Button, Text} from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";



class Segment_Nav extends Component {
   
 
state = {
  term: '',
  term2: ''
};

  render() {
  const { Props } = this.props
    return (
        <Segment>
        <Button active first onPress={() => this.props.navigation.navigate("Air")}>
          <Text>Active</Text>
        </Button>
          
          <Button  onPress={() => this.props.navigation.navigate("Air_Completed")}>
            <Text>completed</Text>
          </Button>
        </Segment>
        );
    }
}

export default Segment_Nav;

