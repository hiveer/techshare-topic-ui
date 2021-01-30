import React, {useState, useEffect} from 'react'
import Topic from '../topic/topic.js'
import CreateTopicForm from '../createTopic/createTopicForm.js'
import { updateTopic, refreshTopics, deleteTopic, createTopic } from '../shared/httpTopicProxy.js'

import './topicList.scss'
import expandIcon from './images/expandIcon.png'

const TopicList = () => {
  let [list, setList] = useState([]);
  let [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    refreshTopics()
      .then(result => {
        result.sort((element1, element2) => {
          return element2.vote - element1.vote;
        });
        setList(result);
      })
  }, [JSON.stringify(list)]);

  useEffect(() => {
    if (showCreate == true) {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  })

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

  const deleteAndRefreshTopics = (topicId) => {
    if (!window.confirm('This is going to destroy this Topic completely, are you sure to go?')) return

    deleteTopic(topicId)
      .then(res => {
        refreshTopics()
          .then(result => {
            result.sort((element1, element2) => {
              return element2.vote - element1.vote;
            });
            setList(result);
          })
      })
  }

  const createAndRefreshTopics = (topicParams) => {
    createTopic(topicParams)
      .then(res => {
        refreshTopics()
          .then(result => {
            result.sort((element1, element2) => {
              return element2.vote - element1.vote;
            });
            setList(result);
          })
      })
  };

  return (
    <div className="topiclist__div-page">
      <table className="topiclist__table" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th></th>
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
            list.map((topic) => <Topic
                                  key={topic._id}
                                  {...topic}
                                  likeIt={(topicId, newVote) => voteAndRefreshTopics(topicId, newVote)}
                                  deleteIt={(topicId) => deleteAndRefreshTopics(topicId) }
                                />)
          }
        </tbody>
      </table>

      { !showCreate &&
        <p className="topic-list__p--expand-topic-form" onClick={() => setShowCreate(true)}>
          Create Topic
          <img className="" src={expandIcon} />
        </p>
      }

      { showCreate &&
        <CreateTopicForm
          createIt={(topicParams) => createAndRefreshTopics(topicParams)}
          cancelIt={() => setShowCreate(false)}
        />
      }
    </div>
  )
}

export default TopicList;
