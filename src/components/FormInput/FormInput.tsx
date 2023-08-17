import React from "react";
import { Input, FormLabel, FormControl } from "@chakra-ui/react";

interface InputProps {
  label: string;
  placeholder: string;
  inputType: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const FormInput = ({ label, placeholder, inputType, name, value, onChange, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={inputType}
        placeholder={placeholder}
        {...rest}
        borderColor="#f8f9fd"
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default FormInput;
