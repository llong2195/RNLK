import React,{Component} from 'react';
import "intl";
import {View,ScrollView,Text,Picker,FlatList,Image,TouchableWithoutFeedback,TouchableOpacity} from 'react-native'
const data = require('../../../constants/product.json');
const { format } = require('number-currency-format');



export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.navigation  = props.navigation;
        this.state = {
            type:'ALL',
            data:props.route.params,
            product:data.product,
        }
        this.toDetail = this.toDetail.bind(this);

    }
    toDetail = (item) => {
        this.navigation.navigate('ProductDetail',{item})
    }
    render(){
        let renderItem = () =>{
            const prd = this.state.product
            return prd.map((item)=>{
                if(item.category == this.state.data.name && this.state.type == "ALL"){
                    return(
                        <View>
                        <TouchableWithoutFeedback onPress={()=>this.toDetail(item)}>
                        <View style = {{backgroundColor:'#fff',width:190,height:340,padding:10,marginRight:4,marginTop:8}}>
                        <View>
                            <Image
                                source={{uri:item.thumbnail}}
                                style={{width:180,height:180}}
                            />
                        </View>
                        <View style = {{backgroundColor:'#fff',width:174,padding:10,height:100}}>
                            <View style={{width:160,overflow: 'hidden',height:38,marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{item.name}</Text>
                            </View>
                            <View style={{width:180,overflow: 'hidden',height:40,marginTop:0}}>
                                <Text style={{fontSize:14}}>{item.type}</Text>
                            </View>
                            <View style={{width:180,overflow: 'hidden',height:40,marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{ format(item.price,{currency:'VND',decimalsDigits:0})}</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    </View>
                    )
                }
                else if(item.category == this.state.data.name && item.type == this.state.type){
                    return(
                        <TouchableWithoutFeedback onPress={()=>this.toDetail(item)}>
                        <View style = {{backgroundColor:'#fff',width:190,height:340,padding:10,marginRight:4,marginTop:8}}>
                        <View>
                            <Image
                                source={{uri:item.thumbnail}}
                                style={{width:180,height:180}}
                            />
                        </View>
                        <View style = {{backgroundColor:'#fff',width:174,padding:10,height:100}}>
                            <View style={{width:160,overflow: 'hidden',height:38,marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{item.name}</Text>
                            </View>
                            <View style={{width:180,overflow: 'hidden',height:40,marginTop:0}}>
                                <Text style={{fontSize:14}}>{item.type}</Text>
                            </View>
                            <View style={{width:180,overflow: 'hidden',height:40,marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{ format(item.price,{currency:'VND',decimalsDigits:0})}</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    )
                }
            })            
        }
        let renderPicker =()=>{
            if(this.state.data.name == 'MSI'|| this.state.data.name == 'ASUS' || this.state.data.name == 'GYGABYTE'){
                return(
                    <View style ={{
                        width:200,
                        marginLeft:280,
                    }}>
                        <Picker
                            selectedValue={this.state.type}
                            style = {{height:50,width:160,marginBottom:200}}
                            onValueChange={(itemValue,itemIndex)=>
                                this.setState({type:itemValue})
                            }
                        >
                            <Picker.Item
                                label="ALL"
                                value = "ALL"
                                style = {{fontWeight: "bold"}}
                            />
                            <Picker.Item
                                label="Laptop"
                                value = "Laptop"
                                style = {{fontWeight: "bold"}}
                            />
                            <Picker.Item
                                label="VGA"
                                value = "VGA"
                                style = {{fontWeight: "bold"}}
                            />
                            <Picker.Item
                                label="Screen"
                                value = "Screen"
                                style = {{fontWeight: "bold"}}
                            />
                            <Picker.Item
                                label="Mainboard"
                                value = "Mainboard"
                                style = {{fontWeight: "bold"}}
                            /> 
                        </Picker>
                    </View>
                )
            }
        }
            return(
                <ScrollView style={{marginTop:0}}>
                    <Image
                        source={{uri:this.state.data.background_img}}
                        style={{resizeMode:'stretch',width:420,height:300}}
                    />
                    {renderPicker()}
                <View style={{flexDirection:'row',marginTop:-200,flexWrap:'wrap'}}>
                {renderItem()}
                </View>
                
                </ScrollView>
            )
        }
    }

