import React from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';
import CustomDrawer from '@/widgets/CustomDrawer';

const Dashboard: React.FC = () => {
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
          <Link color="auto">Home</Link>
          <Link color="auto">Profile</Link>
          <Link color="auto">Settings</Link>
        </HStack>
      </HStack>

      <Box flex="1" p={4}>
        <Box p={4} borderRadius="md" height="full">
          <Text>Main Content Area</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;