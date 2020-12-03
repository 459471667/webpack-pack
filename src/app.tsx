import React, {Suspense, useState} from 'react'

const Content = React.lazy(() => import('components/Content'))

function App() {
  // const [show, setShow] = useState<boolean>(false)

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  )
}

export default App
