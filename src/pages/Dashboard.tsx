import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton
} from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { Toaster, toaster } from "@/components/ui/toaster"
import CustomDrawer from '@/widgets/CustomDrawer';
import { FaUser, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoutUser from '@/services/auth/logout';

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const handleMenuSelection = async (value: any) => {
    const direction = value.value;
    if (direction == "logout") {
      const { success, message } = await logoutUser();
      if (!success) {
        toaster.create({
          title: message,
          type: "error",
        })
        setTimeout(() => {
          navigate("/login");
        }, 3000)
      } else {
        navigate("/login");
      }
    } else {
      navigate(direction);
    }
  }

  return (
    <Flex direction="column" height="100vh">
      <HStack
        as="nav"
        bg="white.800"
        dropShadow="0px 2px 10px rgba(0, 0, 0, 0.5)"
        color="auto"
        padding={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <CustomDrawer />
        <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
        <HStack gap={4} marginLeft="auto">
          <MenuRoot onSelect={handleMenuSelection}>
            <MenuTrigger asChild>
              <HStack gap={1}>
                <IconButton variant="ghost" size="sm">
                  <FaUser />
                </IconButton>
                <Text>{username || "Username"}</Text>
              </HStack>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="profile" valueText="profile">
                <FaUserEdit />
                <Box flex="1">Profile</Box>
              </MenuItem>
              <MenuItem value="logout" valueText="logout">
                <FaSignOutAlt />
                <Box flex="1">LogOut</Box>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </HStack>
      </HStack>

      <Box flex="1" p={4}>
        <Box p={4} borderRadius="md" height="full">
          <Text>Main Content Area</Text>
        </Box>
      </Box>
      <Toaster />
    </Flex>
  );
};

export default Dashboard;