import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const MenuGridR = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 4h4v4H4V4zM4 10h4v4H4v-4zM8 16H4v4h4v-4zM10 4h4v4h-4V4zM14 10h-4v4h4v-4zM10 16h4v4h-4v-4zM20 4h-4v4h4V4zM16 10h4v4h-4v-4zM20 16h-4v4h4v-4z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Heart = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.012 5.572l-1.087-1.087a5.5 5.5 0 10-7.778 7.778l8.839 8.839.002-.002.026.026 8.839-8.839a5.5 5.5 0 10-7.778-7.778l-1.063 1.063zm-.024 12.7l4.936-4.937 1.45-1.4h.002l1.063-1.062a3.5 3.5 0 10-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 10-4.95 4.95l2.54 2.54.001-.003 4.886 4.886z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Profile = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Menu = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Home = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8.772l-6.98-6.979a3 3 0 00-4.242 0L3 8.571v14.515h7v-6a2 2 0 114 0v6h7V8.772zm-9.808-5.565L5 9.4v11.686h3v-4a4 4 0 018 0v4h3V9.6l-6.393-6.394a1 1 0 00-1.415 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Eye = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c5.591 0 10.29 3.824 11.622 9-1.332 5.176-6.03 9-11.622 9S1.71 17.176.378 12C1.71 6.824 6.408 3 12 3zm0 16c-4.476 0-8.269-2.942-9.543-7C3.731 7.942 7.524 5 12 5c4.476 0 8.269 2.942 9.543 7-1.274 4.058-5.067 7-9.543 7z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ChevronLeft = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ChevronDown = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.343 7.757L4.93 9.172 12 16.242l7.071-7.07-1.414-1.415L12 13.414 6.343 7.757z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ArrowLongRight = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M23.068 11.993l-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ShoppingBag = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.67 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Bell = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3v.29c2.892.86 5 3.539 5 6.71v7h1v2H4v-2h1v-7a7.003 7.003 0 015-6.71V3a2 2 0 114 0zM7 17h10v-7a5 5 0 00-10 0v7zm7 4v-1h-4v1a2 2 0 104 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Search = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Close = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Pen = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.264 2.293a1 1 0 00-1.415 0l-.872.872a3.001 3.001 0 00-3.415.587L4.955 14.358l5.657 5.657L21.22 9.408c.924-.923 1.119-2.3.586-3.414l.873-.873a1 1 0 000-1.414l-1.415-1.414zm-4.268 8.51l-6.384 6.384-2.828-2.829 6.383-6.383 2.829 2.829zm1.818-1.818l.99-.99a1 1 0 000-1.415l-1.413-1.414a1 1 0 00-1.415 0l-.99.99 2.828 2.83z"
        fill="currentColor"
      />
      <Path d="M2 22.95l2.122-7.778 5.656 5.657L2 22.95z" fill="currentColor" />
    </Svg>
  )
}

export const User = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
      <Path
        d="M16 15a1 1 0 00-1-1H9a1 1 0 00-1 1v6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-2v-6z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Gift = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.535 2.879a3 3 0 00-4.242 0l-1.414 1.414c-.06.06-.118.122-.172.186a3.01 3.01 0 00-.171-.186L10.12 2.879A3 3 0 105.88 7.12L6.757 8H1v6h2v8h18v-8h2V8h-6.343l.878-.879a3 3 0 000-4.242zM14.707 7.12l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zm-4.586-1.414L8.707 4.293a1 1 0 10-1.414 1.414l1.414 1.414a1 1 0 101.414-1.414zM21 10v2H3v-2h18zm-8.083 4H19v6h-6.083v-6zm-1.834 0v6H5v-6h6.083z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ChevronRight = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.586 6.343L12 4.93 19.071 12 12 19.071l-1.414-1.414L16.243 12l-5.657-5.657z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const SortAZ = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6 8a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM8 12a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM11 15a1 1 0 100 2h2a1 1 0 100-2h-2z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Filters = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.708 15.44a6.968 6.968 0 003.997 1.266 7 7 0 106.59-9.413A7 7 0 104.708 15.44zM5.855 13.8a4.976 4.976 0 002.432.886 6.97 6.97 0 011.256-4.408 6.97 6.97 0 013.713-2.687 5 5 0 10-7.4 6.21zm12.29-3.603a4.977 4.977 0 00-2.432-.885 6.97 6.97 0 01-1.256 4.408 6.97 6.97 0 01-3.713 2.687 5 5 0 107.4-6.21z"
        fill="currentColor"
      />
    </Svg>
  )
}
