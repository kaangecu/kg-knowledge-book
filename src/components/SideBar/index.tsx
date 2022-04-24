import React from 'react'

// Declaring type of props - see "Typing Component Props" for more examples
type SideBarType = {
  items: Array<string>;
}; /* use `interface` if exporting so that consumers can extend */


const SideBar = (props:SideBarType) => {
  const {items} = props
  return (
    <div>{items.map(el=><p key={el}>{el}</p>)}</div>
  )
}

export default SideBar