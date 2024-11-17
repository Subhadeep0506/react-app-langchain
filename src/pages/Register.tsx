import React, { useState } from "react";
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
import Logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import RegisterFormInputs from "@/interfaces/auth/register";
import registerUser from "@/services/auth/register";

const RegisterPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerStatusMessage, setRegisterStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    setIsLoading(true);
    const { success, message } = await registerUser(data);
    setRegisterSuccess(success);
    setRegisterStatusMessage(message);
    setIsLoading(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      if (success) {
        navigate("/login");
      }
    }, 3000); 
  };

  return (
    <Flex height="100vh" align="center" justify="center">
      <Box
        maxW="md"
        mx="auto"
        p={6}
        borderWidth={2}
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
            <Field label="Username" errorText={errors.username ? "This field is required" : ""}>
              <Input
                {...register("username", { required: true })}
                type="text"
                placeholder="Username"
              />
            </Field>
            <Field label="Email" errorText={errors.email ? "This field is required" : ""}>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
              />
            </Field>
            <Field label="Password" errorText={errors.password ? "This field is required" : ""}>
              <PasswordInput
                {...register("password", { required: true })}
                placeholder="Password"
              />
            </Field>
            <Field label="Confirm Password" errorText={errors.confirmPassword ? "This field is required" : ""}>
              <PasswordInput
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
              />
            </Field>
            <Button type="submit" colorPalette="teal" size="lg" loading={isLoading}>
              Register
            </Button>
            {showAlert && (
              <Alert
                status={registerSuccess ? "success" : "error"}
                title={registerStatusMessage}
                variant="subtle"
                marginBottom={4}
              />
            )}
            <HStack>
              <Text fontSize={12}>Already have an account?</Text>
              <Link type="submit" fontSize={12} margin={0} fontWeight="bold" onClick={() => navigate("/login")}>
                Log in
              </Link>
            </HStack>
          </Stack>
        </form>
      </Box>
    </Flex>);
};

export default RegisterPage;