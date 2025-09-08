import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import FeatureCard from "./FeaturesCard";

import "../styles/Feature.css";

const data = [
  {
    icon: <TbTruckDelivery className="feature-icon" />,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Fill className="feature-icon" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount className="feature-icon" />,
    title: "Member Discount",
    desc: "On order over $99",
  },
  {
    icon: <MdSupportAgent className="feature-icon" />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

export default function Feature() {
  return (
    <div className="features-container">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
