import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import ISPBasics from "./ISPBasics";
import { getData } from "@/services/apiClient";
import ISPDetails from "./ISPDetails";

const Hero = () => {
  const getCarDetails = async function () {
    return getData(`/`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`allISPs`],
    queryFn: getCarDetails,
  });
  console.log(data);

  return (
    <Box as="main">
      <Icon as={FaHome} boxSize={8} color={"grey"} />
      <span>Home</span>
      <Tabs orientation="vertical" align="center" variant="verticalNoUnderline">
        <TabList>
          {error
            ? "Something went wrong!"
            : isLoading
            ? "loading"
            : data.map((ISP) => {
                return (
                  <Tab key={uuid()}>
                    <ISPBasics ISPData={ISP} />
                  </Tab>
                );
              })}
        </TabList>

        <TabPanels>
          {error
            ? "Something went wrong!"
            : isLoading
            ? "loading"
            : data.map((ISP) => {
                return (
                  <TabPanel key={uuid()}>
                    <ISPDetails ISPData={ISP} />
                  </TabPanel>
                );
              })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Hero;
