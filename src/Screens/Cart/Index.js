import React,{Component} from 'react';
import {View,ScrollView,Text,Image,TouchableOpacity,FlatList,SafeAreaView,TouchableWithoutFeedback} from 'react-native'
import {IncreaseQuantity,DecreaseQuantity,DeleteCart } from '../../Components/Action/Index';
import {connect} from 'react-redux'
const { format } = require('number-currency-format');
import HeaderCart from '../../Components/HeaderCart/Index'




function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart,navigation}){
    let ListCart = [];
    let TotalCart=0;
    let TotalItem = 0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].qty * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        TotalItem+=items.Carts[item].qty;
    });
    return(
        <View style={{flex:1}}>
        <ScrollView style={{marginTop:40}}>
            <HeaderCart/>
            {ListCart.map((item,key)=>{
                return(
                    <SafeAreaView style={{marginTop:10,backgroundColor:'#fff'}}>
                    <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Image
                                source={{uri:item.thumbnail}}
                                style={{width:120, height:120}}
                            />
                        </View>
                        <View style={{marginLeft:20}}>
                            <TouchableOpacity style={{width:200,marginLeft:200,height:20,overflow: 'hidden',flexDirection:'column'}} onPress={()=>DeleteCart(key)}>
                                <Image 
                                    source={require('../../Images/trash.png')} 
                                    style={{width:20,height:20}}
                                />
                            </TouchableOpacity>
                            <View style={{width:200, height:78,overflow: 'hidden',flexDirection:'column',marginLeft:40}}>
                                <Text style={{fontSize:14,lineHeight:24,fontWeight:'bold'}}>{item.name}</Text>
                            </View>
                           
                        </View>
                    </View>
                    <View style={{padding:20,flexDirection:'row',justifyContent: 'space-between',marginTop:-40}}>
                        <View style={{flexDirection:'row',justifyContent: 'space-between',marginLeft:-20}}>
                            <TouchableOpacity style={{marginTop:10,marginLeft:20 ,backgroundColor:'#e93434',padding:10,width:38,height:24}} onPress={()=>DecreaseQuantity(key)} >
                                <Text caption style={{color:'#fff',marginLeft:8,marginTop:-8}}>-</Text>
                            </TouchableOpacity >
                            <View style={{backgroundColor:'#e0ebeb',width:38,height:24,marginTop:10}}>
                                <Text style={{marginLeft:16,marginTop:2}}>{item.qty}</Text>
                            </View>
                            <TouchableOpacity style={{marginTop:10,backgroundColor:'#e93434',padding:10,width:38,height:24}}  onPress={()=>IncreaseQuantity(key)} >
                                <Text caption style={{color:'#fff',marginLeft:6,marginTop:-8}}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:16,marginTop:16,color:'#e93434'}}>{ format(item.price*item.qty,{currency:'VND',decimalsDigits:0})}</Text>
                    </View>
                    </SafeAreaView>
                )
            })}
           
        </ScrollView>
        <View style={{padding:20,position: 'absolute',bottom:0,left:0,right:0,backgroundColor:'#e0ebeb',height:100,flex:0.5}}>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Total</Text>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                    { format(TotalCart,{currency:'VND',decimalsDigits:0})}
                </Text>
            </View>
            <TouchableOpacity style={{backgroundColor:"#e93434",flexDirection:'row',justifyContent: 'space-between',width:'100%',height:40,marginTop:10,padding:10}} onPress={()=>navigation.navigate('Order',{ListCart,TotalCart,TotalItem})}>
                <Text style={{color:'#fff',fontSize:18,marginTop:-2}}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    </View>
    )


}
const mapStateToProps = state =>{
    //  console.log(state)
      return{
            items:state._todoProduct,
            numberCart:state._todoProduct.numberCart,
      }
}
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart);
  