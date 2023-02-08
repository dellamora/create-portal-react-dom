import type { Icon } from "./icon";

const CloseIcon: Icon = (props): JSX.Element => {
  props.className;
  props.width;
  props.onClick;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#656D72"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export default CloseIcon;