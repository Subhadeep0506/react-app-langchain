import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Stack,
  HStack,
  Link,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import Logo from "../assets/logo.png";

import loginUser from "@/services/auth/login";

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    const { success, message } = await loginUser(data);
    setLoginSuccess(success);
    setLoginStatusMessage(message);
    setIsLoading(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      if (success) {
        navigate("/");
      }
    }, 3000);
  };

  return (
    <Flex height="100vh" align="center" justify="center">
      <Box
        maxW="md"
        mx="auto"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Image
          src={Logo}
          boxSize="70px"
          borderRadius={20}
          fit="cover"
          marginBottom={4}
        />
        <Text fontSize={14} marginBottom={0}>
          Welcome to NewStocks 🎉
        </Text>
        <Text fontSize={14} marginBottom={6}>
          One stop for your daily News and Stocks info. Powered by AI.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={4}>
            <Field label="Email/Username" errorText={errors.username ? "This field is required" : ""}>
              <Input
                {...register("username", { required: true })}
                type="text"
                placeholder="Email"
              />
            </Field>
            <Field label="Password" errorText={errors.password ? "This field is required" : ""}>
              <PasswordInput
                {...register("password", { required: true })}
                placeholder="Password"
              />
            </Field>
            <Button type="submit" colorPalette="teal" size="lg" loading={isLoading}>
              Login
            </Button>

            {showAlert && (
              <Alert
                status={loginSuccess ? "success" : "error"}
                title={loginStatusMessage}
                variant="subtle"
                marginBottom={4}
              />
            )}
            <HStack>
              <Text fontSize={12}>Don't have an account?</Text>
              <Link
                fontSize={12}
                margin={0}
                fontWeight="bold"
                onClick={() => navigate("/register")}
              >
                Register
              </Link>
            </HStack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;