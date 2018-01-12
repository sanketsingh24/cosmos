import React from 'react'

import { Heading1 } from '../components'

class ClientList extends React.Component {
  render() {
    return (
      <div>
        <Heading1>Clients</Heading1>
        <div>client list</div>
        <br />
        <br />
        <div>
          <a href="/clients/autogenerated-id-goes-here">client one</a>
          <br />
          <br />
          <a href="/clients/beep-beep-boop-boop">client two</a>
        </div>
      </div>
    )
  }
}

export default ClientList
