import 'bootstrap/dist/css/bootstrap.css';

import TopicList from './components/topicList/topicList.js'
import HeaderNav from './components/headerNav/headerNav.js'
import './App.css'

function App() {
  return (
    <>
      <HeaderNav />
      <div className="TechSharingTopics">
        <TopicList />
      </div>
    </>
  );
}

export default App;
