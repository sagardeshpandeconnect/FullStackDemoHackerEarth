import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";

const ISPDetails = ({ ISPData }) => {
  const {
    name,
    lowest_price,
    image,
    description,
    contact_no,
    email,
    max_speed,
    rating,
    url,
  } = ISPData;

  return (
    <Card maxW="md">
      <CardBody>
        <Heading size="md">{name}</Heading>
        <Image
          src={image}
          alt={name}
          borderRadius="lg"
          // minHeight={20}
          height={36}
          marginTop={2}
        />
        <Stack mt="6" spacing="3">
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "100px",
          },
        }}
      >
        <Button variant="solid" colorScheme="blue">
          Know More
        </Button>
        <Button variant="solid" colorScheme="blue">
          Download
        </Button>
        <Button variant="solid" colorScheme="blue">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ISPDetails;
