import { View,Text } from "react-native";
export default function Greet({name}:{name:any}){
    return(
        <View>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Hello {name}</Text>
        </View>
    );
}