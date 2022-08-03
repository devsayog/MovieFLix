function Footer() {
  return (
    <footer className="flex items-center justify-end h-24 md:h-36 bg-purple-700 text-lg text-gray-200 dark:bg-slate-800 shadow-3xl px-3">
      <article className="">
        <p className="paragraph">&copy; all rights reserved.</p>
        <p className="paragraph">
          This app is build using{' '}
          <a
            className="text-blue-200 dark:text-blue-600"
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            themoviedb
          </a>{' '}
          api.
        </p>
      </article>
    </footer>
  )
}

export default Footer
