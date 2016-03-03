import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }
  componentDidMount() {
    this.fetchPortalData()
  }

  async fetchPortalData() {
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
    let json = await res.json()
    console.log(json)
    this.setState({
      data: json
    })
  }
  render() {
    let data = this.state.data
    let popularProject = data && data.data.sections[3]
    return (
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
    )
  }
}
