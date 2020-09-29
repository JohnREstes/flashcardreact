import React from 'react'

function BuildCard(props){
    console.log(props.data[0].cards[0].word);
    var header = props.data.map(cards => {
      const { _id, title} = cards
      return (
        <tr key={_id}>
          <th>{title}</th>
        </tr>
      )
    })
    var table = props.data[0].cards.map(cards => {
        const { _id, word, definition } = cards
        return (
          <tr key={_id}>
            <td>{word}</td>
            <td>{definition}</td>
          </tr>
        )
      })
    return (<table><thead>{header}</thead><tbody>{table}</tbody></table>)
  }

export default BuildCard;