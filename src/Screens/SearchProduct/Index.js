import React,{Component} from 'react';
import {View,ScrollView,Text,FlatList,Image,TouchableWithoutFeedback} from 'react-native'
const data = require('../../../constants/product.json');
import {connect} from 'react-redux'
const { format } = require('number-currency-format');




export  class SearchProduct extends Component{
    constructor(props) {
        super(props);
        this.navigation  = props.navigation;
        this.state = {
            type:'ALL',
            data:props.route.params,
            product:data.product,
        }
        this.toDetail = this.toDetail.bind(this);
        this.renderText = this.renderText.bind(this);
    }
    toDetail = (item) => {
        this.navigation.navigate('ProductDetail',{item})
    }
    renderText(){
        if(this.state.data.keyword.length > 0){
            return(        
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>
                        Kết quả tìm kiếm : {this.state.data.keyword}
                    </Text>
                </View>
            )
        }
        else{
            return(
                <View style={{padding:20}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                     {this.state.data.name}
                </Text>
                </View>
            )
        }
    }
   

    render(){

        let formatPrice=(price)=>{
            return Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",}).format(price)
        }

        
        const {_products} = this.props._products;
        if(_products.length>0)
        return(
            <ScrollView style={{marginTop:80}}>
               {this.renderText()}
               <View style={{flexDirection:'row'}}>
                {
                    _products.map((item,index)=>{
                        if( item.type == this.state.data.keyword || item.name == this.state.data.keyword || item.brand == this.state.data.keyword || item.type==this.state.data.name)
                        {
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
                        })
                }
                </View>
            </ScrollView>
        )
    }
}
// trang nào cũng cần mấy cái này à

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}

function mapDispatchToProps(dispatch){
    return{
        getProduct:()=>dispatch(getProduct()),   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchProduct)