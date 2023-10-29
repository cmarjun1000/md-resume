export default {
  personalInfo: {
    fullName: 'C M Arjun',
    jobStatus: 'Full Stack Developer', // Can also be the post you are looking for
    avatarPic: 'URL',

    contact: {
      mobile: '+91-9632106868',
      email: 'cmarjun333@gmail.com',
      address: 'Bengaluru, Karnataka, India',
      github: 'https://github.com/cmarjun1000',
      linkedIn: 'https://linkedin.com/in/cm-arjun'
    }
  },
  experiences: [
    {
      title: 'Software Engineer 2',
      company: 'Zemoso Technologies',
      location: 'Hyderabad, India (remote)',
      dateRange: '12/2022 - 08/2023 (8 months)',
      aboutCompany:
        'Zemoso Technologies is a product-market-fit studio founded and maintained by successful corporate innovation bringing products from napkin to product market fit.',
      summary: {
        title: 'Responsibilities',
        actions: [
          'Built Minet which is a digital payment platform that enables user to buy & sell cryptocurrencies and also maintain a portfolio using React, Typescript, SpringBoot and test cases on jest.',
          'Developed Seeder which supports small/mid-sized businesses/startups to secure necessary funding to expand their operations. React, Typescript, Springboot were used.'
        ]
      }
    },
    {
      title: 'Software Engineer (Module Lead)',
      company: 'BYJU\'S',
      location: 'Bengaluru, India',
      dateRange: '10/2020 - 12/2022 (2 yr 3 months)',
      aboutCompany:
        'BYJU\'S is a global ed-tech company, providing highly adaptive, engaging and effective learning solutions to more than 150 million students around the world.',
      summary: {
        title: 'Responsibilities',
        actions: [
          'Developed and sustained an inventory management app for warehouse members and product managers leveraging MongoDB & PostgreSQL databases.',
          'Developed a warehouse management system over the existing inventory management system that augmented the functionality of the former.',
          'Developed an order management system that tracks sales, orders, and fulfilment using React, express and Node. And MongoDB for database.',
          'Member of Technical panel for team recruitment.'
        ]
      }
    },
    {
      title: 'Android Automation Analyst intern',
      company: 'BlueBird India Pvt Ltd',
      location: 'Bengaluru, India',
      dateRange: '03/2020 - 06/2020 (4 months)',
      summary: {
        title: 'Responsibilities',
        actions: [
          'Developed python scripts to be able to automate features on the Android Enterprise devices using Robot Framework and RIDE.'
        ]
      }
    }
  ],
  education: [
    {
      title: 'B.E. in Computer Science',
      institution: 'CMRIT',
      location: 'Bengaluru, India',
      dateRange: '2016-2020',
      achievements: ['', ''],
      grade: '8.3 / 10' // CGPA
    },
    {
      title: 'PUC - PCME',
      institution: 'New Horizon PU College',
      location: 'Bengaluru, India',
      dateRange: '2014-2016',
      achievements: [],
      grade: '90%'
    },
    {
      title: 'Secondary Education',
      institution: 'Shishya Public School',
      location: 'Bengaluru, India',
      dateRange: '2014',
      achievements: [],
      grade: '91%'
    }
  ],
  projects: [
    {
      title: 'Warehouse Management System - React, Node, MongoDB, PostgreSQL',
      dateRange: '02/2022',
      location: 'Bengaluru, India',
      summary: 'An internal web app to maintain operations in the warehouse. From producing inventories to updating each inventory\'s status and analyzing orders coming from the order management app to setting up and shipping the inventories out of the warehouse to the customer via a delivery partner.'
    },
    {
      title: 'Order Management System - React, Node, MongoDB',
      dateRange: '02/2021',
      location: 'Bengaluru, India',
      summary:
        'An internal web application that tracks sales, orders, and fulfilment. It includes product information, order details, order status, shipment status, invoices, etc. From associating a shipment SKU to associating inventories to orders to shipping the orders and delivering it to the customers.'
    },
    {
      title: 'Minet - React, Typescript, Springboot, Jest, Cypress, MySQL',
      dateRange: '03/2023',
      location: 'Hyderabad, India',
      summary: 'Minet is a digital payment platform that enables users to buy and sell cryptocurrencies, providing them with an easy and secure way to invest in and trade these assets. The platform offers users convenient management of their cryptocurrency portfolios and provides insightful chart representations to stay up-to-date on the latest market trends.'
    },
    {
      title: 'Seeder - React, Typescript, Springboot, Jest, Cypress, MySQL',
      dateRange: '06/2023',
      location: 'Hyderabad, India',
      summary: 'Seeder is a digital funding platform that supports small/mid-sized businesses and startups in securing the necessary funding to expand their operations. This web-based application provides access to Growth capital through a group of individual investors, offering reliable and convenient way to achieve their growth objectives.'
    }
  ],
  skills: [
    { group: 'Coding languages', list: ['Javascript', 'Typescript', 'Java', 'HTML/CSS'] },
    {
      group: 'Frontend',
      list: ['ReactJS', 'NextJS', 'Redux', 'Storybook', 'MaterialUI', 'TailwindCSS']
    },
    {
      group: 'Backend',
      list: [
        'NodeJS',
        'Springboot',
        'Kafka',
        'MongoDB',
        'AWS',
        'GraphQL',
        'MySQL',
        'PostgreSQL',
        'Microservices'
      ]
    },
    {
      group: 'Testing frameworks',
      list: ['Jest', 'Selenium', 'Postman', 'Swagger.io', 'Mockito', 'Cypress']
    },
    {
      group: 'Other tools',
      list: ['GitHub Actions', 'Docker', 'Webpack', 'Babel', 'System Design', 'Git', 'Jenkins', 'Jira', 'Figma']
    }
  ],
  socialProfiles: [{ name: 'GitHub', link: 'https://github.com/cmarjun1000' }]
}
