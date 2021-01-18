import React from 'react'

const Topic = (props) => {
  return (
    <tr>
      <td>{props.topicTitle}</td>
      <td>{props.owner}</td>
      <td>{props.startDate}</td>
      <td>{props.detail}</td>
      <td>{props.vote}</td>
      <td></td>
    </tr>
  )
}

export default Topic;
