import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLongRight(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M23.068 11.993l-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default ArrowLongRight
