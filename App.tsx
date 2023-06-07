import React, { } from 'react';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

const NewComponent = (props: { title: string}) => {

  
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'gray'}}>
      <Text style={{fontSize:40}}>{props.title}</Text>
    </View>
  )

}

function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>

      <NewComponent title={'React'} />
      <NewComponent title={'native'} />

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

});

export default App;