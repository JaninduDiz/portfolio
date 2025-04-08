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
        bgColor: "rgb(52, 56, 72)"
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
        bgColor: "rgb(33, 83, 124)"
    },

];

const EDUCATION = [
    {
        title: "BSc (Hons) in Information Technology ",
        subtitle: "Sri Lanka Institute of Information Technology ",
        workDescription: ["Graduated with Honours", "Specialized in Software Engineering"],
        dateText: "2021 – 2024",
        icon: SLIIT,
        bgColor: "rgb(33, 83, 124)"
    },
    {
        title: "GCE A/L - Physical Stream",
        subtitle: "Dharmaraja College, Kandy",
        workDescription: ["Combined Maths, Physics, ICT"],
        dateText: "2007 – 2020",
        icon: Dharmaraja,
        bgColor: "rgb(52, 56, 72)"
    },
];

const SKILLS =
{
    intro: "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    skills: [{

        title: "Languages & Databases",
        items: [
            {
                icon: "images/skills/js.png",
                title: "JavaScript"
            },
            {
                icon: "images/skills/typescript.png",
                title: "Typescript"
            },
            {
                icon: "images/skills/swift.png",
                title: "Swift"
            },
            {
                icon: "images/skills/kotlin.jpeg",
                title: "Kotlin"
            },
            {
                icon: "images/skills/python.png",
                title: "Python"
            },
            {
                icon: "images/skills/mongo-db.png",
                title: "MongoDB"
            },
            {
                icon: "images/skills/mysql.png",
                title: "MySQL"
            }
        ]
    },
    {
        title: "Frameworks & Technologies",
        items: [
            {
                icon: "images/skills/react.png",
                title: "React"
            },
            {
                icon: "images/skills/react-native.png",
                title: "React Native"
            },
            {
                icon: "images/skills/android_new.png",
                title: "Android"
            },
            {
                icon: "images/skills/nodejs.png",
                title: "Nodejs"
            },
            {
                icon: "images/skills/redux.png",
                title: "Redux"
            }
        ]
    },
    {
        title: "Tools & Platforms",
        items: [
            {
                icon: "images/skills/vscode.png",
                title: "VS Code"
            },
            {
                icon: "images/skills/xcode.png",
                title: "Xcode"
            },
            {
                icon: "images/skills/android-studio.png",
                title: "Android Studio"
            },
            {
                icon: "images/skills/git.png",
                title: "Git"
            },
            {
                icon: "images/skills/firebase.png",
                title: "Firebase"
            }
        ]
    }
    ]
}

export { BIO, LINKS, EXPERIENCES, EDUCATION, SKILLS };
