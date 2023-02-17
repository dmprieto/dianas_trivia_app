## Diana's Trivia Mobile App :iphone:

### Purpose

Create a mobile application using React Native to showcase my skills in React/React Native. I'll also explore using Tailwind for handling CSS.

After exploring the repo https://github.com/public-apis/public-apis#games--comics , I selected **Open Trivia** https://opentdb.com/api_config.php as the datasource for the application.

After analizing the available data, I'll start with the design of the application.

### Setup

Expo was used to generate the base project. After creating the project, main libraries like nativewind, react navigate, reanimated, lottie and axios where added manually. To be able to setup this proyect please refer to expo [get started](https://docs.expo.dev/get-started/installation/ "get started")
 guide. 
 
Once node, expo cli and yarn are configured, the project can be started and tested using: **yarn start** and **yarn test**


### Design

- [Data Analysis](/docs/DESIGN.MD "Data Analysis")
- [Sequence Diagrams](/docs/SEQUENCE.MD "Sequence Diagrams")
- [Quiz Flowchart](/docs/FLOWCHART.MD "Quiz Flow Chart")


### Testing

Jest to create snapshots of the components, do unit tests of the components and unit tests for some functions

### TODO
The following functionalities are pending to be implemented:
+ Implement settings screen
  + Configure number of questions
  + Configure quiz difficulty: none, easy, medium, hard
