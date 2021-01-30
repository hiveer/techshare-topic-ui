import React from 'react'
import SanitizedHTML from 'react-sanitized-html';
import './topic.scss'

import lovePng from './images/love.png'

const Topic = (props) => {
  return (
    <tr>
      <td className="topic__td--vote" data-next-vote={props.vote + 1} onClick={() => props.likeIt(props._id, props.vote + 1)}>
        <img className="topic__img--love" src={lovePng} />
      </td>
      <td>{props.topicTitle}</td>
      <td>{props.owner}</td>
      <td>{props.startDate}</td>
      <td className="topic__td--detail" >
        <SanitizedHTML html={props.detail.replace(/(\r\n|\r|\n)/g, "<br />" )} />
      </td>
      <td>{props.vote}</td>
      <td className="topic__td--delete" data-topic-id={props._id} onClick={() => props.deleteIt(props._id)}> Delete </td>
    </tr>
  )
}

export default Topic;
