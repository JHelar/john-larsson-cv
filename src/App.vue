<template>
  <div id="app" class="cv">
    <cv-header v-bind="{ ...headerProps }" />
    <main class="cv-content">
      <cv-section
        v-for="section in sections"
        :key="section.title"
        v-bind="{ ...section }"
      />
    </main>
  </div>
</template>

<script>
import CvHeader from "./components/CvHeader";
import CvSection from "./components/CvSection";

export default {
  name: "app",
  components: {
    CvHeader,
    CvSection
  },
  data() {
    return {
      name: "John",
      surname: "Larsson",
      workTitle: "Engineer / Frontend Developer",
      contactInfo: [
        {
          icon: "fas fa-map-marker-alt",
          text: "Ola Hanssonsgatan 9, 11252 Stockholm",
          link: undefined
        },
        {
          icon: "fas fa-phone",
          text: "+46 739 692 18",
          link: "tel:+4673969218"
        },
        {
          icon: "fas fa-envelope",
          text: "john.helarsson@gmail.com",
          link: "mailto:john.helarsson@gmail.com"
        },
        {
          icon: "fab fa-linkedin",
          text: "https://www.linkedin.com/in/john-larsson-8ba758b3/",
          link: "https://www.linkedin.com/in/john-larsson-8ba758b3/"
        }
      ],
      sections: [
        {
          title: "Experience",
          icon: "fas fa-briefcase",
          rows: [
            {
              title: "Javascript Engineer (Level 3 - Senior), Klarna",
              subTitle: "2020 - ",
              content: `
                Engineer in a team of 5 which handles all Klarna CRM channels, such as: in app messages, in app articles, native push notifications, sms and email.<br><br>
                Enabeling and supporting marketeers with campaign setup and delivery.<br>
                Writing and maintaining backend services in express, Node.js and Postgress. With an AWS tech stack. <br>
                Writing the frontend for the production app on both web and native platforms using technologies such as react and react-native with a GraphQL/JSON-rest api. 
              `
            },
            {
              title: "Web Developer - Consultant, HiQ",
              subTitle: "2015 - 2020",
              content: `Involved in numerous web projects for both public and private sector, as a lead web developer and systems architect.<br>
Created an inhouse tool to increase the speed of development, deployment and most of all developer enjoyment of projects for the content management system, Sitevision.`
            },
            {
              title: "Developer Intern, Digital Information",
              subTitle: "2015 - 2015",
              content: `University exam project.<br>
Researched and surveyed existing users of a web booking platform.<br>
With the user data gathered from the surveys a new payment function was developed for the website.`
            }
          ]
        },

        {
          title: "Projects",
          icon: "fas fa-project-diagram",
          rows: [
            {
              title: "In app articles rework, Klarna",
              subTitle: "Engineer",
              content: `Lead engineer to the rework of the in app articles in the Klarna native and web app. Worked tighlty with designer to come up with and rework the existing articles.<br><br>
              Project involved extending the existing CMS editor to be HEAD-less. Adding a graphql api to fetch data from to be later rendered within the app. Added native in app rendering of articles for both the native and web platform.<br><br>
              <b>Released publicly October 2021.</b>`
            },
            {
              title: "In App Mesages, Klarna",
              subTitle: "Engineer",
              content: `
                Lead engineer in the project to add natively rendered in app messages to the Klarna app on both native and web platforms.<br><br>
                Enabeling marketeers to remotely render messages directly within the application it self without worrying about the visuals in the app.<br><br>
                Project involved extending the allready existing native api's and pushing the data to the react-native frontend to be rendered using the applications visual components.<br><br>
                <b>Released publicly Mars 2020.</b>
              `
            },
            {
              title: "svhiq, HiQ",
              subTitle: "Engineer",
              content: `CLI tool for creation, development and deployment of Sitevision web projects. GitHub: <a href="https://github.com/JHelar/svb">https://github.com/JHelar/svb</a><br>Still heavily being used in projects.`
            },
            {
              title: "match-3",
              subTitle: "Personal",
              content: `A match-3 (candy crush inspired) game made for the web browser, GitHub: <a href="https://github.com/JHelar/match-3">https://github.com/JHelar/match-3</a>`
            }
          ]
        },
        {
          title: "References",
          icon: "fas fa-user-tie",
          rows: [
            {
              title: "Matteo Pitassi",
              subTitle: "Klarna",
              content: `Cooworker, worked tighlty with on reworking the in app articles for Klarna: <a href="mailto:matteo.pitassi@klarna.com">matteo.pitassi@klarna.com</a>`
            },
            {
              title: "Viktor Söderström",
              subTitle: "HiQ",
              content: `Cooworker in the same team at HiQ: <a href="mailto:viktor.soderstrom@hiq.se">viktor.soderstrom@hiq.se</a>`
            },
            {
              title: "Johan Lundberg",
              subTitle: "HiQ",
              content: `Project and consultant manager at HiQ: <a href="mailto:johan.lundberg@hiq.se">johan.lundberg@hiq.se</a>`
            }
          ]
        },
        {
          title: "Skills",
          icon: "fas fa-puzzle-piece",
          rows: [
            {
              title: undefined,
              subTitle: undefined,
              content: "Javascript, Typescript"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "Node.js"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "express.js"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "Postgress"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "React.js, Vue.js"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "Sass, Less, CSS"
            },
            {
              title: undefined,
              subTitle: undefined,
              content: "HTML"
            }
          ]
        },
        {
          title: "Education",
          icon: "fas fa-graduation-cap",
          rows: [
            {
              title: "Bachelor: Computer Science",
              subTitle: "Örebro Universitet - Örebro",
              content: "Not completed"
            },
            {
              title: "Highschool: Nature Science",
              subTitle: "Östra Real - Stockholm",
              content: undefined
            }
          ]
        }
      ]
    };
  },
  computed: {
    headerProps() {
      return {
        title: `${this.name} ${this.surname}`,
        subTitle: this.workTitle,
        contactInfo: this.contactInfo
      };
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap");

:root {
  --color-blue: #002e58;
  --color-black: #000;
  --color-white: #fff;
  --color-light-gray: #f8f9fa;
  --color-dark-gray: #ccc;

  --content-width: 680px;
  --sidebar-width: 150px;

  --content-padding: 1rem;
}
html {
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;

  background: var(--color-light-gray);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;

  @media print {
    background: var(--color-white);
    height: 100vh;
    overflow-y: hidden;
  }
}

#app {
  position: relative;

  font-family: Roboto;
  font-size: 1rem;
  max-width: var(--content-width);

  background-color: var(--color-white);

  padding: calc(var(--content-padding) * 2) var(--content-padding);

  &::before {
    content: "";
    position: absolute;
    background-color: var(--color-blue);
    top: 0;
    bottom: 0;
    left: calc(var(--sidebar-width) * -1);
    width: var(--sidebar-width);
  }
}

@media print {
  #Header,
  #Footer {
    display: none !important;
  }
  @page {
    margin: 0;
  }
}
</style>
