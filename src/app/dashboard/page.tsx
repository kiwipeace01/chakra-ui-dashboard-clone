import { Flex, Box } from '@chakra-ui/react';
import InfoCard from "@/components/Dashboard/InfoCard/InfoCard";
import ReadMoreCard from "@/components/Dashboard/ReadMoreCard/ReadMoreCard";
import {infoCardsData} from "@/variables/statistics";
import {readMoreCardsData} from "@/variables/blogs";
import {projectsData} from "@/variables/projects";
import {ordersData} from "@/variables/orders";
import OrdersOverviewCard from "@/components/Dashboard/OrdersOverviewCard/OrdersOverviewCard";
import ProjectsTableCard from "@/components/Dashboard/ProjectsTableCard/ProjectsTableCard";

export default function Dashboard() {
    return (
        <Flex direction="column" p={4} gap={6} bg={"gray.100"}>
            <Flex gap={6} flex="1">
                {infoCardsData.map((card, index) => (
                    <Box key={index} flex="1" borderRadius="20px">
                        <InfoCard
                            title={card.title}
                            value={card.value}
                            prefix={card.prefix}
                            percentageChange={card.percentageChange}
                            IconComponent={card.IconComponent}
                        />
                    </Box>
                ))}
            </Flex>
            <Flex gap={6} flex="2">
                {readMoreCardsData.map((card, index) => (
                    <Box key={index} flex={index === 0 ? "3" : "2"}>
                        <ReadMoreCard
                            imageLocation={card.imageLocation}
                            header={card.header}
                            title={card.title}
                            description={card.description}
                            pageUrl={card.pageUrl}
                            imageUrl={card.imageUrl}
                            fontType={card.fontType}
                        />
                    </Box>
                ))}
            </Flex>
            <Flex gap={6} flex="1">
                <Box flex="2" borderRadius="20px">
                    <ProjectsTableCard projects={projectsData}/>
                </Box>
                <Box flex="1" borderRadius="20px">
                    <OrdersOverviewCard orders={ordersData} />
                </Box>
            </Flex>
        </Flex>
    );
}