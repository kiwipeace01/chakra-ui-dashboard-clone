import { Flex, Box } from '@chakra-ui/react';

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh" p={4} gap={6}>
            <Flex gap={6} flex="1">
                <Box flex="1" bg="blue.500">Item 1</Box>
                <Box flex="1" bg="green.500">Item 2</Box>
                <Box flex="1" bg="red.500">Item 3</Box>
                <Box flex="1" bg="yellow.500">Item 4</Box>
            </Flex>
            <Flex gap={6} flex="1">
                <Box flex="2" bg="purple.500">Item 5</Box>
                <Box flex="1" bg="orange.500">Item 6</Box>
            </Flex>
            <Flex gap={6} flex="1">
                <Box flex="1" bg="teal.500">Item 7</Box>
                <Box flex="2" bg="pink.500">Item 8</Box>
            </Flex>
            <Flex gap={6} flex="1">
                <Box flex="2" bg="cyan.500">Item 9</Box>
                <Box flex="1" bg="gray.500">Item 10</Box>
            </Flex>
        </Flex>
    );
}