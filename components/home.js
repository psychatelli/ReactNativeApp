

import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
//import Button from './components/button/index';
import { Container, Header, Content, Badge, Text, Icon, Button } from 'native-base';



export default class Home extends React.Component {

  
    render() {
  
     
  
      return (
        <Container>
          <Header />
          <Content>
            
            <Badge danger>
              <Text>2</Text>
            </Badge>
            <Badge primary>
              <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
            </Badge>
            <Badge style={{ backgroundColor: 'black' }}>
              <Text style={{ color: 'white' }}>1866</Text>
            </Badge>
            <Button dark><Text> Dark </Text></Button>
            <Button light><Text> Light </Text></Button>
            <Button primary><Text> Primary </Text></Button>
            <Button success><Text> Success </Text></Button>
           
  
          </Content>
      
        </Container>
      );
    }
  }
   
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    largeText: {
      color: 'red',
      fontSize: 30,
    },
  
    white: {
      color: 'white',
    }
  });