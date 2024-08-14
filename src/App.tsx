import ReduxProvider from 'src/providers/ReduxProvider';
import RouteProvider from 'src/providers/RouteProvider';
import 'src/App.css';
function App() {
  return (
    <ReduxProvider>
      <RouteProvider />
    </ReduxProvider>
  );
}

export default App;
