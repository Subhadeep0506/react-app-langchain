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
import { Field } from "@/components/ui/field";
import { Alert } from "@/components/ui/alert";
import { PasswordInput } from "@/components/ui/password-input";
import Logo from "../assets/logo.png";

const LoginPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
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

        <form onSubmit={handleLogin}>
          <Stack gap={4}>
            <Field label="Email/Username" errorText="This field is required">
              <Input type="text" placeholder="Email" required />
            </Field>
            <Field label="Password" errorText="This field is required">
              <PasswordInput type="password" placeholder="Password" required />
            </Field>
            <Button type="submit" colorPalette="teal" size="lg">
              Login
            </Button>
              {showAlert && (
              <Alert
                status="success"
                variant="subtle"
                title="There was an error processing your request"
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
