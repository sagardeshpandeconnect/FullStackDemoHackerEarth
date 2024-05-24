import { Box, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" border="5px" borderColor="red" height={20} padding={2}>
      <Flex>
        <Box p="4" bg="red">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green">
          Box 2
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
