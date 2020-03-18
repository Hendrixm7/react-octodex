import React, { Component } from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar">
          <img class="icon" src="./images/GitHub-Mark-32px.png" />
          <ul class="left-side-list">
            <li class="octodex">Octodex</li>

            <li class="home">Home</li>

            <li class="faq">FAQ</li>
          </ul>
          <ul class="right-side-list">
            <li class="twitter">Follow us on Twitter</li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Header
