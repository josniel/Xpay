export default function NotificationIcon({
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
      width={width || "1.05em"}
      height={height || "1.05em"}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7245 1.4913C10.3957 1.4913 10.0804 1.62137 9.84798 1.85289C9.61552 2.08442 9.48492 2.39843 9.48492 2.72586V2.84931C8.08521 3.13434 6.82727 3.89205 5.92381 4.9943C5.02035 6.09656 4.52681 7.47573 4.52664 8.89862V13.8368L3.03295 15.4763C2.31028 16.2701 2.87553 17.5405 3.95024 17.5405H8.57756C8.79515 17.9158 9.10811 18.2275 9.48498 18.4442C9.86184 18.6609 10.2893 18.7749 10.7245 18.7749C11.1597 18.7749 11.5871 18.6609 11.964 18.4442C12.3409 18.2275 12.6538 17.9158 12.8714 17.5405H17.4987C18.5735 17.5405 19.1387 16.2689 18.416 15.4763L16.9223 13.8368V8.89862C16.9222 7.47573 16.4286 6.09656 15.5252 4.9943C14.6217 3.89205 13.3638 3.13434 11.9641 2.84931V2.72586C11.9641 2.39843 11.8335 2.08442 11.601 1.85289C11.3685 1.62137 11.0532 1.4913 10.7245 1.4913ZM6.38599 14.5529L5.90256 15.0813L5.34971 15.6887H16.0993L15.5452 15.0813L15.063 14.5516V8.89862C15.063 8.33118 14.9508 7.76931 14.7327 7.24507C14.5147 6.72083 14.1951 6.24449 13.7923 5.84326C13.3894 5.44202 12.9111 5.12374 12.3848 4.9066C11.8584 4.68945 11.2942 4.57768 10.7245 4.57768C10.1548 4.57768 9.59059 4.68945 9.06422 4.9066C8.53785 5.12374 8.05958 5.44202 7.65671 5.84326C7.25384 6.24449 6.93427 6.72083 6.71624 7.24507C6.49821 7.76931 6.38599 8.33118 6.38599 8.89862V14.5529Z"
        fill="currentColor"
      />
    </svg>
  );
}
