import {Project} from "@/interfaces";
import {Box, Card, Icon, Span} from "@chakra-ui/react";
import ProjectsTable from "@/components/Dashboard/ProjectsTableCard/ProjectsTable";
import {FaCheckCircle} from "react-icons/fa";

interface ProjectsTableCardProps {
    projects: Project[];
}
export default function ProjectsTableCard({ projects }: ProjectsTableCardProps) {
    return (
        <Card.Root variant={"solid"} borderRadius="20px" shadow="md" bg={"white"}>
            <Card.Body padding={"4"}>
                <Card.Title fontSize="xl">
                    <Box>Projects</Box>
                    <Span color={"lightslategrey"} fontSize={"sm"}><Icon color={"green.500"}><FaCheckCircle></FaCheckCircle></Icon> 30 done this month</Span>
                </Card.Title>
                <br />
                <Card.Description>
                    <ProjectsTable projects={projects}/>
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}