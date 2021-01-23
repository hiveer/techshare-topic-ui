import React, {useState, useEffect} from 'react'
import Topic from '../topic/topic.js'
import { updateTopic, refreshTopics } from '../shared/httpTopicProxy.js'

const TopicList = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    refreshTopics()
      .then(result => {
        result.sort((element1, element2) => {
          return element2.vote - element1.vote;
        });
        setList(result);
      })
  }, [JSON.stringify(list)]);

  const voteAndRefreshTopics = (topicId, newVote) => {
    updateTopic(topicId, {vote: newVote})
      .then(res => {
        refreshTopics()
          .then(result => {
            result.sort((element1, element2) => {
              return element2.vote - element1.vote;
            });
            setList(result);
          })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>StartDate</th>
            <th>Detail</th>
            <th>Heat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((topic) => <Topic key={topic._id} {...topic} likeIt={(topicId, newVote) => voteAndRefreshTopics(topicId, newVote)} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TopicList;
