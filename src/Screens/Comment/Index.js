import React,{Component} from 'react';
import {View,ScrollView,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
const user = require('../../../constants/Oauth.json')

export default class Comment extends Component{
    constructor(props) {
        super(props);
        this.navigation  = props.navigation;
        let today = new Date();
        let time = today.getDate()+'/'+parseInt(today.getMonth()+1)+'/'+today.getFullYear()+'    '+today.getHours()+':'+today.getMinutes();
        let name = user.userLogin.fname;
        // user.userLogin.map((item,index)=>{
        //     if(index == 0)
        //     {
        //         name = item.fname;
        //     }
        //     return item
        // })
        this.state={
            data: props.route.params,
            cmt:'',
            user:user.currentuser,
            currentUser:name,
            time:time,
            
        }
        this.sendCmt = this.sendCmt.bind(this);
        this.getUser = this.getUser.bind(this);

    }

    getUser(){
        
    }

    sendCmt(comment){
        let cmt = this.state.cmt;
        let user = this.state.currentUser;
        console.log(user);
        if(cmt =='')
        {
            Alert.alert('Hãy nhập gì đó')
        }
        else
        {
            this.state.data.comment.push({user,cmt});
            this.navigation.navigate('Comment',{comment});
            this.setState({cmt:""})
        }
    }
    render(){
        let renderComment=()=>{
            return this.state.data.comment.map((item)=>(
                <View style={{padding:20}}>
                    <View style={{flexDirection:'row',justifyContent: 'space-between',marginBottom:24}}>
                        <Text style={{fontSize:18,color:'red'}}>{item.user}</Text>
                        <Text style={{fontSize:14,color:'#ccc'}}>{this.state.time}</Text>
                    </View>     
                    <Text>{item.cmt}</Text>
                    <Text>_________________________________________________</Text>
                </View>
            ))
        }
        return(
            
            <View style={{marginTop:60}}>
                <ScrollView>
                <View style={{padding:20,flexDirection:'row'}}>
                        <TextInput style={{backgroundColor:'#ccc',width:280,height:40,padding:10}} value={this.state.cmt} onChangeText={(cmt)=>{this.setState({cmt})}}></TextInput>
                        <TouchableOpacity style={{backgroundColor:'#e93434',padding:10,width:80}} onPress={()=>this.sendCmt(this.state.data.comment)}>
                            <Text style={{color:'#fff',marginLeft:10}}>Send</Text>
                        </TouchableOpacity>
                </View>
                {renderComment()}

                </ScrollView>
            </View>
        )
    }
}