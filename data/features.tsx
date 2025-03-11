import {HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Fast and Reliable",
        description: "We provide fast and reliable service to our customers. Our team is always ready to help you with any problem you may have.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "Unlimited Amount of New Leads",
        description: "Generate an unlimited number of new leads with a fully customizable experience. Filter the needed options to find your perfect client.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "User Friendly",
        description: "Our service is designed to be user friendly. You can easily navigate through the app and find what you need.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];