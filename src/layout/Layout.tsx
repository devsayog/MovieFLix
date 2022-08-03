import AppRoutes from '@views/Routes'
import AppbarandSidebar from './AppbarandSidebar'

function Layout() {
  return (
    <div className="flex bg-slate-200 dark:bg-gray-900 dark:text-gray-200">
      <AppbarandSidebar />
      <main className="flex-1 mt-20 sm:p-3 md:p-4 lg:p-5 min-h-screen md:ml-60">
        <AppRoutes />
      </main>
    </div>
  )
}

export default Layout
