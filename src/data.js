import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
    {id: 1, href: "#home", text: "home"},
    {id: 2, href: "#about", text: "about"},
    {id: 3, href: "#services", text: "services"},
    {id: 4, href: "#tours", text: "tours"},
];

export const socialLinks = [
    {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"},
];

export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw ",
        title: "saving money",
        text: " Lorem ipsum dolor sit amet consectetur adipisicingelit. Asperiores, officia.",
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: " endless hiking",
        text: " Lorem ipsum dolor sit amet consectetur adipisicingelit. Asperiores, officia.",
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: " Lorem ipsum dolor sit amet consectetur adipisicingelit. Asperiores, officia.",
    },
];

export const tours = [
    {
        id: 1,
        date: "august 26th, 2020",
        tourTitle: "Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        img: tourImg1,
        icon: "fas fa-map",
        country: "china",
        duration: "6 days",
        price: "from $2100",
    },
    {
        id: 2,
        date: "october 1th, 2020",
        tourTitle: "best of indonesia",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        img: tourImg2,
        icon: "fas fa-map",
        country: "indonesia",
        duration: "11 days",
        price: "from $1400",
    },
    {
        id: 3,
        date: "september 15th, 2020",
        tourTitle: "explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        img: tourImg3,
        icon: "fas fa-map",
        country: "hong kong",
        duration: "8 days",
        price: "from $5000",
    },
    {
        id: 4,
        date: "december 5th, 2019",
        tourTitle: "kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        img: tourImg4,
        icon: "fas fa-map",
        country: "kenya",
        duration: "20 days",
        price: "from $3300",
    },
];
