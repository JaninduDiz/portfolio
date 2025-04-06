import CodeScale from './assets/about/codescale.svg'

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
            "Developed the official apps for the startup for both Android and iOS using hybrid framework. Worked on backend integrations and implemented new features.",
        ],
        dateText: "05/2024 – 02/2025",
        icon: CodeScale,
        bgColor: "rgb(233, 30, 99)"
    },
    {
        title: "Software Engineer",
        subtitle: "CodeScale Pvt Ltd, Sri Lanka",
        workDescription: [
            "Developed full-stack solutions and integrated APIs. Collaborated in agile sprints with team members for app releases.",
        ],
        dateText: "10/2023 – 04/2024",
        icon: CodeScale,
        bgColor: "rgb(33, 150, 243)"
    },

];

export { BIO, LINKS, EXPERIENCES };
