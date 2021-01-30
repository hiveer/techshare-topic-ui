import 'bootstrap/dist/css/bootstrap.css';

import TopicList from './components/topicList/topicList.js'
import './App.css'

function App() {
  return (
    <div className="TechSharingTopics">
      <h2>Tech Sharing Topics</h2>
      <TopicList />
    </div>
  );
}

export default App;
