
import { useState } from "react";
import { Alert,Text,ActivityIndicator, View, Image,ScrollView,Modal, Button,Pressable, ImageBackground, StatusBar} from "react-native";
import Greet from "@/components/Greet";
const logImage = require("../assets/images/react-logo.png");
export default function Index() {
  const [isModalVisible, setIsVisibleModal] = useState(false); 
  const [state, setState] = useState(false)
  return (
    <View style={{flex: 1,padding:50}}>
      
      <ActivityIndicator 
      size={"large"}
      color={"green"}
      animating={state}
      />
      <Button title="Alert"color={"teal"} onPress={() =>{
        Alert.alert("Modal Alert","The modal closed by user interaction",[
          {text:"Cancel",onPress:() => console.log("Cancel Pressed"),},
          {text:"OK",onPress: () => console.log("Okey Pressed"),},
        ]);
      }}/>
      {/* toggle between show/hide statusbar */}
      <StatusBar backgroundColor="black" barStyle="light-content" hidden={state}/>
      <Button title="Toggle StatusBar" onPress={() => {
        if(state){
          setState(false);
        }else{
          setState(true);
        }}}/>
      <ScrollView>
      <Button title="Open Modal" onPress={() => setIsVisibleModal(true)} color="midnightblue"/>
        {/* modal start */}
      <Modal 
      visible={isModalVisible} 
      onRequestClose={() => {
        Alert.alert("Modal Alert","The modal closed by user interaction",[
          {text:"Cancel",onPress:() => console.log("Cancel Pressed"),},
          {text:"OK",onPress: () => console.log("Okey Pressed"),},
        ]);
        setIsVisibleModal(false);
      }}
      animationType="slide"
      presentationStyle="formSheet">

        <View style={{ flex:1, backgroundColor:"teal", padding:50}}>
          <Button title="Close Modal" color="teal" onPress={()=>setIsVisibleModal(false)}/>
          <Text>Modal Content</Text>
        </View>

      </Modal>
      {/* <ImageBackground source={logImage} style={{flex:1}}> */}
      <Pressable onPress={()=> console.log("Image pressed")} onLongPress={()=> alert("Hello ")}>
        <Image source={logImage}/>
      </Pressable>
      
      <Pressable onPress={()=> console.log("Text pressed")}>
        <Greet name="Esmatullah Hashimi"/>
        <Text>
        In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without relying 
        on meaningful content. Lorem ipsum may be used as a 
        placeholder before the final copy is available.
        </Text>
      </Pressable>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      <Button 
      title="press" 
      onPress={()=>console.log("button pressed ")} 
      color="midnightblue" disabled/>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      {/* </ImageBackground> */}
      {/* <Image source={{uri:'online image from the web'}} style={{width:300,height:300}}/> */}
        </ScrollView>
    </View>
  );
}
