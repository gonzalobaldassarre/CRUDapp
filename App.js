import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';
import indexScreen from './src/screens/indexScreen'; 
import { Provider as BlogProvider } from './src/context/BlogContext'; // usamos as, por si importamos mas de un provider, no pueden tener el mismo nombre
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen'; 

const navigator = createStackNavigator({
  Home: indexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'CrudApp'
  }, 

});

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>

};
