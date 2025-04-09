import React, { useState } from 'react'
import { ReactReader } from 'react-reader'
function BookReader() {
    const [location, setLocation] = useState(0)

  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url="https://www.gutenberg.org/ebooks/26184.rdf"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default BookReader