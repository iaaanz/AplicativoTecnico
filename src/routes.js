import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '~/pages/Main/index';
import Item from '~/pages/Itens/index';

const App = createStackNavigator({
  Main,
  Item,
});

const Routes = createAppContainer(App);

export default Routes;
