import { Input as InputNB, FormControl } from "native-base";

const Input = ({ errorMessage = null, isInvalid, ...rest }) => {
  let error = !!errorMessage || isInvalid;
  return (
    <FormControl>
      <InputNB
        bg={"gray.200"}
        fontSize={"lg"}
        mb={8}
        color={"black"}
        h={16}
        _focus={{
          bg: "gray.300",
          borderWidth: 1,
          borderColor: "blue.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export { Input };
