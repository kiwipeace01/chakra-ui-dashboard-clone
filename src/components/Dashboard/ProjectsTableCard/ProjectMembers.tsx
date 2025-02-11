import {Avatar, AvatarGroup} from "@chakra-ui/react";
import {ProjectMember} from "@/interfaces";

interface ProjectMembersProps{
    projectMembers: ProjectMember[]
}

export default  function ProjectMembers({projectMembers} : ProjectMembersProps) {
    return (
        <AvatarGroup gap="0" spaceX="-3" size="lg">
            {projectMembers.map((member, index) => (
                <Avatar.Root key={index}>
                    <Avatar.Fallback name={member.name} />
                    <Avatar.Image src={member.src} />
                </Avatar.Root>
            ))}
        </AvatarGroup>
    );
}