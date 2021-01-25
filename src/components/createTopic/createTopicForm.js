import React, {useState} from 'react'
import StringCheck from '../shared/stringCheck.js'

const CreateTopicForm = (props) => {
  let [topicTitle, setTopicTitle] = useState('');
  let [owner, setOwner] = useState('');
  let [startDate, setStartDate] = useState('');
  let [vote, setVote] = useState(0);
  let [detail, setDetail] = useState('');

  const handleSubmit = (event) => {
    if (StringCheck.isBlank(topicTitle) ||
       StringCheck.isBlank(owner) ||
       StringCheck.isBlank(startDate) ||
       StringCheck.isBlank(detail)) {
      alert('Please provide valid data!');
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
    <form onSubmit={handleSubmit}>
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
                  placeholder="detail"
                  onChange={(event) => setDetail(event.target.value)}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default CreateTopicForm;
