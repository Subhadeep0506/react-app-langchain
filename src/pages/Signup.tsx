import React from "react";
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
import Logo from "../assets/logo.png";
import { Field } from "@/components/ui/field";

const SignupPage: React.FC = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
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
            <Field label="Username" errorText="This field is required">
              <Input type="text" placeholder="Username" required />
            </Field>
            <Field label="Email" errorText="This field is required">
              <Input type="email" placeholder="Email" required />
            </Field>
            <Field label="Password" errorText="This field is required">
              <Input type="password" placeholder="Password" required />
            </Field>
            <Field label="Confirm password" errorText="This field is required">
              <Input type="password" placeholder="Confirm Password" required />
            </Field>
            <Button type="submit" colorPalette="teal" size="lg">
              Signup
            </Button>
            <HStack>
              <Text fontSize={12}>Don't have an account?</Text>
              <Link type="submit" fontSize={12} margin={0} fontWeight="bold">
                Log in
              </Link>
            </HStack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignupPage;
