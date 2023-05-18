import {
  NativeBaseProvider,
  Box,
  Center,
  VStack,
  Text,
  Heading,
} from "native-base";

import { useRouter } from "expo-router";
import { Input } from "../../../components/login/inputs/input";
import { Button } from "../../../components/login/buttons/button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../schemas/login/signin";


function SigninScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignInSchema),
  });

  const router = useRouter();

  function handleSignIn(data) {
    console.log(data);
  }

  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor={"white.500"} px={8}>
        <Box>
          <Center>
            <Heading my={20}>Entre na sua conta 🧑🏽‍💻</Heading>
          </Center>
        </Box>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Email"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Senha"
              onChangeText={onChange}
              type={"password"}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Box>
          <Button text={"Entrar"} onPress={handleSubmit(handleSignIn)} />
          <Center marginTop={9}>
            <Text
              fontSize={"lg"}
              underline
              onPress={() => {
                router.push("/screens/login/signup/signup");
              }}
            >
              Não tem uma conta?
            </Text>
          </Center>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
}

export default SigninScreen;
