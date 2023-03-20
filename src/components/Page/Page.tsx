import { Helmet } from "react-helmet"

export interface PageProps {
  children: React.ReactNode
  title: string
}

export function Page({ children, title }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}