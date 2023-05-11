import { Button as ButtonNB, Text } from "native-base";

const Button = ({ text ,...rest }) => {
  return (
    <ButtonNB
      w={"full"}
      h={16}
      bgColor={"blue.500"}
      _pressed={{ bgColor: "blue.900" }}
      {...rest}
    >
      <Text color={"white"} fontSize={"md"} fontWeight={"bold"}>
        {text}
      </Text>
    </ButtonNB>
  );
};

export { Button };
