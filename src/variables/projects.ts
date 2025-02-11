import {FaJira, FaSlack, FaSpotify} from "react-icons/fa";
import {SiAdobexd, SiJira} from "react-icons/si";
import {RiInvisionLine} from "react-icons/ri";

export const projectsData = [
    {
        projectName: "Chakra Soft UI Version",
        CompanyIcon: SiAdobexd,
        members: [
            { name: "John Doe", src: "https://bit.ly/dan-abramov" },
            { name: "Jane Smith", src: "https://bit.ly/ryan-florence" },
            { name: "Mike Johnson", src: "https://bit.ly/kent-c-dodds" },
        ],
        budget: 10000,
        completion: 75,
    },
    {
        projectName: "Add Progress Track",
        CompanyIcon: SiJira,
        members: [
            { name: "Alice Brown", src: "https://bit.ly/prosper-baba" },
            { name: "Bob White", src: "https://bit.ly/code-beast" },
        ],
        budget: 20000,
        completion: 50,
    },
    {
        projectName: "Fix Platform Errors",
        CompanyIcon: FaSlack,
        members: [
            { name: "Charlie Green", src: "https://bit.ly/sage-adebayo" },
            { name: "David Black", src: "https://bit.ly/ryan-florence" },
            { name: "Eve Blue", src: "https://bit.ly/dan-abramov" },
        ],
        budget: 15000,
        completion: 90,
    },
    {
        projectName: "Launch our Mobile App",
        CompanyIcon: FaSpotify,
        members: [
            { name: "Frank Yellow", src: "https://bit.ly/kent-c-dodds" },
            { name: "Grace Red", src: "https://bit.ly/prosper-baba" },
        ],
        budget: 25000,
        completion: 30,
    },
    {
        projectName: "Add the New Pricing Page",
        CompanyIcon: FaJira,
        members: [
            { name: "Frank Yellow", src: "https://bit.ly/kent-c-dodds" },
            { name: "Grace Red", src: "https://bit.ly/prosper-baba" },
        ],
        budget: 25000,
        completion: 30,
    },
    {
        projectName: "Redesign New Online Shop",
        CompanyIcon: RiInvisionLine,
        members: [
            { name: "Frank Yellow", src: "https://bit.ly/kent-c-dodds" },
            { name: "Grace Red", src: "https://bit.ly/prosper-baba" },
        ],
        budget: 25000,
        completion: 30,
    },
];