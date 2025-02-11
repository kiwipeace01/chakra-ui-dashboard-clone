import { Table, Text } from "@chakra-ui/react";
import ProjectsTableRow from "@/components/Dashboard/ProjectsTableCard/ProjectsTableRow";
import {Project} from "@/interfaces";

interface ProjectsTableProps {
    projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
    return (
        <>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader><Text color={"slategrey"} fontSize={"xs"}>COMPANIES</Text></Table.ColumnHeader>
                    <Table.ColumnHeader><Text color={"slategrey"} fontSize={"xs"}>MEMBERS</Text></Table.ColumnHeader>
                    <Table.ColumnHeader><Text color={"slategrey"} fontSize={"xs"}>BUDGET</Text></Table.ColumnHeader>
                    <Table.ColumnHeader><Text color={"slategrey"} fontSize={"xs"}>COMPLETION</Text></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {projects.map((project, index) => (
                    <ProjectsTableRow
                        key={index}
                        projectName={project.projectName}
                        CompanyIcon={project.CompanyIcon}
                        members={project.members}
                        budget={project.budget}
                        completion={project.completion}
                    />
                ))}
            </Table.Body>
        </Table.Root>
        </>
    );
}