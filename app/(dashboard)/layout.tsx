import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <>
    <h1 className="flex justify-center py-2">Dashboard layout</h1>
    {children}
  </>
)

export default DashboardLayout
