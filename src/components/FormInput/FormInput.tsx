import React from "react";
import { Input, FormLabel, FormControl } from "@chakra-ui/react";

interface InputProps {
  label: string;
  placeholder: string;
  inputType: string;
}

const FormInput = ({ label, placeholder, inputType, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={inputType}
        placeholder={placeholder}
        {...rest}
        borderColor="#f8f9fd"
      
      />
    </FormControl>
  );
};

export default FormInput;
