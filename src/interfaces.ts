import {IconType} from "react-icons";

export interface OrderDetails {
    CompanyIcon: React.ElementType;
    companyName: string;
    orderDescription: string;
    date: string;
    time: string;
}

export interface OrderItem extends OrderDetails{
    key: number
}

export interface Statistics {
    title: string;
    value: number;
    prefix?: string | undefined;
    percentageChange: number;
    IconComponent: IconType;
}

enum FontType {
    Light = "light",
    Default = "default"
}

enum ImageLocation {
    Background = "background",
    Side = "side"
}

export interface BlogDetails {
    header?: string;
    title: string;
    description: string;
    pageUrl: string;
    imageUrl: string;
    imageLocation: ImageLocation;
    fontType: FontType;
}

export interface Project {
    projectName: string;
    members: { name: string; src: string }[];
    budget: string;
    completion: number;
    CompanyIcon: React.ElementType;
}

export interface ProjectItem extends Project {
    key: number
}

export interface ProjectMember{
    name: string
    src: string
}