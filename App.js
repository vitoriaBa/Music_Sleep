import {NavigationContainer} from '@react-navigation/native';

import Rotas from './pages/Rotas';
import Rotastab from './pages/Rotastab';



export default function App() {
  return (
<NavigationContainer>
<Rotas />
</NavigationContainer>
  );
}
export function Home() {
  return (
<NavigationContainer>
<Rotastab />
</NavigationContainer>
  );
}
