import CodeScale from './assets/experience-education/codescale.svg'
import Dharmaraja from './assets/experience-education/dharmaraja.svg'
import SLIIT from './assets/experience-education/sliit-logo.svg'

const LINKS = {
    resume: "https://drive.google.com/file/d/1iJi_IuHHX1OXqRAm-qVPAjYZq7aE7o0G/view?usp=sharing",

};

const BIO = {
    name: "Janindu Dissanayake",
    roles: [
        "a Software Engineer",
        "a Freelancer",
        "a Web Developer",
        "a Mobile Developer",
        "a Full Stack Developer",
        "a Frontend Developer",
    ],
    social: [
        {
            network: "linkedin",
            href: "https://www.linkedin.com/in/janindu-dissanayake/",
        },
        {
            network: "github",
            href: "https://github.com/JaninduDiz",
        },
        {
            network: "email",
            href: "mailto:janindu001@gmail.com",
        },
    ],
};

const EXPERIENCES = [
    {
        title: "Associate Software Engineer",
        subtitle: "CodeScale Pvt Ltd, Sri Lanka",
        workDescription: [
            "Developed responsive front-end web and mobile applications using React, React Native, and iOS technologies",
            "Collaborated effectively in a remote, agile work environment with cross-functional team members"
        ],
        dateText: "05/2024 – 02/2025",
        icon: CodeScale,
        bgColor: "rgb(233, 30, 99)"
    },
    {
        title: "Intern - Software Engineer",
        subtitle: "CodeScale Pvt Ltd, Sri Lanka",
        workDescription: [
            "Developed front-end web and mobile applications and integrated APIs",
            "Collaborated in agile sprints with team members",
        ],
        dateText: "10/2023 – 04/2024",
        icon: CodeScale,
        bgColor: "rgb(33, 150, 243)"
    },

];

const EDUCATION = [
    {
        title: "BSc (Hons) in Information Technology ",
        subtitle: "Sri Lanka Institute of Information Technology ",
        workDescription: ["Graduated with Honours", "Specialized in Software Engineering"],
        dateText: "2021 – 2024",
        icon: SLIIT,
        bgColor: "#E91E63",
    },
    {
        title: "GCE A/L - Physical Stream",
        subtitle: "Dharmaraja College, Kandy",
        workDescription: ["Combined Maths, Physics, ICT"],
        dateText: "2007 – 2020",
        icon: Dharmaraja,
        bgColor: "#E91E63",
    },
];

export { BIO, LINKS, EXPERIENCES, EDUCATION };
