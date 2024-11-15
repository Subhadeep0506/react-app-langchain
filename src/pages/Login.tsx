import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Stack,
  HStack,
  Link,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Alert } from "@/components/ui/alert";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import Logo from "../assets/logo.png";

import login from "@/services/auth/login";

const LoginPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginStatusMessage, setLoinStatusMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, message } = await login(username, password);
    setLoginSuccess(success);
    setLoinStatusMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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

        <form onSubmit={handleLogin}>
          <Stack gap={4}>
            <Field label="Email/Username" errorText="This field is required">
              <Input
                onChange={handleUsernameChange}
                value={username}
                type="text"
                placeholder="Email"
                required
              />
            </Field>
            <Field label="Password" errorText="This field is required">
              <PasswordInput
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
                required
              />
            </Field>
            <Button type="submit" colorPalette="teal" size="lg">
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
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Link>
            </HStack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
