import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected,Icon,title,dark}) {
    return (
      <div
        className={`${dark ? "sidebarrow__dark" : "sidebarrow"} ${
          selected && "selected"
        }`}
      >
        <Icon className="sidebarrow__icon" />
        <h2 className={dark ? "sidebarrow__title__dark" : "sidebarrow__title"}>
          {title}
        </h2>
      </div>
    );
}

export default SidebarRow
