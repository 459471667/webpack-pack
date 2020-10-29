import React, {Suspense, useState} from 'react'

const Header = React.lazy(() => import('components/Header'))
const Content = React.lazy(() => import('components/Content'))

interface Interface {
  name: string
  age: number
}

function App(properties: Interface) {
  const {name, age} = properties

  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {show && <Content />}
      </Suspense>
      <button type="button" onClick={() => setShow(true)}>
        显示
      </button>
      <span>
        12133221122
        {name}
        {age}
      </span>
    </div>
  )
}

export default App
