import { BrowserRouter as Router, Link } from 'react-router-dom'

const DefaultButton = ({ value, to }) => {
  return (
    <div>
      <Link to={to}>
        <button className="px-4 py-2 rouded rounded-sm bg-indigo-500 text-white"> {value} </button>
      </Link>
    </div>

  )
}
export default DefaultButton