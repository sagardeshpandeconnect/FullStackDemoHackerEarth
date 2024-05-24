import { Icon, Flex } from "@chakra-ui/react";
import { BsDatabase } from "react-icons/bs";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const ISPBasics = ({ ISPData }) => {
  const { name, lowest_price } = ISPData;
  return (
    <>
      <Flex alignItems={"center"}>
        <Icon as={BsDatabase} boxSize={6} color={"grey"} />
        <span>{name}</span>
      </Flex>
      <Flex alignItems={"center"}>
        <span>{lowest_price}</span>
        <Icon as={IoChevronForwardCircleOutline} boxSize={6} color={"grey"} />
      </Flex>
    </>
  );
};

export default ISPBasics;
