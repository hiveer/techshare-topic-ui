import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import TopicList from './components/topicList/topicList.js'
import HeaderNav from './components/headerNav/headerNav.js'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <div className="TechSharingTopics">
        <Switch>
          <Route exact path="/">
            <Redirect to="/active-topics" />
          </Route>

          <Route
            path="/active-topics"
            render={() => <TopicList key={2} listType='active'/>}
          />

          <Route
            path="/archived-topics"
            render={() => <TopicList key={3} listType='archived'/>}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
