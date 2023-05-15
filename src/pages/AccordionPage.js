import Accordion from '../components/Accordion';

function AccordionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Accordions</h1>
      <div>
        <Accordion items={list1}></Accordion>
      </div>
      <div>
        <Accordion items={list2}></Accordion>
      </div>
      <div>
        <Accordion items={list3}></Accordion>
      </div>
    </div>
  );
}

export default AccordionPage;

const list1 = [
  {
    label: 'Personal Information',
    content:
      'My name is John Doe and I am 25 years old. I live in a small town called Springfield with my family. I work as a software engineer at a startup company.',
  },
  {
    label: 'Educational Background',
    content:
      "I have a Bachelor's degree in Computer Science from XYZ University. During my studies, I focused on Artificial Intelligence and Machine Learning. I also did an internship at ABC Company where I gained experience in developing web applications.",
  },
  {
    label: 'Hobbies and Interests',
    content:
      'In my free time, I enjoy playing video games and reading books. I am also interested in learning new programming languages and frameworks. I like to stay up-to-date with the latest trends in technology.',
  },
];

const list2 = [
  {
    label: 'Travel Experience',
    content:
      'I have traveled to several countries around the world, including Japan, France, and Australia. Each trip was a unique experience and allowed me to learn about different cultures and customs. My favorite place so far has been Kyoto, Japan, where I got to try delicious food and visit beautiful temples.',
  },
  {
    label: 'Sports and Fitness',
    content:
      'I am an avid runner and have completed several half-marathons. I also enjoy practicing yoga and meditation to stay balanced and focused. In addition, I like to try new sports and recently started playing tennis with some friends.',
  },
  {
    label: 'Professional Achievements',
    content:
      'During my career, I have worked on several projects that I am proud of. One of them was a mobile app for a healthcare company that received an award for innovation. Another project was a website for a non-profit organization that helped raise funds for a good cause. I enjoy working on challenging projects and delivering high-quality results.',
  },
];

const list3 = [
  {
    label: 'Favorite Books',
    content:
      "I love reading books, and some of my favorites include 1984 by George Orwell, The Hitchhiker's Guide to the Galaxy by Douglas Adams, and The Da Vinci Code by Dan Brown. I enjoy books that challenge my thinking and take me on a journey to different worlds.",
  },
  {
    label: 'Sport Taste',
    content:
      'I have a diverse taste in sport, but some of my favorite sports are football, volleyball. My favorite plays include Salah, Ozil, and Van Persie.',
  },
  {
    label: 'Technology and Gadgets',
    content:
      'I am passionate about technology and enjoy trying out new gadgets. Some of my recent purchases include a smartwatch, wireless earbuds, and a drone. I also enjoy tinkering with electronics and building small projects in my spare time.',
  },
];
