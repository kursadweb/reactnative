import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';


function App(): JSX.Element {
  const [count,setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timer: number;
  useEffect(() => {
    
    if (isRunning) {
      timer = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  }, [count, isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    clearTimeout(timer);
    setIsRunning(false);
    setCount(0);
  };

  return (
    <SafeAreaView>
      {!isRunning ? (
        <Pressable style={styles.buttonStyle} onPress={()=>{ startCounter(); }} >
          <Text style={{color: "white", textAlign: "center"}}>BAŞLA</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.buttonStyle} onPress={()=>{ stopCounter(); }} >
          <Text style={{color: "white", textAlign: "center"}}>DURDUR</Text>
        </Pressable>
      )}
      <Text style={{fontSize:20, textAlign: 'center'}}>Count: {count}</Text>


    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor: "blue",
    height:50,
    justifyContent: 'center'
  }

});

export default App;