import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
		"welcome":{
			name: "BrunoPatricio",
			role: "role",
			frontend: "FrontEndDeveloper",
		},
        "aboutme":{
            title: "About me",
            summary_title: "Summary",
            summary_content_one: "Hello there! I'm Bruno Patrício, a Front-End developer! I've started my professional career back in April 2018. During this time I've been able to focus on several front-end technologies and work environments.",
			summary_content_two: "On a daily basis, I'm responsible for either maintaining or developing brand-new features for web or mobile applications. I also help with the refinement process of features' user stories, estimation of their work load and how much time it would take for the team to tackle them",
			summary_content_three: "My experience is also noteworthy when it comes to working with international projects and teams. I've worked some months on-site on a project in the Netherlands and remotely on another two international projects, so I'm comfortable working together with a multidisciplinary and culture diverse team and feel at ease working in English."
        },
		"projects":{
			title: "Projects"
		}
    }
  },
  pt: {
    translation: {
		"welcome":{
			name: "BrunoPatricio",
			role: "role",
			frontend: "FrontEndDeveloper",
		},
        "aboutme":{
            title: "Sobre mim",
            summary_title: "Sumário",
            summary_content: [
                "asd",
                "asd",
                "asd"
            ]
        }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
