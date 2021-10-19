import React,{Component} from 'react';
import {connect} from 'react-redux'
import {View,ScrollView,Text,Image,TouchableOpacity,FlatList,SafeAreaView,TouchableWithoutFeedback} from 'react-native'

export class HeaderCart extends Component {
    render(){
        return (
            <View style={{borderBottomWidth:1}}>
                <View style={{padding:20,flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>SHOPPING BAG</Text>
                    <View style={{backgroundColor:'#e93434',padding:11,height:40,marginLeft:20,marginTop:-4,borderRadius:20,width:40}}>
                        <Text style={{color:'#fff',fontWeight:'bold',marginLeft:2}}> {this.props.numberCart}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(HeaderCart)
