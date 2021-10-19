import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

export default class AboutUs1 extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return(
            <View>
                <View style={{marginTop:100}}>
                    <Image
                        source ={require('../../Images/header--logo.png')}
                        style={{width:200,height: 200,alignSelf:'center'}}
                    />
                </View>
                <View style={{backgroundColor:'#e93434',width:'100%',height:460,marginTop:60,padding:20,borderRadius:60}}>
                    <View>
                        <Text style={{fontSize:18,color:'#fff',textAlign: 'center'}}>WELCOME </Text>
                        <Text style={{fontSize:18,color:'#fff',textAlign: 'center',marginTop:20}}>TO</Text>
                        <Text style={{fontSize:40,color:'#fff',textAlign: 'center',marginTop:40}}>LK GEAR GAMING</Text>
                    </View>
                    <View style={{alignItems: 'center',marginTop:60}}>
                        <TouchableOpacity style={{backgroundColor:'#fff', padding:10,width:140,borderRadius:20}} onPress={()=>this.navigation.navigate('LoginStack')}>
                            <Text style={{fontSize:18,color:'#e93434',marginLeft:16}}>WELCOME</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
