<template>
  <div id="app" class="cv">
    <cv-header v-bind="{...headerProps}" />
    <main class="cv-content">
      <cv-section v-for="section in sections" :key="section.title" v-bind="{...section}"/>
    </main>
  </div>
</template>

<script>
import CvHeader from './components/CvHeader';
import CvSection from './components/CvSection';

export default {
  name: "app",
  components: {
    CvHeader,
    CvSection
  },
  data() {
    return {
      name: 'John',
      surname: 'Larsson',
      workTitle: 'Frontend / Web Developer',
      contactInfo: [
        {
          icon: 'fas fa-map-marker-alt',
          text: 'Oskarstorget 16D Örebro, 70214',
          link: undefined
        },
        {
          icon: 'fas fa-phone',
          text: '+46 739 692 18',
          link: 'tel:+4673969218'
        },
        {
          icon: 'fas fa-envelope',
          text: 'john.helarsson@gmail.com',
          link: 'mailto:john.helarsson@gmail.com'
        },
        {
          icon: 'fab fa-linkedin',
          text: 'https://www.linkedin.com/in/john-larsson-8ba758b3/',
          link: 'https://www.linkedin.com/in/john-larsson-8ba758b3/'
        }
      ],
      sections: [
        {
          title: 'Skills',
          icon: 'fas fa-puzzle-piece',
          rows: [
            {
              title: undefined,
              subTitle: undefined,
              content: 'Javascript, Typescript'
            },
            {
              title: undefined,
              subTitle: undefined,
              content: 'Node.js'
            },
            {
              title: undefined,
              subTitle: undefined,
              content: 'React.js, Vue.js'
            },
            {
              title: undefined,
              subTitle: undefined,
              content: 'Sass, Less, CSS'
            },
            {
              title: undefined,
              subTitle: undefined,
              content: 'HTML'
            }
          ]
        },
        {
          title: 'Experience',
          icon: 'fas fa-briefcase',
          rows: [
            {
              title: 'Web Developer, Consultant',
              subTitle: 'HiQ Örebro, Örebro',
              content: `Involved in numerous web projects for both public and private sector, as a lead web developer and systems architect.<br>
Created an inhouse tool to increase the speed of development, deployment and most of all developer enjoyment of projects for the content management system, Sitevision.`
            },
            {
              title: 'Developer Intern',
              subTitle: 'Digital Information, Örebro',
              content: `University exam project.<br>
Researched and surveyed existing users of a web booking platform.<br>
With the user data gathered from the surveys a new payment function was developed for the website.`
            }
          ]
        },
        {
          title: 'Projects',
          icon: 'fas fa-project-diagram',
          rows: [
            {
              title: undefined,
              subTitle: undefined,
              content: `svhiq, CLI tool for creation, development and deployment of Sitevision web projects. GitHub: <a href="https://github.com/JHelar/svb">https://github.com/JHelar/svb</a>`
            },
            {
              title: undefined,
              subTitle: undefined,
              content: `match-3, a match-3 (candy crush inspired) game made for the web browser, GitHub: <a href="https://github.com/JHelar/match-3">https://github.com/JHelar/match-3</a>`
            }
          ]
        },
        {
          title: 'Certifications',
          icon: 'fas fa-award',
          rows: [
            {
              title: undefined,
              subTitle: undefined,
              content: `Sitevision certified Website Developer`
            }
          ]
        },
        {
          title: 'Education',
          icon: 'fas fa-graduation-cap',
          rows: [
            {
              title: 'Bachelor: Computer Science',
              subTitle: 'Örebro Universitet - Örebro',
              content: undefined
            },
            {
              title: 'Highschool: Nature Science',
              subTitle: 'Östra Real - Stockholm',
              content: undefined
            }
          ]
        },
      ]
    }
  },
  computed: {
    headerProps(){
      return {
        title: `${this.name} ${this.surname}`,
        subTitle: this.workTitle,
        contactInfo: this.contactInfo
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

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
    content: '';
    position: absolute;
    background-color: var(--color-blue);
    top: 0;
    bottom: 0;
    left: calc(var(--sidebar-width) * -1);
    width: var(--sidebar-width);
  }
}

@media print {
  #Header, #Footer { display: none !important; }
  @page { margin: 0; }
}
</style>
