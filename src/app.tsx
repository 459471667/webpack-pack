import React, {Suspense, useState} from 'react'
import {Loading} from 'components/Content'

const Content = React.lazy(() => import('components/Content'))

function App() {
  // const [show, setShow] = useState<boolean>(false)

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </div>
  )
}

export default App
