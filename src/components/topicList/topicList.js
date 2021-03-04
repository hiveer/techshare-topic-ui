import React, {useState, useEffect} from 'react'
import Topic from '../topic/topic.js'
import CreateTopicForm from '../createTopic/createTopicForm.js'
import { updateTopic, activeTopics, archivedTopics, deleteTopic, createTopic } from '../shared/httpTopicProxy.js'

import './topicList.scss'
import expandIcon from './images/expandIcon.png'
import lovePng from './images/love.png'

const TopicList = (props) => {
  let [list, setList] = useState([]);
  let [showCreate, setShowCreate] = useState(false);

  const refreshTopics = () => {
    console.log(props.listType);
    if (props.listType == 'archived') {
      return archivedTopics();
    } else {
      return activeTopics();
    }
  };

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

  const archiveAndRefreshTopics = (topicId) => {
    updateTopic(topicId, {status: 'archived'})
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
            setShowCreate(false);
          })
      })
  };

  return (
    <div className="topiclist__div-page" id={props.listType}>
      <table className="topiclist__table" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Owner</th>
            <th>ShareDate</th>
            <th>Detail</th>
            <th>
              Vote
              <img className="topic__img--love" src={lovePng} />
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((topic) => <Topic
                                  key={topic._id}
                                  {...props}
                                  {...topic}
                                  likeIt={(topicId, newVote) => voteAndRefreshTopics(topicId, newVote)}
                                  deleteIt={(topicId) => deleteAndRefreshTopics(topicId)}
                                  archiveIt={(topicId) => archiveAndRefreshTopics(topicId)}
                                />)
          }
        </tbody>
      </table>

      { props.listType != 'archived' && !showCreate &&
        <p className="topic-list__p--expand-topic-form" onClick={() => setShowCreate(true)}>
          Create Topic
          <img className="" src={expandIcon} />
        </p>
      }

      { props.listType != 'archived' && showCreate &&
        <CreateTopicForm
          createIt={(topicParams) => createAndRefreshTopics(topicParams)}
          cancelIt={() => setShowCreate(false)}
        />
      }
    </div>
  )
}

export default TopicList;
