import {Table, Text, Icon, HStack, Progress} from "@chakra-ui/react";
import ProjectMembers from "@/components/Dashboard/ProjectsTableCard/ProjectMembers";
import { ProjectItem as ProjectsTableRowProps } from "@/interfaces";
import {formatValueWithPrefix} from "@/utils";


export default function ProjectsTableRow({ projectName, CompanyIcon, members, budget, completion }: ProjectsTableRowProps) {
    return (
        <>
            <Table.Row>
                <Table.Cell>
                    <HStack>
                        <Icon>
                            <CompanyIcon />
                        </Icon>
                        <Text>{projectName}</Text>
                    </HStack>
                </Table.Cell>
                <Table.Cell>
                    <ProjectMembers projectMembers={members}></ProjectMembers>
                </Table.Cell>
                <Table.Cell>
                  <Text>{formatValueWithPrefix(budget, "$")}</Text>
                </Table.Cell>
                <Table.Cell>
                    <Progress.Root value={completion} size={"xs"} colorPalette={"teal"}>
                        <Progress.Label><Text fontSize={15} color={"teal"}>{completion}%</Text></Progress.Label>
                        <Progress.Track>
                            <Progress.Range />
                        </Progress.Track>
                    </Progress.Root>
                </Table.Cell>
            </Table.Row>
        </>
    );
}