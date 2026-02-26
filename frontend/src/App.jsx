import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import CreatePost from './pages/createPost.jsx' 
import Feed from './pages/feed.jsx'

function App() {
  return (
    <Router>
      <header className="navbar">
        <Link to="/create-post">Create Post</Link>
        <Link to="/feed">Feed</Link>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
