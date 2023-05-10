import { Button as ButtonNB, Text } from "native-base";

const Button = ({ ...rest }) => {
  return (
    <ButtonNB
      w={"full"}
      h={16}
      bgColor={"blue.500"}
      _pressed={{ bgColor: "blue.900" }}
      {...rest}
    >
      <Text color={"white"} fontSize={"md"} fontWeight={"bold"}>
        Entrar
      </Text>
    </ButtonNB>
  );
};

export { Button };
