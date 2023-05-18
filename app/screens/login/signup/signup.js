import {
  NativeBaseProvider,
  Center,
  VStack,
  Text,
  Heading,
  Box,
} from "native-base";

import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../components/login/buttons/button";
import { Input } from "../../../components/login/inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../schemas/login/signup";

const SignupScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema)
  });

  const router = useRouter();

  function handleSignUp(data) {
    console.log(data);
  }
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor={"white.500"} px={8}>
        <Box>
          <Center>
            <Heading my={20}>Crie uma conta.. 👩🏽‍🚀 </Heading>
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

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="confirmar Senha"
              onChangeText={onChange}
              type={"password"}
              errorMessage={errors.confirmPassword?.message}
            />
          )}
        />

        <Box>
          <Button text={"Criar conta"} onPress={handleSubmit(handleSignUp)} />
          <Center marginTop={9}>
            <Text
              fontSize={"lg"}
              underline
              onPress={() => {
                router.back("");
              }}
            >
              Deseja voltar?
            </Text>
          </Center>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default SignupScreen;
