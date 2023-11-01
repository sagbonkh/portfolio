import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    php,
    cpp,
    python,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    acd_img,
    bccancer_logo,
    defend_logo,
    thesaurus,
    restaurant,
    codex,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "ACD Systems International",
      icon: acd_img,
      iconBg: "#383E56",
      date: "September 2022 - April 2023",
      points: [
        "Enhanced user experience by updating and maintaining all user-facing webpages, resulting in a 5% increase in overall conversion rates and higher user interactions.",
        "Implemented a social sign-in feature for Google and Apple accounts on the user portal, leveraging HTML, CSS, and PHP.",
        "Developed a dynamic product release page, overseeing the creation of a manager page for product managers to add, remove, and edit products, alongside a user-facing page capable of real-time updates.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "65Square (Help Us Defend)",
      icon: defend_logo,
      iconBg: "#E6DEDD",
      date: "April 2022 - July 2022",
      points: [
        "Collaborated with multiple teams to conceive and develop an AR-inspired virtual world featuring immersive events, such as online dating, shopping, and other interactive experiences.",
        "Employed Django (Python) on the backend to develop the calendar and reminder functionalities for the application.",
        "Utilized GitLab for source control, Docker for containerization, and MongoDB for efficient database management.",
      ],
    },
    {
      title: "IT Support Specialist",
      company_name: "BC Cancer Research Institute",
      icon: bccancer_logo,
      iconBg: "#383E56",
      date: "September 2021 - April 2022",
      points: [
        "Successfully spearheaded a project to replace more than 600 Windows 7 computers by developing a PowerShell script that gathers comprehensive information about each computer and exports it as a CSV document.",
        "Ensured optimal equipment performance by installing, upgrading, and updating software, and hardware components.",
        "Installed, managed, repaired, and tested computer hardware such as workstations, printers, telephones, etc.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Codex",
      description:
        "Codex is my latest brainchild, a dynamic social network web app designed with the utmost care and precision. Developed on the robust NextJS framework, Codex boasts a TypeScript-driven front end and leverages the power of NodeJS for its backend components. User authentication is seamlessly handled through Clerk, offering a secure and user-friendly experience. The heart of Codex, our data storage, is entrusted to MongoDB, ensuring efficient and secure management of user interactions. With GitHub as our trusted source control platform, collaboration and version management are seamless, allowing for a more streamlined development process.",
      tags: [],
      image: codex,
      source_code_link: "https://github.com/sagbonkh/codex",
    },
    {
      name: "Thesaurus",
      description:
        "Thesaurus blends fashion, designers, and travel in an engaging web application. Discover the latest fashion trends, insightful designer profiles, and captivating travel destinations. With compelling articles and vibrant visuals, users can explore style and creativity. An interactive community fosters discussions among enthusiasts, while the responsive design ensures a seamless experience across devices. Thesaurus isn't just a blog; it's an immersive journey celebrating the fusion of fashion, design, and exploration in a captivating digital realm.",
      tags: [
        // {
        //   name: "react",
        //   color: "blue-text-gradient",
        // },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "javascript",
        //   color: "pink-text-gradient",
        // },
      ],
      image: thesaurus,
      source_code_link: "https://github.com/sagbonkh/thesaurus",
    },
    {
      name: "Restaurant Health",
      description:
        "My restaurant app uses health inspection records from restaurants across Surrey. This app equips users with information to make informed choices about where to eat. By analyzing health inspection data, the app generates personalized recommendations, guiding users towards the cleanest and safest dining options in the city. Whether you're a health-conscious individual or simply seeking the best dining experience, this app is your ultimate companion in navigating the restaurant scene with confidence.",
      tags: [
        // {
        //   name: "Java",
        //   color: "violet-gradient",
        // },
        // {
        //   name: "J-unit",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "source_control",
        //   color: "pink-text-gradient",
        // },
      ],
      image: restaurant,
      source_code_link: "https://github.com/sagbonkh/Restaurant_app.git",
    },
  ];
  
  export { services, technologies, experiences, projects };