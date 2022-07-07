import { StatusBar } from 'expo-status-bar'
import { NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, View } from 'react-native'
import React, { useState } from "react";
import { NativeBaseProvider, Box, Button, TextArea, extendTheme } from "native-base";

// const Editor = () => {
//   const [textAreaValue, setTextAreaValue] = useState("Value Controlled");
//   const demoValueControlledTextArea = (e) => {
//     setTextAreaValue(e.currentTarget.value);
//   };

//   function submit(text: string) {
//     console.log(text)
//   }

//   return (
//     <Box h="100%" display="flex" flexDirection="column">
//       <TextArea flex={8} value={textAreaValue} autoCompleteType="" onChange={demoValueControlledTextArea} fontSize="2em"></TextArea>
//       <Button flex={1}onPress={() => submit(textAreaValue)} size="lg">Submit</Button>
//     </Box>
//   )
// }

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>test</Text>
      {/* <Box h="100vh" display="flex">
        <Editor></Editor>
      </Box> */}
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   fontSize:'100px',
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})
