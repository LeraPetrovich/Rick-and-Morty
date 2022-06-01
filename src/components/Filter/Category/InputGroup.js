import React from 'react'
const InputGroup = ({name, setID, selected,episode}) => {
  return (
    <div className="input-group mb-3">
  <select 
  value={selected}
  onChange={(e)=>setID(e.target.value)} 
  className="form-select"
   id={name}>
    {episode?.map((episode)=>{
      return <option value={episode.id}>{episode.name}-{episode.id}</option>;
    })
  }
  {
  }
  </select>
</div>
  )
 
}

export default InputGroup
// число эпизодов получить от сервера +
//{name} - {episode} key={x+1}