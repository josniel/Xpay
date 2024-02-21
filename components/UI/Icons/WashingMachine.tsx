export default function WashingMachine({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M12.6621 1.33325H3.51927C3.1586 1.33325 2.86621 1.63173 2.86621 1.99992V13.9999C2.86621 14.3681 3.1586 14.6666 3.51927 14.6666H12.6621C13.0228 14.6666 13.3152 14.3681 13.3152 13.9999V1.99992C13.3152 1.63173 13.0228 1.33325 12.6621 1.33325Z"
        stroke="currentColor"
      />
      <path
        d="M2.86621 5.1665H13.3152"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3972 3.99984C9.75788 3.99984 10.0503 3.70136 10.0503 3.33317C10.0503 2.96498 9.75788 2.6665 9.3972 2.6665C9.03653 2.6665 8.74414 2.96498 8.74414 3.33317C8.74414 3.70136 9.03653 3.99984 9.3972 3.99984Z"
        fill="currentColor"
      />
      <path
        d="M11.3562 3.99984C11.7169 3.99984 12.0092 3.70136 12.0092 3.33317C12.0092 2.96498 11.7169 2.6665 11.3562 2.6665C10.9955 2.6665 10.7031 2.96498 10.7031 3.33317C10.7031 3.70136 10.9955 3.99984 11.3562 3.99984Z"
        fill="currentColor"
      />
      <path
        d="M8.0904 12.3332C9.35277 12.3332 10.3761 11.2885 10.3761 9.99984C10.3761 8.71117 9.35277 7.6665 8.0904 7.6665C6.82804 7.6665 5.80469 8.71117 5.80469 9.99984C5.80469 11.2885 6.82804 12.3332 8.0904 12.3332Z"
        stroke="currentColor"
      />
    </svg>
  );
}