import { Provider } from 'react-redux';
import AppBootstrap from './src/bootstrap/AppBootstrap';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppBootstrap />
      <AppNavigator />
    </Provider>
  );
}
