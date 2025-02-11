
import Order from "@/components/Dashboard/OrdersOverviewCard/Order";
import {OrderDetails} from "@/interfaces";
import {TimelineRoot} from "@/components/ui/timeline";

interface OrdersTimelineProps{
    orders: OrderDetails[];
}

export default function OrdersTimeline({ orders }: OrdersTimelineProps) {
    return (
        <TimelineRoot>
            {orders.slice(0, 7).map((order, index) => (
                <Order
                    key={index}
                    CompanyIcon={order.CompanyIcon}
                    companyName={order.companyName}
                    orderDescription={order.orderDescription}
                    date={order.date}
                    time={order.time}
                />
            ))}
        </TimelineRoot>
    );
}