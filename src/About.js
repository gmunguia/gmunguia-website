import React, { Component } from "react";
import Markdown from "react-markdown";
import "./About.css";
import Back from "./Back";

// Written in MD to reuse the content for generating the PDF version of my CV.
const resume = `
## A bit about myself

I'm a young, talented man enjoying the quiet piece of northern Spain.

With 3+ year experience in large-scale applications, I'm a disciplined, passionate coder strongly focused on growing as a professional and broadening my technical knowledge.

In my relatively short career, I've always shown outstanding performance as a coder, designer, team player and leader, which has brought me from an entry-level job to a development lead position in under two years.

As a developer:

- I tend to favor functional programming over other styles (long live λ).
- I ~~merge~~ rebase my git history.
- I use markdown for everything (including [this document](https://github.com/gmunguia/gmunguia-website/blob/master/src/About.js)).
- I love haskell and javascript.
- I automate my own job as much as possible.
- I avoid [bikeshedding](https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting).

Do you have a challenging project?

I'm ready when you are!

## Experience

### Full-stack developer @ Learnerbly - Nov 2018 to present - London, UK (remotely)

Main stack: React, NodeJS

Responsibilities:

- Build the core product of the company, consisting on a set of native and web applications based on web technologies (eg React, GraphQL, Apollo).
- Design, set up and support AWS infrastructure, including DynamoDB, AWS Lambda, Elasticsearch.

### Development lead @ Ingram Micro Cloud - May 2017 to Nov 2018 - Santander, Spain

Main stack: React, NodeJS

Responsibilities:

- Led a small development team (3 developers) focused on B2B online marketplaces and services.
- Took over several on-going projects, exceeding expectations on productivity, while improving preexisting processes (eg QA, service monitorization).
- Developed the core service of a large-scale IOT project, under strict performance and scalability constraints.

### Full-stack developer @ Ingram Micro Cloud - May 2016 to May 2017 - Toronto, Canada (remotely)

Main stack: Angular, C#

Responsibilities:

- Led front-end development of Ingram Micro’s Cloud Marketplace (CMP).
- Led five-month-long project to integrate traditional (non-cloud) products into CMP.
- Integrated content management, price management solutions in CMP.
- Played key role in transitioning the team’s VCS from TFS to GIT, through both training and guidance.
- Developed experimental projects (eg internal mobile apps) on state-of-the-art technologies (eg Ionic, Angular 2).

### Full-stack developer @ SETELSA - April 2015 to May 2016 - Santander, Spain

Main stack: Javascript, C++

Responsibilities:

- Developed security and presence control systems for company buildings.
- Developed facial recognition applications for hand-held devices, integrated with the company’s security applications

## Education

2014 - 2015 | Ghent University: Master Thesis.

2014 - 2015 | Ghent University: Engineer’s degree, Mechatronics, Robotics, and Automation Engineering (Erasmus+ programme)

2009 - 2015 | Cantabria University: Engineer’s degree, Industrial Electronics and Automation.
`;

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About__container">
          <header className="About__header">
            <Back />
            <h1>About</h1>
          </header>
          <main>
            <Markdown source={resume} />
          </main>
        </div>
      </div>
    );
  }
}

export default About;
