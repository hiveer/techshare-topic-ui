import React from 'react'
import SanitizedHTML from 'react-sanitized-html';
import './topic.scss'

import lovePng from './images/love.png'

const Topic = (props) => {
  return (
    <tr>
      {props.listType == 'archived' ?
        <td className="" data-next-vote={props.vote + 1}>
          <img className="topic__img--love" src={lovePng} />
        </td> :
        <td className="topic__td--vote topic__td--btn" data-next-vote={props.vote + 1} onClick={() => props.likeIt(props._id, props.vote + 1)}>
          <img className="topic__img--love" src={lovePng} />
        </td>
      }
      <td>{props.topicTitle}</td>
      <td>{props.owner}</td>
      <td>{props.startDate}</td>
      <td className="topic__td--detail" >
        <SanitizedHTML html={props.detail.replace(/(\r\n|\r|\n)/g, "<br />" )} />
      </td>
      <td>{props.vote}</td>
      {props.listType == 'archived' ? <td>Archived</td> :
        <td className="topic__td--archive topic__td--btn topic__td--btn-fix-width" onClick={() => props.archiveIt(props._id)}>Archive</td>
      }
      <td className="topic__td--delete topic__td--btn topic__td--btn-fix-width" data-topic-id={props._id} onClick={() => props.deleteIt(props._id)}>Delete</td>
    </tr>
  )
}

export default Topic;
