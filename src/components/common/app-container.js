import React from "react"
import { useSize } from "../../hooks"

const AppContainer = ({ children }) => {
  const { width, height } = useSize()

  return (
    <div
      style={{
        minWidth: width > 160 ? width : "160px",
        minHeight: height,
      }}
      className={"app"}
    >
      {children}
    </div>
  )
}

export default AppContainer
