import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const isXsScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "240px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", md: "block" }}>
        <Box p={4}>
          <Heading as="h2" size="md">
            Aside Section
          </Heading>
          <Text>This is where AsideLinks will go.</Text>
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box p={8} textAlign="center">
          <VStack spacing={6}>
            <Heading as="h1" size="2xl">
              Welcome to GloDex
            </Heading>
            <Text fontSize="xl">
              Your one-stop index of country feasibility and experience
              information for travel logistics in clinical trials.
            </Text>
            {isXsScreen && (
              <Text fontSize="md">
                Viewing on a small screen? Check out the settings for more
                options!
              </Text>
            )}
          </VStack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
