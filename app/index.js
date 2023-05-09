import { NativeBaseProvider, Box, Center, VStack, Heading } from "native-base";

export default function LoginScreen() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor={'red.500'}>

        <Box>
          <Center>
            <Heading my={20}>Entre na sua conta</Heading>
          </Center>
        </Box>

        
      </VStack>
    </NativeBaseProvider>
  );
}
