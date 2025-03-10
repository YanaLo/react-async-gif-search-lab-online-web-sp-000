import React, { Component } from "react"

const GifList = props => {
  return (
    <div>
      {props.gifs.map(gif => (
        <img key={gif.url} src={gif.url} alt="gif" />
      ))}
    </div>
  )
}

export default GifList
