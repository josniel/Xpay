export default function PieChart({
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
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M27.6,16c-0.5-0.5-1.1-0.7-1.8-0.7h-8.6c-0.3,0-0.7-0.1-0.9-0.4C16.1,14.6,16,14.3,16,14V5.1c0,0,0-0.1,0-0.1
		c0-0.3-0.1-0.6-0.3-0.9c-0.2-0.3-0.4-0.5-0.6-0.7c-0.2-0.2-0.5-0.3-0.8-0.4c-0.3-0.1-0.6-0.1-0.9-0.1c0,0-0.1,0-0.1,0
		C11,3.4,8.9,4.5,7.3,6c-1.6,1.6-2.8,3.5-3.4,5.7c-0.6,2.2-0.6,4.5-0.1,6.6c0.6,2.2,1.7,4.2,3.3,5.8c1.6,1.6,3.6,2.7,5.8,3.3
		c1,0.3,2.1,0.4,3.2,0.4c1.2,0,2.3-0.2,3.5-0.5c2.2-0.6,4.1-1.8,5.7-3.4c1.6-1.6,2.6-3.7,3.2-5.9c0-0.1,0-0.2,0-0.3
		C28.4,17.1,28.1,16.4,27.6,16z M23.4,22.2c-1.2,1.3-2.8,2.3-4.5,2.8c-1.7,0.5-3.6,0.5-5.3,0.1c-1.7-0.5-3.3-1.4-4.6-2.6
		c-1.3-1.3-2.2-2.9-2.6-4.6c-0.5-1.7-0.4-3.6,0.1-5.3c0.5-1.7,1.5-3.3,2.8-4.5c1.2-1.2,2.8-2,4.4-2.5V14c0,1,0.4,2,1.1,2.7
		c0.7,0.7,1.7,1.1,2.7,1.1h8.6C25.4,19.4,24.5,20.9,23.4,22.2z"
      />
      <path
        fill="currentColor"
        d="M21,12.7h5.7c0.4,0,0.8-0.2,1-0.5c0.2-0.3,0.3-0.8,0.2-1.2c-0.6-1.8-1.7-3.4-3-4.7c-1.3-1.3-3-2.4-4.7-3
		c-0.4-0.1-0.8-0.1-1.2,0.2c-0.3,0.2-0.5,0.6-0.5,1v5.7c0,0.7,0.3,1.3,0.7,1.8C19.7,12.4,20.4,12.7,21,12.7z M21,6.4
		c0.8,0.4,1.5,1,2.1,1.6c0.6,0.6,1.2,1.3,1.6,2.1H21V6.4z"
      />
    </svg>
  );
}