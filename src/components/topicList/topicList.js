import React, {useState, useEffect} from 'react'
import Topic from '../topic/topic.js'

const TopicList = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3600/topics')
      .then(res => res.json())
      .then(result => {
        setList(result);
      })
      .catch(e => {
        console.log(e);
      })
  }, [JSON.stringify(list)]);

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
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((topic) => <Topic key={topic._id} {...topic} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TopicList;
