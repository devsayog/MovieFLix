import AppRoutes from '@views/Routes'
import AppbarandSidebar from './AppbarandSidebar'

function Layout() {
  return (
    <div className="flex bg-slate-200 dark:bg-gray-900 dark:text-gray-200">
      <AppbarandSidebar />
      <main className="flex-1 mt-20 p-3">
        <AppRoutes />
      </main>
    </div>
  )
}

export default Layout