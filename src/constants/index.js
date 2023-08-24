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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Defense,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Free Lancing",
   logo:Defense,
      iconBg: "#383E56",
      date: "",
      points: [
      "I am a dedicated and versatile freelance professional with a passion for delivering high-quality work across various domains.",
      "With a proven track record of successful projects and satisfied clients, I pride myself on my ability to understand client needs and translate them into creative and effective solutions.",
     "Whether it's crafting compelling content, designing captivating visuals, or developing functional websites," ],
    },
    {
      title: "Full Stack Developer",
      company_name: "VD NETWORKS",
       logo:Defense,
      iconBg: "#E6DEDD",
      
      points: [
        "Developing and maintaining web applications using MERN Stack and other related technologies.",
        "Led a team of 4 developers in designing and building a customer relationship management (CRM) application from scratch, resulting in a 30% increase in sales efficiency.",
        "Collaborated closely with UI/UX designers to create a responsive and user-friendly frontend interface using React and CSS grid layout, resulting in a 25% decrease in bounce rates..",
        "Optimized the application's performance by conducting regular code reviews, identifying bottlenecks, and implementing code refactoring, leading to a 40% improvement in page load times.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "DRDO",
      logo:Defense,
      iconBg: "#383E56",
     
      points: [
        "Developing and maintaining web applications  other related technologies.",
        "Collaborating with cross-functional teams including Scientist, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Anand proved me wrong.",
      name: "Saurav Jha",
     
      
      
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Anand does.",
      name: "Afzal Khan",
    
      
    },
    {
      testimonial:
        "After Anand optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Vishal Singh",
      
     
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };