import React from 'react'

function Inter(props) {
  
  return (
    <>
        
        <div class="card mb-3" style={{maxWidth:"980px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.my_data.urlToImage} style={{minHeight:"250px",minWidth:"250px"}} class="img-fluid rounded-start"alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.my_data.title}</h5>
        <h6><b>Author: </b>{props.my_data.author}</h6>
        <p class="card-text">{props.my_data.description}</p>
        <a href={props.my_data.url} target="_blank" style={{textDecoration:"none" }}>read more</a>
        
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Inter