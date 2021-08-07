import React, { Component } from 'react';
import { View, StyleSheet , Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config'
import MyHeader from "../components/MyHeader"

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            allRequests:[]
        }
        this.requestRef=null
    }

    getAllRequests=()=>{
        this.requestRef= db.collection("exchange_requests")
        .onSnapshot((snapshot)=>{
          var allRequests = []
          snapshot.forEach((doc) => {
              allRequests.push(doc.data())
          })
             this.setState({
                allRequests: allRequests
            })
        })
    }

    keyExtractor=(item, index)=> index.toString();

    renderItem=({item, i})=>{
      console.log('item',item)
        return(
            <ListItem
                key={i}
                title={item.item_name}
                subtitle={item.description}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                    <TouchableOpacity style={styles.button}  
                      onPress ={()=>{
                      this.props.navigation.navigate("ReceiverDetails",{"details":item});
                    }}>
                      <Text style={{color:'#fff'}}>View</Text>
                    </TouchableOpacity>
                  }
                bottomDivider
            />
        )
    }

    componentDidMount(){
      this.getAllRequests()
    }

    componentWillUnmount(){
      this.requestRef()
    }

    render(){
        return(
            <View style={{flex:1}}>
              <MyHeader title="Barter App"/>
              <View style={{flex:1}}>
                {
                  this.state.allRequests.length === 0
                  ?(
                    <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                      <Text style={{ fontSize: 20}}>List Of All Barters</Text>
                    </View>
                  )
                  :(
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.allRequests}
                      renderItem={this.renderItem}
                    />
                  )
                }
              </View>
            </View>
        )
      }
}

const styles = StyleSheet.create({
    button:{
      flex: 0.3,
      fontSize: 20,
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })