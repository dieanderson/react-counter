import React, {useState} from "react"

import Counter from "./Counter"
import Albums from "./Albums"
import Users from "./Users"

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  },
}

const defaultPage = 'albums'

function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = (page) => {
    setPage(page)
  }

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  return(
    <>
      {
        pageNames.map( page => <button onClick={ () => handleChangePage(page) }>{ pages[page].text }</button> )
      }

      { Page && <Page /> }
    </>
  )
}

export default App
