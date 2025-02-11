import {Card, Flex, IconButton, Text} from "@chakra-ui/react";
import PercentageChange from "@/components/Dashboard/PercentageChange";
import {formatValueWithPrefix} from "@/utils";
import { Statistics as InfoCardProps } from "@/interfaces";

export default function InfoCard({ title, value, prefix = "", percentageChange, IconComponent }: InfoCardProps) {
    return (
        <Card.Root  borderRadius="20px" shadow="md">
            <Card.Body padding={"4"}>
                <Flex justify="space-between" align="center">
                    <Flex direction="column">
                        <Card.Title color="gray.400" fontSize="sm">
                            {title}
                        </Card.Title>
                        <Card.Description>
                            <Text color="black" fontWeight="bold" fontSize="xl" as="span">
                                {formatValueWithPrefix(value, prefix)}
                            </Text>
                            <PercentageChange change={percentageChange}/>
                        </Card.Description>
                    </Flex>
                    <IconButton size={"lg"} rounded="25%" bg="turquoise">
                        <IconComponent/>
                    </IconButton>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}