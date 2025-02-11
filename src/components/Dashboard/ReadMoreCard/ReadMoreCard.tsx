import { Box, Card, Icon, Image, Link, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import {BlogDetails as ReadMoreCardProps} from "@/interfaces";

export default function ReadMoreCard({ header, title, description, pageUrl, imageUrl, imageLocation = "side" , fontType = "default"}: ReadMoreCardProps) {
    const textColor = fontType === "light" ? "white" : "black";
    const headerColor = fontType === "light" ? "white" : "gray.500";
    const descriptionColor = fontType === "light" ? "white" : "gray.400";

    return (
        <Card.Root flexDirection="row" overflow="hidden" borderRadius="20px" shadow="md" height={"300px"}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                flex="1"
                backgroundImage={imageLocation === "background" ? `url(${imageUrl})` : undefined}
                backgroundSize={imageLocation === "background" ? "cover" : undefined}
                backgroundPosition={imageLocation === "background" ? "center" : undefined}
            >
                <Card.Body>
                    <Card.Title mb="2">
                        <Text fontSize="sm" color={headerColor} fontWeight="bold" textAlign="left">
                            {header}
                        </Text>
                    </Card.Title>
                    <Card.Title mb="2">
                        <Text fontSize="20px" color={textColor}>
                            {title}
                        </Text>
                    </Card.Title>
                    <Card.Description>
                        <Text fontSize="sm" color={descriptionColor}>
                            {description}
                        </Text>
                    </Card.Description>
                </Card.Body>
                <Card.Footer mt="auto">
                    <Link href={pageUrl}><Text fontSize={"10px"} color={textColor}>Read More</Text></Link>
                    <Icon fontSize={"xs"} color={textColor}><FaArrowRight /></Icon>
                </Card.Footer>
            </Box>
            {imageLocation === "side" && (
                <Image
                    height={"300px"}
                    width={"400px"}
                    padding="4"
                    src={imageUrl}
                    borderRadius="30px"
                />
            )}
        </Card.Root>
    );
}