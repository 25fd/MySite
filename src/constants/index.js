import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    rapidops,
    matlabinfo,
    inappchat,
    fdGitHome,
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
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Nest JS",
      icon: "https://img.icons8.com/color/48/000000/nestjs.png",
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Next JS",
      icon: "https://img.icons8.com/color/48/000000/nextjs.png",
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "linux",
      icon: "https://img.icons8.com/color/48/000000/linux.png",
    }
  ];
  
  const experiences = [
    {
      title: "Junior Software Developer",
      company_name: "Rapidops, Inc",
      icon: rapidops,
      iconBg: "#383E56",
      date: "June 2019 - November 2020",
      linkedinUrl: "https://www.linkedin.com/company/rapidops-inc/",
      points: [
        "During my tenure at RapidOps Solutions, I specialized in developing APIs using Node.js and MongoDB.",
        "My focus was primarily on creating efficient and scalable solutions, and I gained expertise in implementing clean code architecture principles to ensure code maintainability and scalability.",
        "I also worked on the code migration and infrastructure migration projects",
      ],
    },
    {
      title: "Senior Software Developer",
      company_name: "MatlabInfotech",
      icon: matlabinfo,
      iconBg: "#383E56",
      date: "January 2021 - April 2022",
      linkedinUrl: "https://www.linkedin.com/company/matlabinfotech/",
      points: [
        "At Matlab Infotech, I had the privilege of working on a diverse range of projects, including a multi-tenant chat application, a financial application, and a low-code framework.",
        "As a Senior Node.js Developer, I was responsible for leading a team and providing training and support to new team members.",
        "During my time there, I honed my skills in project management and gained valuable experience in overseeing project timelines and ensuring that deliverables met the highest standards of quality.",
        "Also, I participate in code reviews and provide constructive feedback to other developers.",
      ],
    },
    {
      title: "Back End Developer",
      company_name: "Rip Bull Networks / In-App Chat",
      icon: inappchat,
      iconBg: "#383E56",
      date: "June 2022 - May 2023",
      linkedinUrl: "https://www.linkedin.com/company/rip-bull-networks-inc/",
      points: [
        "At InappChat, I have had the opportunity to contribute my expertise in both in-app chat development and backend engineering.",
        "Within this organization, my role involves the development and maintenance of new APIs.",
        " My responsibilities encompass working with a range of technologies such as Node.js, React, Auth0, MQTT, MongoDB, GraphQL, and NestJS.",
        "Through leveraging these tools, I am able to create seamless and interactive chat interfaces, ensure secure authentication and authorization, establish efficient messaging protocols, optimize database operations, and design flexible and efficient data-driven solutions.",
        " At InappChat, my focus is on delivering innovative and robust APIs that meet the highest standards of functionality, performance, and security.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online File Sharing",
      description:
        "This project allows users to securely upload, manage, share, and collaborate on files with others.Key features include user authentication, file upload/download, file sharing with permissions, and a responsive design for optimal usability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: fdGitHome,
      source_code_link: "https://github.com/25fd/ByteByteBox",
    },
    {
      name: "Car Rental",
      description:
        "A car rental application that allows users to rent cars, manage bookings, and view their rental history. Key features include user authentication, car search and filtering, booking management, and a responsive design for optimal usability.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fdGitHome,
      source_code_link: "https://github.com/25fd/Car_Rent_NextJS",
    },
    {
      name: "Return Product  System",
      description:
        "A E-commerce application that allows users to return products, admin to access all return products, and view their return history. Key features include user authentication, product search and filtering, and return product management.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JSP",
          color: "green-text-gradient",
        },
        {
          name: "Servlet",
          color: "pink-text-gradient",
        },
      ],
      image: fdGitHome,
      source_code_link: "https://github.com/25fd/ECom-Return-System",
    },
  ];
  
  const urls = {
    github: "https://github.com/25fd?tab=repositories",
  }
  export { services, technologies, experiences, testimonials, projects, urls };