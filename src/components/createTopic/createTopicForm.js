import React, {useState} from 'react'
import StringCheck from '../shared/stringCheck.js'
import './createTopicForm.scss'

import expandLessIcon from './images/expandLessIcon.png'

const CreateTopicForm = (props) => {
  let [topicTitle, setTopicTitle] = useState('');
  let [owner, setOwner] = useState('');
  let [startDate, setStartDate] = useState('');
  let [vote, setVote] = useState(0);
  let [detail, setDetail] = useState('');

  const handleSubmit = (event) => {
    if (StringCheck.isBlank(topicTitle) ||
       StringCheck.isBlank(owner) ||
       StringCheck.isBlank(detail)) {
      alert("topicTitle, owner, detail are required!");
      return event.preventDefault();
    }

    props.createIt({
      topicTitle: topicTitle,
      owner: owner,
      startDate: startDate,
      vote: vote,
      detail: detail
    })
  };

  return (
    <form className="create-topic__form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text"
               className="form-control"
               id="topicTitle"
               placeholder="topic title"
               onChange={(event) => setTopicTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <input type="text"
               className="form-control"
               id="owner"
               placeholder="owner"
               onChange={(event) => setOwner(event.target.value)}
        />
      </div>

      <div className="form-group">
        <input type="date"
               className="form-control"
               id="startDate"
               placeholder="start date"
               onChange={(event) => setStartDate(event.target.value)}
        />
      </div>

      <div className="form-group">
        <input type="number"
               className="form-control"
               id="vote"
               placeholder="vote"
               onChange={(event) => setVote(event.target.value)}
        />
      </div>

      <div className="form-group">
        <textarea className="form-control"
                  id="detail"
                  placeholder="detail(support line break)"
                  rows="6"
                  onChange={(event) => setDetail(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-warning">Create Topic</button>
      <button type="button" className="btn btn-info create-topic-form__btn--cancel" onClick={props.cancelIt}>
        Cancel
        <img className="" src={expandLessIcon} />
      </button>
    </form>
  )
}

export default CreateTopicForm;
