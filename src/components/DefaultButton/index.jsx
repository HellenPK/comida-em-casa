import { BrowserRouter as Router, Link } from 'react-router-dom'

const DefaultButton = ({ value, to }) => {
  const styleButton = "px-4 py-2 rouded rounded bg-indigo-500 text-white"

  return (
    <div>
      {to ? <Link to={to}>
        <button className={styleButton}> {value} </button>
      </Link> : <button className={styleButton}> {value} </button>}
    </div>

  )
}
export default DefaultButton