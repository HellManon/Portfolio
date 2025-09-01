import javaImg from '../images/technos/java.png';
import angularImg from '../images/technos/angular.png';
import nodejsImg from '../images/technos/nodejs.svg';
import reactImg from '../images/technos/react.png';
import pythonImg from '../images/technos/python.jpg';
import mavenImg from '../images/technos/maven.png';
import junitImg from '../images/technos/junit.png';
import mockitoImg from '../images/technos/mockito.png';
import bootstrapImg from '../images/technos/bootstrap.png';
import githubImg from '../images/technos/github.png';
import umlImg from '../images/technos/uml.png';

export const technologies = {
  Languages: [
    { name: 'Java', cover: javaImg },
    { name: 'JavaScript', cover: reactImg }, // tu peux ajouter un logo JS séparé si tu veux
    { name: 'TypeScript', cover: angularImg }, // idem pour TS
    { name: 'Python', cover: pythonImg },
  ],
  Frameworks: [
    { name: 'Spring', cover: javaImg }, // pas de logo spécifique, sinon ajouter
    { name: 'Angular', cover: angularImg },
    { name: 'React', cover: reactImg },
    { name: 'Node.js', cover: nodejsImg },
	{ name: 'Bootstrap', cover: bootstrapImg },
    { name: 'JUnit', cover: junitImg },
    { name: 'Mockito', cover: mockitoImg },
  ],
  "Outils complémentaires": [
    { name: 'Maven', cover: mavenImg },
    { name: 'UML', cover: umlImg },   
    { name: 'GitHub', cover: githubImg },
  ],
};
