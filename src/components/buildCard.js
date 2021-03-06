import React from 'react'

function BuildCard(props){

  function handleClick(event){
    props.handleClick(event.target.id); 
  }
    var card = props.data.map(cards => {
      const { _id, title} = cards;
      const rightId = _id + "-right";
      const leftId = _id + "-left";
      const titleId = _id + "-title";
      const numberId = _id + "-number";
      const editId = _id + "-edit";
      return (
        <div className="col-12 col-md-5 cardContainer" key={_id} id={_id}>
          <div className="row">
            <div className="col-1 cardRow">
              <img src="./left.png" className="arrow" alt="left arrow" id={leftId} onClick={handleClick}></img>
            </div>
            <div className="col-10 cardRow d-flex align-items-center"  id={titleId}>
                    <h1>{title} Deck</h1>
            </div>
            <div className="col-1 cardRow">
              <img src="./right.png" className="arrow" alt="right arrow" id={rightId} onClick={handleClick}></img>
            </div>
          </div> 
          <div className="row">
            <div className="col-11 d-flex align-items-center cardNumber">
              <h3 className="cardNumber" id={numberId} alt="Card Index"> </h3>
            </div>  
            <div className="col-1 edit">
              <img src="./editIcon.png" className="arrow hidden" alt="edit icon" id={editId} onClick={handleClick}></img>
            </div> 
          </div>    
        </div>
      )
    })
return (<div className="row d-flex justify-content-between">{card}</div>)
  }

export default BuildCard;