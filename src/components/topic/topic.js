import React from 'react'
import './topic.scss'

const Topic = (props) => {
  return (
    <tr>
      <td className="topic__td--vote" data-next-vote={props.vote + 1} onClick={() => props.likeIt(props._id, props.vote + 1)}> Vote </td>
      <td>{props.topicTitle}</td>
      <td>{props.owner}</td>
      <td>{props.startDate}</td>
      <td className="topic__td--detail" >{props.detail}</td>
      <td>{props.vote}</td>
      <td className="topic__td--delete" data-topic-id={props._id} onClick={() => props.deleteIt(props._id)}> Delete </td>
    </tr>
  )
}

export default Topic;
