import AppbarandSidebar from './AppbarandSidebar'

function Layout() {
  return (
    <div className="flex bg-slate-200 dark:bg-gray-900">
      <AppbarandSidebar />
      <main className="flex-1 mt-20">
        {/* Todo  Render children ie Outlet */}
        <div className="text-white text-7xl">Hello</div>
      </main>
    </div>
  )
}

export default Layout
