import {MdShoppingCart} from "react-icons/md";
import {IoDocumentText, IoWallet} from "react-icons/io5";
import {TbWorld} from "react-icons/tb";

export const infoCardsData = [
    {
        "title": "Today's Money",
        "value": 53000,
        "prefix": "$",
        "percentageChange": 55,
        "IconComponent": IoWallet
    },
    {
        "title": "Today's Users",
        "value": 2300,
        "prefix": "",
        "percentageChange": 5,
        "IconComponent": TbWorld
    },
    {
        "title": "New Clients",
        "value": 3052,
        "prefix": "+",
        "percentageChange": -14,
        "IconComponent": IoDocumentText
    },
    {
        "title": "Total Sales",
        "value": 173000,
        "prefix": "$",
        "percentageChange": 8,
        "IconComponent": MdShoppingCart
    }
]