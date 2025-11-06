import javaImg from './images/technos/java.svg';
import javascriptImg from './images/technos/javascript.svg';
import angularImg from './images/technos/angular.svg';
import typescriptImg from './images/technos/typescript.svg';
import nodejsImg from './images/technos/node.svg';
import reactImg from './images/technos/react.svg';
import pythonImg from './images/technos/python.svg';
import mavenImg from './images/technos/maven.svg';
import junitImg from './images/technos/junit.svg';
import mockitoImg from './images/technos/mockito.svg';
import bootstrapImg from './images/technos/bootstrap.svg';
import githubImg from './images/technos/git.svg';
import umlImg from './images/technos/uml.svg';
import springImg from './images/technos/spring.svg';

export const technologies = {
  Languages: [
    { name: 'Java', cover: javaImg },
    { name: 'JavaScript', cover: javascriptImg }, // tu peux ajouter un logo JS séparé si tu veux
    { name: 'TypeScript', cover: typescriptImg }, // idem pour TS
    { name: 'Python', cover: pythonImg },
  ],
  Frameworks: [
    { name: 'Spring', cover: springImg }, // pas de logo spécifique, sinon ajouter
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
