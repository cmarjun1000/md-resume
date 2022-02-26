export default {
  personalInfo: {
    fullName: 'C M Arju',
    jobStatus: 'Full Stack Developer', // Can also be the post you are looking for
    avatarPic: 'URL',
    contact: {
      mobile: '+91-9632106868',
      email: 'cmarjun1000@gmail.com',
      address: 'Bengaluru, Karnataka, India',
      github: 'https://github.com/cmarjun1000',
      linkedIn: 'https://www.linkedin.com/in/c-m-arjun-14b5031a0/'
    }
  },
  experiences: [
    {
      title: 'Software Engineer',
      company: 'BYJU\'s',
      location: 'Bengaluru, India',
      dateRange: '01/2021 - Ongoing',
      aboutCompany:
        'BYJU\'S is a global ed-tech company, providing highly adaptive, engaging and effective learning solutions to more than 150 million students around the world.',
      summary: {
        title: 'Responsibilities',
        actions: [
          'Built architectural frameworks in NodeJS and React.js for the company.',
          "Architected a project from the ground up upto the k8s deployment, and mentored the team in the project's entire SDLC.",
          'Admin Console: Designed and built the MVP and launched beta; It is an administrative tool used by each one of our clients and our support teams.',
          // 'Used Scrum Agile Methodology in my work (Daily Scrum Meetings, Planning Poker, Sprint Backlog, 1on1 meetings.',
          'Component Owner for multiple components in the company.',
          'Technical interviewer for campus recruitment.'
        ]
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'BYJU\'s',
      location: 'Bengaluru, India',
      dateRange: '10/2020 - 01/2021',
      summary: {
        title: '',
        actions: [
          'Built modules that were taken into production.',
          'Built shared repository of common reusable modules.'
        ]
      }
    }
  ],
  education: [
    {
      title: 'Bachelors in CS Engineering',
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
      title: 'Intelligent Intrusion Alerting',
      dateRange: '03/2018',
      location: 'Coimbatore, India', // Optional
      summary: 'A smart system that photographs, identifies and alerts using ML and Image Processing.'
    },
    {
      title: 'IoT Railway Gate Control',
      dateRange: '02/2017',
      location: 'Udaipur, India', // Optional
      summary:
        'A multi-tier IoT system that senses train movements, and automatically closes the railway crossing gate.'
    }
  ],
  skills: [
    { group: 'Coding languages', list: ['Javascript', 'Typescript', 'HTML/CSS', 'Shell', 'Python'] },
    {
      group: 'Backend',
      list: [
        'NodeJS',
        'Express',
        'AWS',
        'Serverless',
        'Jenkins',
        'Kubernetes',
        'Terraform',
        'Redis',
        'MySQL',
        'MongoDB'
      ]
    },
    {
      group: 'Frontend',
      list: ['React', 'Redux', 'NextJS', 'Gatsby', 'MUI', 'Bootstrap', 'SASS', 'Less', 'Webpack4', 'Babel']
    },
    {
      group: 'Testing frameworks',
      list: ['Jest', 'Mocha', 'Swagger.io', 'Postman']
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Advanced' },
    { name: 'Hindi', proficiency: 'Proficient' },
    { name: 'Malayalam', proficiency: 'Proficient' },
    { name: 'Tamil', proficiency: 'Intermediate' },
    { name: 'Kannada', proficiency: 'Intermediate' }
  ],
  socialProfiles: [{ name: 'GitHub', link: 'https://github.com/cmarjun1000' }]
}
