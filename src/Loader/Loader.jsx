import "./StrokeAnimation.css"

function Loader() {
	return (
		<section className="absolute top-0 left-0 w-screen h-screen z-55 flex justify-center items-center">
			<svg
				width="313"
				height="111"
				viewBox="0 0 313 111"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
                    id="helloSVG"
					d="M61.0545 3.21545L61.002 3.21944L60.9497 3.22564C58.496 3.51634 56.4457 3.92366 54.9451 4.51626C54.1983 4.81119 53.4224 5.21477 52.7985 5.80612C52.1321 6.43767 51.5699 7.36319 51.5699 8.54137V39.047H36.4828V8.25806C36.4828 6.55183 35.3826 5.44038 34.388 4.82789C33.417 4.22988 32.1774 3.84794 30.8627 3.57806C28.1915 3.02973 24.3626 2.78331 19.4914 2.78331C14.6202 2.78331 10.7913 3.02973 8.12014 3.57806C6.80542 3.84794 5.56583 4.22988 4.59478 4.82789C3.60021 5.44038 2.5 6.55183 2.5 8.25806V102.175C2.5 104.057 3.95165 105.048 4.79031 105.466C5.72853 105.934 6.92521 106.234 8.21303 106.448C10.8382 106.884 14.6287 107.083 19.4914 107.083C24.3541 107.083 28.1446 106.884 30.7698 106.448C32.0576 106.234 33.2543 105.934 34.1925 105.466C35.0312 105.048 36.4828 104.057 36.4828 102.175V72.0947H51.5699V102.175C51.5699 104.057 53.0215 105.048 53.8602 105.466C54.7984 105.934 55.9951 106.234 57.2829 106.448C59.9081 106.884 63.6986 107.083 68.5613 107.083C73.424 107.083 77.2145 106.884 79.8396 106.448C81.1275 106.234 82.3241 105.934 83.2624 105.466C84.101 105.048 85.5527 104.057 85.5527 102.175V8.54137C85.5527 7.36319 84.9904 6.43767 84.3241 5.80612C83.7002 5.21478 82.9243 4.81119 82.1775 4.51627C80.6769 3.92366 78.6266 3.51634 76.1729 3.22564L76.0745 3.21398L75.9754 3.21015L68.658 2.92683L68.6097 2.92496H68.5613C66.1042 2.92496 63.6018 3.022 61.0545 3.21545ZM148.868 80.543C148.447 80.543 148.029 80.6481 147.654 80.8526C141.995 83.6777 136.041 85.0849 129.763 85.0849C126.994 85.0849 125.22 84.6163 124.158 83.9692C123.83 83.7068 123.501 83.2826 123.267 82.5771H130.337C139.533 82.5771 146.897 80.6082 151.982 76.2357C157.139 71.801 159.524 65.2705 159.524 57.129C159.524 49.5102 156.581 42.9969 150.829 37.7269C145.058 32.3512 137.002 29.8394 127.037 29.8394C116.789 29.8394 108.175 33.5673 101.376 40.9918L101.369 40.9988L101.363 41.0059C94.6444 48.4553 91.3932 58.2118 91.3932 70.0196C91.3932 81.7629 94.8084 91.2933 101.893 98.2882L101.9 98.2947L101.907 98.3011C108.9 105.104 117.522 108.5 127.611 108.5C137.325 108.5 145.515 106.718 152.021 102.972C154.96 101.541 156.081 98.6299 156.081 95.3759C156.081 91.9233 154.704 88.0381 152.325 83.8261C151.941 83.1153 151.606 82.5289 151.335 82.1127C151.213 81.9242 151.031 81.6567 150.812 81.4217C150.729 81.3317 150.468 81.0538 150.062 80.8398C149.849 80.7278 149.429 80.543 148.868 80.543ZM123.905 57.4894L123.911 57.4843L123.917 57.4792C124.787 56.7427 125.788 56.371 127.037 56.371C128.605 56.371 129.324 56.7648 129.671 57.1161C130.024 57.4725 130.42 58.2156 130.42 59.8205C130.42 61.0512 130.117 61.5129 129.953 61.6801C129.796 61.8393 129.367 62.1367 128.185 62.1367H122.937V60.2454C122.937 58.6832 123.383 57.9255 123.905 57.4894ZM177.845 107.225L177.86 107.225H177.876C182.77 107.225 186.517 107.119 189.069 106.897C190.324 106.788 191.408 106.641 192.228 106.427C192.618 106.325 193.122 106.165 193.583 105.883C193.961 105.653 195.01 104.9 195.01 103.45V6.41655C195.01 4.93715 193.896 4.20868 193.612 4.03755C193.197 3.78653 192.751 3.64033 192.42 3.54799C191.718 3.35249 190.799 3.2052 189.75 3.08331C187.614 2.83516 184.482 2.64371 180.402 2.50152L180.358 2.5H180.315C175.646 2.5 172.013 2.67614 169.499 3.05984C168.268 3.24784 167.125 3.51069 166.226 3.92228C165.5 4.255 163.897 5.17918 163.897 7.12482V103.592C163.897 105.018 164.932 105.749 165.264 105.954C165.687 106.215 166.137 106.36 166.46 106.447C167.144 106.633 168.029 106.761 169.021 106.859C171.045 107.059 174.002 107.177 177.845 107.225ZM216.937 107.225L216.953 107.225H216.968C221.863 107.225 225.61 107.119 228.161 106.897C229.416 106.788 230.501 106.641 231.32 106.427C231.71 106.325 232.215 106.165 232.676 105.883C233.054 105.653 234.103 104.9 234.103 103.45V6.41655C234.103 4.93715 232.988 4.20868 232.705 4.03755C232.289 3.78653 231.843 3.64033 231.512 3.54799C230.811 3.35249 229.892 3.2052 228.842 3.08331C226.706 2.83516 223.575 2.64371 219.494 2.50152L219.451 2.5H219.407C214.739 2.5 211.105 2.67614 208.592 3.05984C207.36 3.24784 206.217 3.51069 205.319 3.92228C204.592 4.255 202.99 5.17919 202.99 7.12482V103.592C202.99 105.018 204.024 105.749 204.356 105.954C204.779 106.215 205.229 106.36 205.552 106.447C206.237 106.633 207.122 106.761 208.114 106.859C210.138 107.059 213.095 107.177 216.937 107.225ZM248.903 97.9085L248.91 97.9159L248.916 97.9232C255.485 105.026 264.273 108.5 275 108.5C285.726 108.5 294.476 105.026 300.953 97.9085C307.418 90.805 310.5 81.117 310.5 69.1697C310.5 57.2224 307.418 47.5344 300.953 40.4309C294.476 33.3136 285.726 29.8394 275 29.8394C264.273 29.8394 255.485 33.3134 248.916 40.4162L248.91 40.4235L248.903 40.4309C242.438 47.5344 239.356 57.2224 239.356 69.1697C239.356 81.117 242.438 90.805 248.903 97.9085ZM269.465 69.0281C269.465 64.8597 270.122 62.1549 271.102 60.5659C271.959 59.1756 273.137 58.4958 275 58.4958C276.931 58.4958 278.144 59.1931 279.016 60.5827C280.01 62.1673 280.678 64.8646 280.678 69.0281C280.678 73.1915 280.01 75.8888 279.016 77.4734C278.144 78.8629 276.931 79.5603 275 79.5603C273.137 79.5603 271.959 78.8805 271.102 77.4902C270.122 75.9012 269.465 73.1964 269.465 69.0281Z"
				/>
			</svg>
		</section>
	);
}

export default Loader;
