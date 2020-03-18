import React, { Component } from 'react'

class Cat extends React.Component {
  render() {
    return (
      <div class="grid-item">
        <img class="avatar" src={this.props.imageUrl} />
        <div class="info-box">
          <span class="cat-index">{this.props.index}.</span>
          <span class="cat-name">{this.props.catName}</span>
        </div>
      </div>
    )
  }
}

export default Cat
