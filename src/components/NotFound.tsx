import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex flex-col space-y-2 mt-60 items-center justify-center">
      <h5 className="heading-5">Page Not Found</h5>
      <p className="paragraph">Want to go back to home page ?</p>
      <Link className="paragraph border-blue-400 text-blue-400" to="/">
        Click Here
      </Link>
    </section>
  )
}

export default NotFound
