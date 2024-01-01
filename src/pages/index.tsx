import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Landing from "../components/Landing"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Landing />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
