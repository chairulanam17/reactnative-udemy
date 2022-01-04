import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ColorScreen from './src/screens/ColorScreen';
import CompoScreen from './src/screens/CompoScreen';
import CounterScreeen from './src/screens/CounterScreeen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: CompoScreen,
    List: ListScreen,
    Image: ImageScreen,
    Count: CounterScreeen,
    Color: ColorScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
