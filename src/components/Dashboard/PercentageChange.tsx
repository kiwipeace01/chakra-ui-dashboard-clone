import {Text} from "@chakra-ui/react";

interface PercentageChangeProps {
    change: number;
    padding: number;
}

export default function PercentageChange({ change, padding = 2 }: PercentageChangeProps) {
    const color = change >= 0 ? "green.500" : "red.500";
    const sign = change >= 0 ? "+" : "";

    return (
        <Text fontWeight="bold" as="span" color={color} padding={padding}>
            {sign}{change}%
        </Text>
    );
}