import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import '../css/App.css';
import store from '../store/index';
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div> 
  );
}

export default App;
