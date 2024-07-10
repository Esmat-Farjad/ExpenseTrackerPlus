import { Text, View, Image,ScrollView, Button,Pressable, ImageBackground} from "react-native";
const logImage = require("../assets/images/react-logo.png");
export default function Index() {
  return (
    <View style={{flex: 1,padding:50}}>
      <ScrollView>
      {/* <ImageBackground source={logImage} style={{flex:1}}> */}
      <Pressable onPress={()=> console.log("Image pressed")} onLongPress={()=> alert("Hello ")}>
        <Image source={logImage}/>
      </Pressable>
      <Pressable onPress={()=> console.log("Text pressed")}>
        <Text>Hello Esmatuual & Abdul Mateen</Text>
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
