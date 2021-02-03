import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TopicList from './components/topicList/topicList.js'
import HeaderNav from './components/headerNav/headerNav.js'
import './App.css'

function App() {
  return (
    <Router>
      <HeaderNav />
      <div className="TechSharingTopics">
        <Switch>
          <Route path="/">
            <TopicList />
          </Route>
          <Route path="/active-topics">
            <TopicList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
