export default {
  name: 'curriculum',
  data () {
    return {
      work: [
        {
          name: 'Acotel do Brasil (2012 - 2013)',
          description: 'Worked in the Q&A team as a testing intern, also performed some Customer Care functions.',
          results: 'More agile work regarding customer service.'
        },
        {
          name: 'BNDES (2013 - 2015)',
          description: 'Worked as an intern, programming jobs to be sent to the mainframe and eventualy, some VBA macros for automation purposes.',
          results: 'My work with the VBA macros made the team\'s work considerably faster, certain tasks that usually took 1 or 2 days to be completed were now being done in a matter of hours.'
        },
        {
          name: 'IBM Global Financing (2019 - Present)',
          description: 'As a developer student, i worked in the development of an internal S.P.A used for keeping track of the bank\'s transactions with clients.',
          results: 'Performed several refactoring tasks and introduced the team to some Clean Code principles that improved the project\'s overall performance and maintainability.'
        },
      ],
      degrees: [
        `Associate's degree in Systems Development and Analysis (UNICARIOCA)`
      ],
      skills:{
        languages: [
          {name: 'HTML', icon: 'fab fa-html5 fa-2x'},
          {name: 'CSS', icon: 'fab fa-css3-alt fa-2x'},
          {name: 'Javascript', icon: 'fab fa-js fa-2x'},
          {name: 'Python', icon: 'fab fa-python fa-2x'},
          {name: 'Java', icon: 'fab fa-java fa-2x'},
        ],
        frameworks: [
          {name: 'Vue.js', icon: 'fab fa-vuejs fa-2x' },
          {name: 'Bootstrap', icon: 'fab fa-bootstrap fa-2x' },
          {name: 'Node.js', icon: 'fab fa-node-js fa-2x' },
        ],
        practices: ['Scrum', 'Kanban', 'Clean Code']
      }
    }
  }
}
