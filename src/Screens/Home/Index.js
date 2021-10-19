import React,{Component} from 'react';
import {View,ScrollView,Text,TouchableOpacity,Image,StyleSheet,FlatList,TouchableWithoutFeedback} from 'react-native'
const data = require('../../../constants/category.json')

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data:data.category,
            name:props.route.params
        }
        console.log(this.state.name);
        this.toDetail = this.toDetail.bind(this);
        this.renderItem = this.renderItem.bind(this);

    }
    toDetail = (name,background_img)=>{
        this.navigation.navigate('ProductList',{name,background_img})
    }
    renderItem({item,index}){
        return(
            <View style={styles.brand_list}>
                    <View>
                        <Image 
                            source={{uri:item.image}}
                            // source = {{require:item.image}}}
                            style={styles.img_brand}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn_detail} onPress={()=>this.toDetail(item.name,item.background_img)}>
                                <View style={{flexDirection:'row',alignItems:'center',padding:16,marginTop:4}}>
                                    <Image 
                                        source={{uri:item.image}}
                                        style={{width:50,height:40}}
                                    />
                                    <Text style={{color:'#fff',lineHeight:24,marginLeft:14,wordWrap:'break-word',fontWeight:'bold',width:180}}>{item.title}</Text>
                                </View>
                    </TouchableOpacity>
            </View>
        )
    }
    
    render(){
        return(
            <ScrollView style={{backgroundColor:'#343434'}}>
                <View style={{flexDirection:'row',padding:16,justifyContent:'space-between'}}>
                    <Image
                            source = {require('../../Images/header--logo.png')}
                            style={{width:80,height:80,alignSelf: 'center'}}
                    />
                     <View style={styles.header}>
                        <Text style={styles.title}>LK GEAR GAMING</Text>
                    </View>
                </View>
                 <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                />
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        marginTop:20,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#FFFFFF'
    },
    brand_list:{
        marginTop:20,
        marginBottom:20,
    },  
    img_brand : {
        width:'100%',
        height:360,
        zIndex:1,
        resizeMode:"stretch",
        justifyContent: 'center',
    },
    text_img:{
        marginTop:-150,
        zIndex:2,
        color:'#ffff',
        fontSize:26,
        fontWeight:'bold',
        marginLeft:20,
    },
    btn_detail:{
        backgroundColor:'#34356b',
        width:'70%',
        height:100,
        borderRadius:20,
        padding:6,
        zIndex:2,
        alignSelf: 'center',
        marginTop:-60,
    },
    btn_shop:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:18,
        color:'#fff',
        textAlign: 'center',
    }
})