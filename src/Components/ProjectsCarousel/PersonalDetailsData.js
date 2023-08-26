import MoveMentor1 from '../../Images/PersonalProjects/MoveMentor/1_options.png';
import MoveMentor2 from '../../Images/PersonalProjects/MoveMentor/2_teacher_lessons.png';
import MoveMentor3 from '../../Images/PersonalProjects/MoveMentor/3_teacher_moves.png';
import MoveMentor4 from '../../Images/PersonalProjects/MoveMentor/4_teacher_add.png';
import MoveMentor5 from '../../Images/PersonalProjects/MoveMentor/5_student_lesson.png';
import MoveMentor6 from '../../Images/PersonalProjects/MoveMentor/6_student_categories.png';
import MoveMentor7 from '../../Images/PersonalProjects/MoveMentor/7_student_moves.png';

export const personalDetails = [
  {
    projectId: 'movementor',
    title: 'Move Mentor',
    techStack: 'MongoDB, Express, Bootstrap React, NodeJS',
    brief: 'An offshoot of PoleGuide, this app focuses on a single pole studio in Brisbane: CSolta.',
    feature1: 'Teacher logs in and can view a variety of moves sorted into categories. From those moves, the teacher is able to select and assign each one to the available classes. This lesson planning allows for a variety of moves for all classes, less research time, and more organisation.',
    feature2: 'A student is able to view the moves assigned to their class so they can remember what was covered and discover new moves they can request to learn. A future feature would be that students can rank their confidence levels for a move so the teacher can have real feedback and plan lessons effectively.',
    link: 'https://move-mentor.netlify.app/',
    images: [
      {
        image: MoveMentor1,
        altTag: "Landing page where user can pick a list of login/signup options",
      },
      {
        image: MoveMentor2,
        altTag: "Teacher view of lessons page",
      },
      {
        image: MoveMentor3,
        altTag: "Teacher view of moves listed into categories",
      },
      {
        image: MoveMentor4,
        altTag: "Teacher view of adding move to a list of classes",
      },
      {
        image: MoveMentor5,
        altTag: "Student view of their lesson",
      },
      {
        image: MoveMentor6,
        altTag: "Student view of moves listed into categories",
      },
      {
        image: MoveMentor7,
        altTag: "Student view of moves inside a category",
      },
    ]
  },
  {
    projectId: 'poleGuide',
    title: 'Pole Guide',
    techStack: 'VueJs, Illustrator',
    brief: 'Every pole studio has their own names for moves and there is no single source of truth. PoleGuide aims to be a dictionary where students and teachers can reference moves, add their favourites, and discover new ones.',
    feature1: '',
    feature2: '',
    link: '',
    image1: '',
  },
  {
    projectId: 'tarotReader',
    title: 'Tarot Reader',
    techStack: 'Python, Venv',
    brief: 'Design, implement, and test a terminal application which accepts user input in the form of a file or text input and produces a printed output or interact with the file system',
    feature1: 'A user selects a number between 1-7 to use the program, each number having different levels of interaction. Selecting 1 will give the user a simple reading of three cards while selecting 2 will give a history of their readings.',
    feature2: 'Number 3 is a random card selected from the list. Number 4 has a bit more interaction with the user entering their date of birth to get their star sign and element. Number 5 will print out their entire star chart details. Number 6 will give the details of the next full moon and 7 will exit the program with a "Goodbye" message an crystal ball emoji.',
    link: 'https://github.com/corlou/CorinaPelichowski_T1A3',
    image1: '',

  },
  {
    projectId: 'slownik',
    title: 'Polish Dictionary',
    techStack: 'VueJS, Quasar',
    brief: 'I am a visual person so when learning Polish, I wanted some flash cards. I created this website so I could practise both Polish and working with VueJS. Currently, there is no back-end but I have plans on making one to work on my back-end skills',
    feature1: 'Using Illustrator, I drew all the images myself. I wanted something cartoon-like and simple to get the point across.',
    feature2: 'I used VueJS with a Quasar bundler as it was easier to get into but I plan on changing it to MUI React with a SQL database to shore up those skills.',
    link: 'https://slownik.org/#/',
    image1: '',
  },
  {
    projectId: 'portfolio',
    title: 'This Portfolio Website',
    techStack: 'Bootstrap React',
    brief: 'Initially created in HTML/CSS for an assignment, I ported all of it over to Bootstrap React to practice my skills.',
    feature1: 'Playing with animation on the About Me page was fun. I knew about onClick events but only used it for Hello World projects and modals. It was interesting to see what else could be achieved.',
    feature2: '',
    link: '',
    image1: '',
  },
]