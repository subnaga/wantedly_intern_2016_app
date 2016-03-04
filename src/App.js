import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }
  componentDidMount() {
    let user_id = this.props.user.user_id
    this.fetchPortalData()
    this.fetchPortalDataDependOnUser(user_id)
  }

  async fetchPortalData() {
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
    let json = await res.json()
    this.setState({
      data: json
    })
  }

  async fetchPortalDataDependOnUser(user_id) {
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    let res = await fetch(`https://www.wantedlyapp.com/api/intern/portal?user_id=${user_id}`, { headers })
    let json = await res.json()
    this.setState({
      data2: json
    })
  }

  render() {
    let data = this.state.data
    let dataInUser = this.state.data2
    let popularProject = data && data.data.sections[3]
    let popularProjectInUser = dataInUser && dataInUser.data.sections[3]
    return (
      <div>
        <div>
          { data ? ( 
          <PortalSlider>
              { popularProject.projects.map((project) => {
                return <PortalProject project={project} key={project.id} />
              }) }
          </PortalSlider>
          ) : (
          <p>Now Loading...</p>
          ) }
        </div>
        <div>
          { dataInUser ? (
          <PortalSlider>
              { popularProjectInUser.projects.map((project) => {
                return <PortalProject project={project} key={project.id} />
              }) }
          </PortalSlider>
          ) : (
          <p>Now Loading...</p>
          ) }
        </div>
      </div>
    )
  }
}
