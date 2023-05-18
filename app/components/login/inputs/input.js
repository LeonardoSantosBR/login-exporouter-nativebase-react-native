import { Input as InputNB, FormControl, Text } from "native-base";

const Input = ({ errorMessage = null, isInvalid, ...rest }) => {
  let error = !!errorMessage || isInvalid;

  return (
    <>
      <InputNB
        bg={"gray.200"}
        fontSize={"lg"}
        isInvalid={error}
        color={"black"}
        h={16}
        _focus={{
          bg: "gray.300",
          borderWidth: 1,
          borderColor: "blue.500",
        }}
        {...rest}
      />
      <Text mb={5} pl={2} color={"red.500"}>
        {errorMessage}
      </Text>
    </>
  );
};

export { Input };
