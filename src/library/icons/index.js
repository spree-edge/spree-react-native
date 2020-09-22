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

export const Share = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18 9a3 3 0 10-2.977-2.63l-6.94 3.47a3 3 0 100 4.319l6.94 3.47a3 3 0 10.895-1.789l-6.94-3.47a3.03 3.03 0 000-.74l6.94-3.47C16.456 8.68 17.19 9 18 9z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Smile = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16 13h-2a2 2 0 11-4 0H8a4 4 0 008 0zM10 10a1 1 0 11-2 0 1 1 0 012 0zM15 11a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const SmileSad = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 11a1 1 0 100-2 1 1 0 000 2zM14 17a2 2 0 10-4 0H8a4 4 0 018 0h-2zM16 10a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const MathMinus = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const MathPlus = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 4a1 1 0 00-1 1v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V5a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Dollar = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19v3h2v-3h1a4 4 0 000-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 100 8h1v4H9v-2H7v4h4zm2-2h1a2 2 0 100-4h-1v4zm-2-6V7h-1a2 2 0 100 4h1z"
        fill="currentColor"
      />
    </Svg>
  )
}


export const Repeat = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.37 8l-4.5 2.598V9H6.89v4h-2V7h8.98V5.402L18.37 8zM10.13 17h8.98v-6h-2v4h-6.98v-1.598L5.63 16l4.5 2.598V17z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ShoppingCart = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.792 2H1v2h3.218l2.77 12.678H7V17h13v-.248l2.193-9.661L22.531 6H6.655l-.57-2.611L5.792 2zm14.195 6H7.092l1.529 7h9.777l1.589-7z"
        fill="currentColor"
      />
      <Path
        d="M10 22a2 2 0 100-4 2 2 0 000 4zM19 20a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const CustomIconTruck = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} fill="none" viewBox="0 0 32 32" {...props}>
      <Path
        fill="#9B9B9B"
        d="M1 10h13l1 2H2l-1-2zm1.333 4h13l1 2h-13l-1-2zM24 24.667c1.107 0 2-.894 2-2 0-1.107-.893-2-2-2s-2 .893-2 2c0 1.106.893 2 2 2zm2-12h-3.333V16h5.946L26 12.667zm-15.333 12c1.106 0 2-.894 2-2 0-1.107-.894-2-2-2-1.107 0-2 .893-2 2 0 1.106.893 2 2 2zm16-14l4 5.333v6.667H28c0 2.213-1.787 4-4 4s-4-1.787-4-4h-5.333c0 2.213-1.8 4-4 4-2.214 0-4-1.787-4-4H4V18h2.667v2H7.68a4.018 4.018 0 012.987-1.333c1.186 0 2.253.52 2.986 1.333H20V8H4a2.658 2.658 0 012.667-2.667h16v5.334h4z"
      />
    </Svg>
  )
}

export const CustomIconOriginal = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} fill="none" viewBox="0 0 32 32" {...props}>
      <Path
        fill="#9B9B9B"
        fillRule="evenodd"
        d="M19.338 1.728L16 0l-3.338 1.728-3.716.564-1.684 3.36-2.674 2.64L5.2 12l-.612 3.708 2.674 2.64 1.684 3.36 3.716.564L16 24l3.338-1.728 3.716-.564 1.684-3.36 2.674-2.64L26.8 12l.612-3.708-2.674-2.64-1.684-3.36-3.716-.564zm2.392 2.386l-3.02-.458L16 2.252l-2.71 1.404-3.02.458-1.368 2.73L6.73 8.988 7.228 12l-.5 3.012 2.174 2.144 1.368 2.73 3.02.458L16 21.748l2.712-1.404 3.018-.458 1.368-2.73 2.172-2.144L24.774 12l.496-3.012-2.172-2.144-1.368-2.73z"
        clipRule="evenodd"
      />
      <Path
        fill="#9B9B9B"
        d="M8 23.588V32l8-2 8 2v-8.412l-4.036.612L16 26.252 12.036 24.2 8 23.588zM16 6l1.347 4.146h4.36l-3.527 2.562 1.347 4.146L16 14.292l-3.527 2.562 1.347-4.146-3.526-2.562h4.359L16 6z"
      />
    </Svg>
  )
}

export const IcOutlineAssignmentReturn = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} fill="none" viewBox="0 0 32 32" {...props}>
      <Path
        fill="#9B9B9B"
        d="M16 18.667h5.333v-5.334H16v-4L9.333 16 16 22.667v-4zM25.333 4H19.76C19.2 2.453 17.733 1.333 16 1.333c-1.733 0-3.2 1.12-3.76 2.667H6.667c-.187 0-.36.013-.534.053a2.685 2.685 0 00-1.92 1.587A2.575 2.575 0 004 6.667v18.666c0 .36.08.72.213 1.04.134.32.334.6.574.854.36.36.826.626 1.346.733.174.027.347.04.534.04h18.666C26.8 28 28 26.8 28 25.333V6.667C28 5.2 26.8 4 25.333 4zM16 3.667c.547 0 1 .453 1 1 0 .546-.453 1-1 1-.547 0-1-.454-1-1 0-.547.453-1 1-1zm9.333 21.666H6.667V6.667h18.666v18.666z"
      />
    </Svg>
  )
}

export const RiSecurePaymentFill = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} fill="none" viewBox="0 0 32 32" {...props}>
      <Path
        fill="#9B9B9B"
        d="M14.667 2.667l9.73 3.04a1.33 1.33 0 01.937 1.273v2.353H28a1.335 1.335 0 011.333 1.334v2.666H12v-2.666a1.333 1.333 0 011.333-1.333h9.334V7.96l-8-2.501-8 2.501v9.872a5.336 5.336 0 002.077 4.225l.252.182 5.67 3.868 5.043-3.44h-6.376A1.335 1.335 0 0112 21.333V16h17.333v5.333A1.333 1.333 0 0128 22.666l-4.293.002a7.977 7.977 0 01-1.867 1.773l-7.173 4.892-7.174-4.89A8.001 8.001 0 014 17.832V6.98a1.333 1.333 0 01.936-1.272l9.73-3.041z"
      />
    </Svg>
  )
}

export const Browse = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.364 13.121c.924.924 1.12 2.3.586 3.415l1.535 1.535a1 1 0 01-1.414 1.414l-1.535-1.535a3.001 3.001 0 01-3.415-4.829 3 3 0 014.243 0zM12.95 15.95a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414z"
        fill="currentColor"
      />
      <Path d="M8 5h8v2H8V5zM16 9H8v2h8V9z" fill="currentColor" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a3 3 0 013-3h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm3-1h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const Support = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.26 21.997a10.276 10.276 0 01-.52 0 10.004 10.004 0 01-8.983-6.173 10.034 10.034 0 01.017-7.69A10.015 10.015 0 014.908 4.95l.042-.042a10.015 10.015 0 013.167-2.126 10.034 10.034 0 017.753-.006 10.015 10.015 0 013.186 2.138l.03.03c.913.917 1.65 2.01 2.153 3.223a10.012 10.012 0 01.76 3.985 10.004 10.004 0 01-6.226 9.112 10.013 10.013 0 01-3.512.733zm1.772-6.55l2.874 2.873a8.004 8.004 0 01-9.812 0l2.874-2.874a4.007 4.007 0 004.064 0zm-5.478-1.415L5.68 16.906a8.004 8.004 0 010-9.812l2.874 2.874a4.007 4.007 0 000 4.064zm1.528-1.463a2.01 2.01 0 01-.014-1.087 1.99 1.99 0 01.518-.896 1.99 1.99 0 011.932-.518c.328.088.639.26.896.518a1.99 1.99 0 01.518 1.932c-.088.328-.26.639-.518.896a1.99 1.99 0 01-1.932.518 1.991 1.991 0 01-.896-.518 1.99 1.99 0 01-.504-.845zm3.95-4.015a4.007 4.007 0 00-4.064 0L7.094 5.68a8.004 8.004 0 019.812 0l-2.874 2.874zm4.288 8.352a8.004 8.004 0 000-9.812l-2.874 2.874a4.007 4.007 0 010 4.064l2.874 2.874z"
      fill="currentColor"
    />
  </Svg>
  )
}

export const CheckR = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.243 16.314L6 12.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H5a4 4 0 01-4-4V5zm4-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const CreditCard = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 9a1 1 0 011-1h4a1 1 0 010 2H5a1 1 0 01-1-1z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a4 4 0 00-4 4v10a4 4 0 004 4h16a4 4 0 004-4V7a4 4 0 00-4-4H4zm16 2H4a2 2 0 00-2 2v7h20V7a2 2 0 00-2-2zm2 11H2v1a2 2 0 002 2h16a2 2 0 002-2v-1z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const ChevronUp = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.657 16.243l1.414-1.414-7.07-7.072-7.072 7.072 1.414 1.414L12 10.586l5.657 5.657z"
        fill="currentColor"
      />
    </Svg>
  )
}

export const CheckO = ({ size , ...props }) => {
  return (
    <Svg width={size || 50} height={size || 50} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.243 16.314L6 12.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 110-18 9 9 0 010 18z"
        fill="currentColor"
      />
    </Svg>
  )
}