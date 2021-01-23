import React from 'react'

const Topic = (props) => {
  return (
    <tr>
      <td>{props.topicTitle}</td>
      <td>{props.owner}</td>
      <td>{props.startDate}</td>
      <td>{props.detail}</td>
      <td>{props.vote}</td>
      <td data-next-vote={props.vote + 1} onClick={() => props.likeIt(props._id, props.vote + 1)}> Vote </td>
      <td data-topic-id={props._id} onClick={() => props.deleteIt(props._id)}> Delete </td>
    </tr>
  )
}

export default Topic;
