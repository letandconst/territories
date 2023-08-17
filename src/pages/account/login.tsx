import FormInput from "@/components/FormInput/FormInput";
import { Box, Button, Center } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      //   const res = await axios.post(
      //     `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Account/SignIn`,
      //     formData
      //   );

      if (!formData.username || !formData.password) {
        setErrorMessage("Invalid username or password");
        return;
      }

      if (formData.username === "foo" && formData.password === "bar") {
        router.push("/");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {}
  };

  return (
    <Center width="100%" height="100vh">
      <Box width="100%" maxW="500px" border="1px solid black" p="24px">
        <form onSubmit={handleSignIn}>
          <FormInput
            label="Username"
            placeholder="Enter your username"
            inputType="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            inputType="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Button mt="12px" colorScheme="blue" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
