import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CreateQuiz from "./screens/CreateQuiz";
import CreateQuestions from "./screens/CreateQuestions";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Home from "./screens/Home";


const MainStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  }, 
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  CreateQuiz:{
    screen: CreateQuiz,
    navigationOptions: {
      headerTitle:"Create"
    }
  },
  CreateQuestions: {
    screen: CreateQuestions,
    navigationOptions: {
      headerTitle: "Add Your Questions"
    }
  },
});

export default createAppContainer(MainStack);
