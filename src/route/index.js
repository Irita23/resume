// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ===============================================================

var header = {
  name: {
    firstname: 'Irina',
    lastname: 'Tarasenko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ на місяць',
  address: 'Odesa, Filatova 24 kv.32',
}

var footer = {
  social: {
    email: {
      text: 'Solodbalca@gmail.com',
      href: 'mailto:Solodbalca@gmail.com',
    },
    phone: {
      text: '+380932512168',
      href: 'tel:+380932512168',
    },
    linkedin: {
      text: 'linkedIn',
      href: 'https://www.linkedIn.com/in/irina-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume /Summary',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: ` Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me. `,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc. `,
      },
    },
    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },

        {
          name: 'Handlebars',
          point: 9,
          isTop: false,
        },

        {
          name: 'VS Code',
          point: 8,
        },

        {
          name: 'Git',
          point: 7,
          isTop: true,
        },

        {
          name: 'Terminal',
          point: 6,
          isTop: true,
        },

        {
          name: 'NPM',
          point: 5,
          isTop: false,
        },

        {
          name: 'React.js',
          point: 0,
        },

        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Run',
          isMain: false,
        },
        {
          name: 'History',
          isMain: true,
        },
        {
          name: 'Cake',
          isMain: true,
        },
      ],
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Education',
    },
    header,

    main: {
      educations: [
        {
          name: 'Школа-ліцей "Чорноморський"',
          isEnd: true,
        },

        {
          name: 'ЗОШ №28',
          isEnd: true,
        },

        {
          name: 'Вечірня школа №24',
          isEnd: false,
        },

        {
          name: 'Національний університет "Одеська морська академія"',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Animation',
          id: 3344,
        },
        {
          name: 'Apple',
          id: 5678,
        },
        {
          name: 'IT Brains',
          id: 9998876,
        },
      ],
    },
    footer,
  })
})

//===========================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'basic',
    page: {
      title: 'Resume / Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstak Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '29.05.2023',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'Airbnb competitor. High-load application for searching apartmens',
              stacks: [
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: ' Background verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
              stackAmount: 9,
              awardAmount: 7,
            },
          ],
        },
      ],
    },

    footer,
  })
})

//================================================================================
router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'basic',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================
// ================================================================

// Підключаємо роутер до бек-енду

//======================================================================

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'basic',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
}) /
  //======================================================================

  router.get('/web', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
      layout: 'basic',
      web: {
        languages: [
          {
            name: 'HTML',
            version: 'HTML5',
            description:
              'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
            elements: [
              {
                name: 'div',
                description:
                  'Defines a division or a section in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description:
                      'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description:
                      'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
              {
                name: 'p',
                description:
                  'Defines a paragraph in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description:
                      'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description:
                      'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
            ],
          },
          {
            name: 'CSS',
            version: 'CSS3',
            description:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
            properties: [
              {
                name: 'color',
                description: 'Sets the color of the text.',
                values: [
                  {
                    value: 'red',
                    description:
                      'Sets the text color to red.',
                  },
                  {
                    value: 'blue',
                    description:
                      'Sets the text color to blue.',
                  },
                ],
              },
              {
                name: 'background-color',
                description:
                  'Sets the background color of an element.',
                values: [
                  {
                    value: 'white',
                    description:
                      'Sets the background color to white.',
                  },
                  {
                    value: 'black',
                    description:
                      'Sets the background color to black.',
                  },
                ],
              },
            ],
          },
          {
            name: 'JavaScript',
            version: 'ES6',
            description:
              'JavaScript is a programming language used to create interactive effects within web browsers.',
            functions: [
              {
                name: 'alert()',
                description:
                  'Displays an alert box with a specified message and an OK button.',
                parameters: [
                  {
                    name: 'message',
                    type: 'string',
                    description:
                      'The message to display in the alert box.',
                  },
                ],
              },
              {
                name: 'getElementById()',
                description:
                  'Returns the element with the specified ID.',
                parameters: [
                  {
                    name: 'id',
                    type: 'string',
                    description:
                      'The ID of the element to find.',
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })


  //===================================================================================
  router.get('/js', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('js', {
      layout: 'basic',
      name: 'JavaScript',
      description:
        'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
      history: {
        year: 1995,
        founder: 'Brendan Eich',
      },
      types: [
        'Number',
        'String',
        'Boolean',
        'Null',
        'Undefined',
        'Symbol',
        'Object',
      ],
      syntax: {
        variables: ['var', 'let', 'const'],
        functions: ['function'],
        conditionals: ['if', 'else', 'switch'],
        loops: ['for', 'while', 'do-while'],
        classes: ['class'],
      },
      features: [
        'First-class functions',
        'Closures',
        'Dynamic typing',
        'Prototype-based inheritance',
        'Asynchronous programming with Promises and async/await',
        'Modules with import/export statements',
      ],
      libraries: [
        'jQuery',
        'React',
        'Angular',
        'Vue',
        'Node.js',
        'Express.js',
        'Lodash',
        'Moment.js',
      ],
      tools: [
        'Babel',
        'Webpack',
        'ESLint',
        'Jest',
        'Mocha',
        'Chai',
        'Selenium',
        'Cypress',
      ],
      community: [
        {
          name: 'Stack Overflow',
          type: 'forum',
        },
        {
          name: 'JavaScript Weekly',
          type: 'newsletter',
        },
        {
          name: 'The Changelog',
          type: 'podcast',
        },
        {
          name: 'CSS-Tricks',
          type: 'blog',
        },
      ],
    })
    //                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================

  router.get('/car', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('car', {

      layout: 'basic',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      color: 'silver',
      features: {
        interior: {
          seats: {
            material: 'leather',
            color: 'black',
            heated: true,
            ventilated: true,
          },
          dashboard: {
            material: 'plastic',
            color: 'black',
            display: {
              type: 'LCD',
              size: 10.1,
              resolution: '1280x720',
              touchscreen: true,
            },
          },
          audio: {
            system: 'JBL',
            speakers: 8,
            subwoofer: true,
            bluetooth: true,
            USB: true,
          },
        },
        exterior: {
          wheels: {
            size: 18,
            type: 'alloy',
            color: 'silver',
          },
          headlights: {
            type: 'LED',
            brightness: 'high',
            automatic: true,
          },
          sunroof: {
            type: 'panoramic',
            size: 'large',
            automatic: true,
          },
        },
        safety: {
          airbags: {
            front: 2,
            side: 2,
            knee: 2,
            rear: 2,
          },
          assistance: {
            blind_spot_monitoring: true,
            rear_cross_traffic_alert: true,
            lane_departure_warning: true,
            adaptive_cruise_control: true,
            collision_warning: true,
          },
        },
      },
      engine: {
        type: 'gasoline',
        displacement: 2.5,
        horsepower: 206,
        torque: 186,
        transmission: {
          type: 'automatic',
          gears: 8,
        },
      },
      fuel_economy: {
        city: 28,
        highway: 39,
        combined: 32,
      },
      price: {
        base: 25900,
        destination: 995,
        options: {
          navigation: 1200,
          moonroof: 800,
          premium_paint: 595,
        },
        total: 28990,
      },
    })
    //                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================

  router.get('/mac', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('mac', {
      layout: 'basic',
      name: 'Apple MacBook Pro',
      description: 'The ultimate notebook for power users',
      price: 1999.99,
      category: 'Computers & Tablets',
      features: {
        processor: {
          brand: 'Intel',
          model: 'Core i9',
          speed: '2.3 GHz',
          cores: 8,
          cache: '16 MB',
        },
        memory: {
          type: 'DDR4',
          size: '32 GB',
          speed: '2666 MHz',
        },
        storage: {
          type: 'SSD',
          size: '1 TB',
        },
        display: {
          size: '16 inches',
          resolution: '3072x1920',
          technology: 'Retina',
          color_space: 'P3',
          brightness: '500 nits',
          refresh_rate: '60 Hz',
        },
        graphics: {
          brand: 'AMD',
          model: 'Radeon Pro 5500M',
          memory: '4 GB GDDR6',
        },
        ports: [
          {
            type: 'Thunderbolt 3',
            count: 4,
            features: [
              'Charging',
              'DisplayPort',
              'Thunderbolt (up to 40 Gbps)',
              'USB 3.1 Gen 2 (up to 10 Gbps)',
            ],
          },
          {
            type: 'HDMI',
            count: 1,
          },
        ],
        battery: {
          type: 'Lithium Polymer',
          capacity: '100 Wh',
          life: 'Up to 11 hours',
        },
        weight: '4.3 pounds',
        dimensions: {
          height: '0.64 inch',
          width: '14.09 inches',
          depth: '9.68 inches',
        },
        operating_system: 'macOS',
        accessories: [
          {
            name: 'Apple Magic Keyboard',
            price: 99.99,
          },
          {
            name: 'Apple Magic Mouse 2',
            price: 79.99,
          },
          {
            name: 'USB-C to USB Adapter',
            price: 19.99,
          },
        ],
      },
    })
    //                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================



// ================================================================/  Підключаємо роутер до бек-енду
module.exports = router
