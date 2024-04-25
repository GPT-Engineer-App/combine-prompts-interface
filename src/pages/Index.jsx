import React from "react";
import { Box, Button, Flex, Input, Text, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [prompts, setPrompts] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleAddPrompt = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Error",
        description: "Prompt cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setPrompts([...prompts, inputValue]);
    setInputValue("");
  };

  const handleDeletePrompt = (index) => {
    const newPrompts = prompts.filter((_, i) => i !== index);
    setPrompts(newPrompts);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading mb={6}>Prompt Engineering Interface</Heading>
      <Flex>
        <Input placeholder="Enter a new prompt" value={inputValue} onChange={handleInputChange} size="md" />
        <Button leftIcon={<FaPlus />} colorScheme="blue" ml={2} onClick={handleAddPrompt}>
          Add
        </Button>
      </Flex>
      <Box w="100%">
        {prompts.length > 0 ? (
          prompts.map((prompt, index) => (
            <Flex key={index} align="center" justify="space-between" p={2} borderWidth="1px" borderRadius="lg" mb={2}>
              <Text>{prompt}</Text>
              <Button size="sm" colorScheme="red" onClick={() => handleDeletePrompt(index)}>
                <FaTrash />
              </Button>
            </Flex>
          ))
        ) : (
          <Text>No prompts added yet.</Text>
        )}
      </Box>
    </VStack>
  );
};

export default Index;
