import { Box, Button, Container, FormControl, FormLabel, Input, NumberInput, NumberInputField, Radio, RadioGroup, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState(0);
  const [distanceUnit, setDistanceUnit] = useState("yards");
  const [tariff, setTariff] = useState("");
  const [fare, setFare] = useState(null);
  const toast = useToast();

  const calculateFare = () => {
    // Define tariffs
    const yardsPerUnit = 168; // 168 yards per £0.20
    const tariffs = {
      1: { name: "Tariff 1", startFee: 3.0, distanceRate: 0.2 / yardsPerUnit },
      2: { name: "Tariff 2", startFee: 3.5, distanceRate: 0.2 / yardsPerUnit },
      3: { name: "Tariff 3", startFee: 4.0, distanceRate: 0.2 / yardsPerUnit },
      4: { name: "Tariff 4", startFee: 5.0, distanceRate: 0.2 / yardsPerUnit },
    };

    // Convert yards to miles for calculation
    const yardsPerMile = 1760;
    const distanceInMiles = distance / yardsPerMile;

    // Calculate fare
    const selectedTariff = tariffs[tariff];
    if (selectedTariff) {
      const totalFare = selectedTariff.startFee + distanceInMiles * selectedTariff.distanceRate;
      setFare(totalFare.toFixed(2));
    } else {
      toast({
        title: "Error",
        description: "Please select a valid tariff.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // TODO: Determine the tariff based on the provided date and time
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    // TODO: Determine the tariff based on the provided date and time
  };

  const handleDistanceChange = (value) => {
    const numberValue = parseFloat(value);
    setDistance(distanceUnit === "miles" ? numberValue * 1760 : numberValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFare();
  };

  return (
    <Container maxW="container.sm">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="date">Date of Journey</FormLabel>
          <Input id="date" type="date" onChange={handleDateChange} value={date} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="time">Time of Journey</FormLabel>
          <Input id="time" type="time" onChange={handleTimeChange} value={time} />
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Distance</FormLabel>
          <RadioGroup onChange={setDistanceUnit} value={distanceUnit}>
            <Stack spacing={5} direction="row">
              <Radio value="yards">Yards</Radio>
              <Radio value="miles">Miles</Radio>
            </Stack>
          </RadioGroup>
          <FormLabel htmlFor="distance">Distance ({distanceUnit})</FormLabel>
          <NumberInput min={0} onChange={handleDistanceChange}>
            <NumberInputField id="distance" />
          </NumberInput>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Tariff</FormLabel>
          <RadioGroup onChange={setTariff} value={tariff}>
            <Stack spacing={5} direction="row">
              <Radio value="1">Tariff 1</Radio>
              <Radio value="2">Tariff 2</Radio>
              <Radio value="3">Tariff 3</Radio>
              <Radio value="4">Tariff 4</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">
          Calculate Fare
        </Button>
        {fare && (
          <Box>
            <Text fontSize="xl">Total Fare: £{fare}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
