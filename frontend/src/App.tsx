import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('请求出错:', error))
  }, [])

  return (
    <div className="App">
      <h1>我的博客</h1>
      <p>来自后端的信息：{message || '加载中...'}</p>
    </div>
  )
}

export default App