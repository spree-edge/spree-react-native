import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronLeft(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default ChevronLeft
