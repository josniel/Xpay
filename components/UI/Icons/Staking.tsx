export default function Staking({
  width,
  height,
  props,
}: {
  width?: number;
  height?: number;
  [x: string]: any;
}) {
  return (
    <svg
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 1.75C8.34983 1.75 9.59933 1.988 10.5338 2.39692C10.9999 2.60108 11.4141 2.85892 11.7192 3.17508C12.0021 3.46675 12.2121 3.83308 12.2453 4.25775L12.25 4.375V10.2083C12.25 10.6832 12.0278 11.0892 11.7192 11.4082C11.4141 11.7244 10.9999 11.9823 10.5338 12.1864C9.59933 12.5948 8.34983 12.8333 7 12.8333C5.65017 12.8333 4.40067 12.5953 3.46617 12.1864C3.00008 11.9823 2.58592 11.7244 2.28083 11.4082C1.99792 11.1166 1.78792 10.7502 1.75467 10.3256L1.75 10.2083V4.375C1.75 3.90017 1.97225 3.49417 2.28083 3.17508C2.58592 2.85892 3.00008 2.60108 3.46617 2.39692C4.40067 1.98858 5.65017 1.75 7 1.75ZM11.0833 8.98742C10.9065 9.09337 10.7229 9.18768 10.5338 9.26975C9.59933 9.67808 8.34983 9.91667 7 9.91667C5.65017 9.91667 4.40067 9.67867 3.46617 9.26975C3.27705 9.18769 3.0935 9.09338 2.91667 8.98742V10.2083C2.91667 10.297 2.95517 10.4277 3.11967 10.5974C3.2865 10.7701 3.556 10.9521 3.934 11.1177C4.68883 11.4479 5.77208 11.6667 7 11.6667C8.22792 11.6667 9.31117 11.4479 10.066 11.1177C10.444 10.9521 10.7135 10.7701 10.8803 10.5974C11.0448 10.4282 11.0833 10.297 11.0833 10.2083V8.98742ZM11.0833 6.07075C10.9065 6.1767 10.7229 6.27101 10.5338 6.35308C9.59933 6.76142 8.34983 7 7 7C5.65017 7 4.40067 6.762 3.46617 6.35308C3.27705 6.27103 3.0935 6.17672 2.91667 6.07075V7.29167C2.91667 7.38033 2.95517 7.511 3.11967 7.68075C3.2865 7.85342 3.556 8.03542 3.934 8.20108C4.68883 8.53125 5.77208 8.75 7 8.75C8.22792 8.75 9.31117 8.53125 10.066 8.20108C10.444 8.03542 10.7135 7.85342 10.8803 7.68075C11.0448 7.51158 11.0833 7.38033 11.0833 7.29167V6.07075ZM7 2.91667C5.77208 2.91667 4.68883 3.13542 3.934 3.46558C3.556 3.63125 3.2865 3.81325 3.11967 3.98592C2.95517 4.15508 2.91667 4.28633 2.91667 4.375C2.91667 4.46367 2.95517 4.59433 3.11967 4.76408C3.2865 4.93675 3.556 5.11875 3.934 5.28442C4.68883 5.61458 5.77208 5.83333 7 5.83333C8.22792 5.83333 9.31117 5.61458 10.066 5.28442C10.444 5.11875 10.7135 4.93675 10.8803 4.76408C11.0448 4.59492 11.0833 4.46367 11.0833 4.375C11.0833 4.28633 11.0448 4.15567 10.8803 3.98592C10.7135 3.81325 10.444 3.63125 10.066 3.46558C9.31117 3.13542 8.22792 2.91667 7 2.91667Z"
        fill="currentColor"
      />
    </svg>
  );
}