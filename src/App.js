import React, {useState} from "react"

import Template from "./Template"
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

  return(
       
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      { Page && <Page /> }
    </Template>      
    
  )
}

export default App
