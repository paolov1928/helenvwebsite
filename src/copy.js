import Welcome from "./components/pageComponents/Welcome"
import About from "./components/pageComponents/About"
import Services from "./components/pageComponents/Services"
import Assessments from "./components/pageComponents/Assesments"
import Form from "./components/Form"

const websiteText = {
  home: [
    {
      text: "Welcome",
      component: Welcome,
      content: [
        "I am a dyslexia specialist who is based in Heathfield in East Sussex.",
        "I am passionate about helping those who have dyslexia to overcome barriers to learning, so that they can achieve their full potential.",
        "So, how can I help?",
        "I offer a professional and personal approach and can provide the following services for individuals, schools, colleges, universities and other organisations"
      ],
      scrollTo: "scroll-welcome"
    },
    {
      text: "About",
      component: About,
      content: [
        "Lesley Burnett B.Ed (Hons), MA, PG Dip (Dyslexia and Literacy), PG Dip(Autism), AMBDA, APC",
        "I am an experienced dyslexia specialist, who works with people of all ages both individually and in schools, colleges and universities. I am a fully qualified assessor with an Assessment Practising Certificate.",
        "My background is as a mainstream teacher, SENCo, Deputy Head and Specialist Advisory Teacher in a Local Authority.  I therefore have a practical understanding of the educational and other needs of those who have dyslexia and other Specific Learning Difficulties.",
        "I also have experience as a teacher trainer, most recently as the Director of Postgraduate courses for Dyslexia Action which involved writing, managing and delivering courses for teachers who wished to become dyslexia specialists. I now regularly deliver CPD training for teachers.",
        "I have also spoken at conferences and seminars both nationally and internationally. My special interest is how to motivate and encourage people who have Specific Learning Difficulties and I have written and spoken extensively on this subject."
      ],
      scrollTo: "scroll-about"
    },
    {
      text: "Services for Schools",
      component: Services,
      content: [
        "Examination Access Arrangements",
        "‘Lesley produces excellent reports about students requiring Examination Access Arrangements. She is a reliable, committed, and highly skilled professional who we would recommend unreservedly.’   St Paul’s Catholic College, Burgess Hill, West Sussex",
        "The aim of Examination Access Arrangements (EAAs) is to ensure that those with disabilities, specific learning difficulties or a temporary injury or impairment have equal opportunities in exams. The aim is for the student to show his or her knowledge or ability without being disadvantaged by any difficulty.",
        "As an assessor with an Assessment Practising Certificate, I am qualified and experienced in carrying out assessments and writing reports for Examination Access Arrangements.",
        "If you need a qualified assessor for EAAs in your school or college, I will be happy to discuss your individual needs."
      ],
      scrollTo: "scroll-services"
    },
    {
      text: "Assessments",
      component: Assessments,
      content: [
        "Diagnostic Assessment",
        "‘Lesley assessed my teenage daughter and produced a detailed and thorough report for a very reasonable price and spent time going through it with us carefully. She put my daughter at ease and included my daughter in the feedback process and liaised with her school.’         Mrs L.  Haywards Heath",
        "What is a diagnostic assessment?",
        "The aim of a diagnostic assessment is to build a profile of strengths and weaknesses, so that the person who is assessed can go on to meet their full potential. This can also help to improve their self-esteem and motivation. Most importantly, the assessment gives information that is used to offer practical help and advice."
      ],
      scrollTo: "scroll-assessments"
    },
    {
      text: "Contact",
      component: Form,
      scrollTo: "scroll-contact"
    }
  ],
  navBar: {
    title: "Helen Ventura",
    underText: "SEN Assessor/ Tutor"
  },
  form: {
    title: "To make an enquiry please send an email using the form below:",
    firstInput: "Name(*)",
    secondInput: "Email(*)",
    thirdInput: "Message (*)"
  }
}

export default websiteText
