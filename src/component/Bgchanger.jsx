import React, { useState } from 'react'
import './Bgchanger.scss'

const Bgchanger = () => {
  const [color, setColor] = useState('white')

  const colorArr = ["red", "green", "pink", "aqua", "yellow", "orange", "blue", "purple"]

  return (
    <>
      <div style={{ background: color, height: '100vh' }}>
        <div className='btnSection'>
          {/* <button onClick={() => setColor('red')}>Red</button>
          <button onClick={() => setColor('Green')}>Green</button>
          <button onClick={() => setColor('Pink')}>Pink</button>
          <button onClick={() => setColor('Aqua')}>Aqua</button>
          <button onClick={() => setColor('Yellow')}>Yellow</button>
          <button onClick={() => setColor('Brown')}>Brown</button>
          <button onClick={() => setColor('Blue')}>Blue</button>
          <button onClick={() => setColor('Purple')}>Purple</button> */}
          {colorArr.map((item, index) => (
            <button key={index} style={{textTransform: 'capitalize'}} onClick={() => {setColor(item) }}>{item}</button>
          ))}
        </div>
      </div>

    </>
  )
}

export default Bgchanger