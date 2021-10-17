import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-transparent h-30 w-auto p-6 flex align-middle gap-6 items-center">
      <Link to="/" className="mr-auto font-black text-3xl">VMC</Link>
      <Link to="/signup">Get Started</Link>
      <Link to="/login">Account</Link>
    </nav>
  )
}

export default Navbar