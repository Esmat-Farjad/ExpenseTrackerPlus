
import { useState } from "react";
import { Alert,Text,ActivityIndicator,StyleSheet, View, Image,ScrollView,Modal, Button,Pressable, ImageBackground, StatusBar} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const bgImage = require("../assets/images/card.jpg");
const bgImage2 = require("../assets/images/card1.jpg");


export default function Index() {
  const [isModalVisible, setIsVisibleModal] = useState(false); 
  const [state, setState] = useState(false);

  return (
   
      <ScrollView style={styles.mainContainer}>
        <StatusBar backgroundColor={'default'} barStyle={'dark-content'}/>
        <View style={{flex:5,flexDirection:'row',flexWrap:'wrap'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="reorder-two" color={'white'} size={28}></Ionicons>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'lightgray',fontSize:20,fontWeight:'thin'}}>My Wallet</Text>
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="search-outline" color={'white'} size={28}></Ionicons>
              </View>
        </View>
        {/* card section */}
        <View style={styles.container}>
          <View style={styles.containerBox}>
            <ImageBackground source={bgImage}>
              <Text style={styles.boxTitle}>Personal Wallet</Text>
              <Text style={styles.boxSubtitle}>Current Balance</Text>
              <Text style={styles.boxDigit}>$10.874538</Text>
            </ImageBackground>
          </View>
          <Text style={{marginTop:20,color:'gray'}}>Transaction History</Text>
          <View style={styles.dateNaigation}>
            <Pressable onPress={()=> console.log("Daily expense")}>
              <Text style={styles.dateContent} >Daily</Text>
            </Pressable >
            <Pressable onPress={()=> console.log("Weekly expense")}>
              <Text style={styles.dateContent}>Weekly</Text>
            </Pressable>
            <Pressable onPress={()=> console.log("Monthly expense")}>
              <Text style={styles.dateContent}>Monthly</Text>
            </Pressable>
            <Pressable onPress={()=> console.log("Yearly expense")}>
              <Text style={styles.dateContent}>Yearly</Text>
            </Pressable>
          </View>
          <View style={{marginVertical:10}}>
            <View style={styles.listHolder}>
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Ionicons style={styles.iconBg} name="bag-handle-sharp" size={24}></Ionicons>
              </View>
              <View style={{flex:3,borderEndColor:'gray',borderEndWidth:1}}>
                <Text style={styles.listTitle}>Shopping</Text>
                <Text style={styles.listText}>23 May</Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlign:'right',color:'yellow'}}>$67,254</Text>
              </View>
            </View>
            {/* next item */}
            <View style={styles.listHolder}>
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Ionicons style={styles.iconBg} name="fast-food-sharp" size={24} color={'gray'}></Ionicons>
              </View>
              <View style={{flex:3,borderEndColor:'gray',borderEndWidth:1}}>
                <Text style={styles.listTitle}>Food Expense</Text>
                <Text style={styles.listText}>23 May</Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlign:'right',color:'yellow'}}>$38,54</Text>
              </View>
            </View>
            {/* next item */}
            <View style={styles.listHolder}>
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Ionicons style={styles.iconBg} name="document-text-sharp" size={24} ></Ionicons>
              </View>
              <View style={{flex:3,borderEndColor:'gray',borderEndWidth:1}}>
                <Text style={styles.listTitle}>Bill Payment</Text>
                <Text style={styles.listText}>23 May</Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlign:'right',color:'yellow'}}>$5,000</Text>
              </View>
            </View>
            {/* next item */}
            <View style={styles.listHolder}>
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Ionicons style={styles.iconBg} name="bar-chart-sharp" size={24} ></Ionicons>
              </View>
              <View style={{flex:3,borderEndColor:'gray',borderEndWidth:1}}>
                <Text style={styles.listTitle}>Other Expense</Text>
                <Text style={styles.listText}>23 May</Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlign:'right',color:'yellow'}}>$2,500</Text>
              </View>
            </View>
          </View>
        </View>
    </ScrollView>

  );}
const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"#212129",
    padding:10
  },
  iconBg:{
    backgroundColor:'#000',
    color:'white',
    padding:5,
    borderRadius:10
  },
  listHolder:{
    backgroundColor:'#374151',
    padding:10,
    borderRadius:10,
    flex:5,
    flexDirection:'row',
    marginHorizontal:'auto',
    width:'auto',
    marginVertical:3

  },
  listTitle:{
    color:'white',
    fontSize:15,
  },
  listText:{
    color:'gray',
    fontSize:12
  },
  container: {
    flex:1,
    flexDirection:'column',
    padding:10
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    textTransform:'capitalize',
    color:'white'
  },
  text: {
    fontSize:12,
    fontWeight:'500'
  },
  image:{
    width:'auto',
    height:300,
    objectFit:'cover',
    
  },
  menu:{
    display:'flex',
    flexDirection:'row',
    cursor:'pointer',
  },

  menuIcon:{
    color:'white',
    marginRight:10
  },
  menuTitle:{
    color:'lightgray',
    fontWeight:'thin',
    fontSize:20,
    marginHorizontal:'auto'
  },
  menuSearch:{
    color:'white',
    marginLeft:10
  },
  containerBox:{
    borderRadius:10,
    width:'auto',
    height:'auto',
    overflow:'hidden',
    marginVertical:20
  },
  boxTitle:{
    color:'white',
    fontWeight:'bold',
    padding:15,
  },
  boxSubtitle: {
    color:'white',
    paddingTop:15,
    paddingHorizontal:15,
    paddingBottom:0
  },
  boxDigit:{
    color:'white',
    paddingHorizontal:15,
    paddingBottom:15,
    paddingTop:0
  },
  dateNaigation:{
    backgroundColor:'#374151',
    padding:10, 
    flex:1,
    flexDirection:'row',
    borderRadius:10,
    
  },
  dateContent:{
    color:'white',
    paddingHorizontal:18,
    fontSize:12,
    fontWeight:'100',
    cursor:'pointer'
  },

});