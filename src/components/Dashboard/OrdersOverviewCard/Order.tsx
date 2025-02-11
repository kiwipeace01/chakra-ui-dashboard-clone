import moment from "moment";
import {OrderItem as OrderProp} from "@/interfaces";
import {TimelineConnector, TimelineContent, TimelineDescription, TimelineTitle, TimelineItem} from "@/components/ui/timeline";


export default function Order( {CompanyIcon, companyName, orderDescription, date, time } : OrderProp ) {
    const dateTime = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm A").toDate();
    const formattedDate = dateTime.toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).toUpperCase();

    return (
        <TimelineItem>
            <TimelineConnector>
                <CompanyIcon />
            </TimelineConnector>
            <TimelineContent>
                <TimelineTitle>{orderDescription}</TimelineTitle>
                <TimelineDescription>{formattedDate}</TimelineDescription>
            </TimelineContent>
        </TimelineItem>
    );
}