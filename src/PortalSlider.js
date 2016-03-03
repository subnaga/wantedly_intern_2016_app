import React, { Component } from 'react'
import styles from './PortalSlider.css'

export default class PortalSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      ltr: true
    }
  }

  setCurrentIndex(index) {
    this.setState({
      currentIndex: index,
      ltr: index >= this.state.currentIndex
    })
  }
  calcStyle(index) {
    let delay = this.state.ltr ? index : 2 - index
    return {
      transform: `translate(${index * 320}px, 0)`,
      transitionDelay: `${delay * 100}ms`,
    }
  }

  onClickPrev() {
   this.setCurrentIndex(this.state.currentIndex - 3)
  }

  onClickNext() {
    this.setCurrentIndex(this.state.currentIndex + 3)
  }

  render() {
    return (
      <div className={styles.base}>
        <a onClick={this.onClickPrev.bind(this)}>前へ</a>
        <a onClick={this.onClickNext.bind(this)}>次へ</a>
        { this.props.children.map((child, index) => {
          return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
            { child }
          </div>
        }) }
      </div>
    )
  }
}
