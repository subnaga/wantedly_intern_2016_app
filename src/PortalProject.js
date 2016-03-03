import React, { Component } from 'react'
import styles from './PortalProject.css'

export default class PortalProject extends Component {
  render() {
    let project = this.props.project
    return (
      <div className={styles.base}>
        <div className={styles.label}>{ project.looking_for }</div>
        <a className={styles.linkBlock} href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
          <img className={styles.coverImage} src={project.image.i_304_124_x2} />
          <h2 className={styles.title}>{ project.title }</h2>
          <p className={styles.description}>{ `${project.description.substr(0, 70)}...` }</p>
        </a>
        <div className={styles.companyBlock}>
          <img className={styles.companyAvatar} src={project.company.avatar.s_60} />
          <h3 className={styles.companyName}>{ project.company.name }</h3>
        </div>
      </div>
    )
  }
}
