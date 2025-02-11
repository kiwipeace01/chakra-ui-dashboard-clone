import {Box, Card, Span, Text} from "@chakra-ui/react";
import OrdersTimeline from "@/components/Dashboard/OrdersOverviewCard/OrdersTimeline";
import {OrderDetails} from "@/interfaces";
import PercentageChange from "@/components/Dashboard/PercentageChange";

interface OrdersOverviewCardProps{
    orders: OrderDetails[];
}

export default function OrdersOverviewCard({ orders }: OrdersOverviewCardProps) {
    return (
        <Card.Root variant={"solid"} borderRadius="20px" shadow="md" bg={"white"}>
            <Card.Body padding={"4"}>
                <Card.Title fontSize="xl">
                    <Box>Orders overview</Box>
                    <Span color={"lightslategrey"} fontSize={"sm"}><PercentageChange change={30} padding={0} /> this month</Span>
                </Card.Title>
                <br />
                <Card.Description>
                    <OrdersTimeline orders={orders} />
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}