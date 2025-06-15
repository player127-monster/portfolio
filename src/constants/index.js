 
import meta from '../assets/images/meta.png';
import tesla from '../assets/images/tesla.png';
import starbucks from '../assets/images/starbucks.png';
import shopify from '../assets/images/shopify.png';


import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    redux,
    tailwindcss,
    linkedin,
    contact,
} from '../assets/icons';

export const skills = [
    {
        imageUrl:html,
        name:"HTML",
        type:"Frontend",
    },
    {
        imageUrl:css,
        name:"CSS",
        type:"Frontend",
    },
    {
        imageUrl:express,
        name:"EXPRESS",
        type:"Backend",
    },
    {
        imageUrl:git,
        name:"GIT",
        type:"Version Control",
    },
    {
        imageUrl:mongodb,
        name:"MongoDB",
        type:"Database",
    },
    {
        imageUrl:javascript,
        name:"JavaScript",
        type:"Frontend",
    },
    {
        imageUrl:nodejs,
        name:"NodeJS",
        type:"Backend",
    },
    {
        imageUrl:github,
        name:"GIT HUB",
        type:"Version Control",
    },
    
    {
        imageUrl:react,
        name:"React",
        type:"Frontend",
    },
    {
        imageUrl:tailwindcss,
        name:"CSS",
        type:"Frontend",
    },
];

export const experiences =[
    {
        title:"E-Commerce site using MERN Stack",
        client:"Final Year Project",
        icon:tesla,
        iconBg:"#accbe1",
        timeline:"2-months",
        points:[
            ""
        ],
    },
    {
        title:"React Tailwindcss Website",
        client:"Gobi Studio",
        icon:meta,
        iconBg:"#accbe1",
        timeline:"3-Days",
        points:[
            ""
        ],
    },
    {
        title:"Billing System",
        client:"S.D. Trading",
        icon:shopify,
        iconBg:"#accbe1",
        timeline:"10-Days",
        points:[
            ""
        ],
    },
    {
        title:"Portfolio - Static Website",
        client:"",
        icon:starbucks,
        iconBg:"#accbe1",
        timeline:"3-Days",
        points:[
            ""
        ],
    },
];

export const socialLinks=[
    {
        name:"Contact",
        iconUrl:contact,
        link:"/contact",
    },
    {
        name:"GitHub",
        iconUrl:github,
        link:"https://github.com/player127-monster",
    },
    {
        name:"LinkedIN",
        iconUrl:linkedin,
        link:"/contact",
    }
]

