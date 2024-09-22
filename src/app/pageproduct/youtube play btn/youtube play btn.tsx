function YoutubePlayBtn() {
  return (
    <div className=" relative py-40 overflow-hidden">
      <img
        className="scale-[2.7] "
        src="img/page-product/MW75_Video-Still_1280x720_V1.webp"
      ></img>
      <div>
        <div className="text-center absolute top-16 px-5 text-white text-4xl font-extralight ">
          PERFECT SOUND. PERFECT SILENCE.
        </div>
        <div className="text-center absolute top-52 px-9 text-white font-extralight text-sm font-sans">
          The MW75 Active Noise-Cancelling Wireless Headphones deliver detailed,
          serious acoustics and custom-tailored sound with 40mm Beryllium
          drivers and Adaptive Active Noise Cancellation for the perfect
          combination of sound and silence. Choose to listen in Adaptive, Max,
          or All Day ANC Mode for more tailored listening.
        </div>
        <button className="absolute px-40 bottom-16">
          <svg
            role="presentation"
            fill="none"
            focusable="false"
            width="48"
            height="48"
            viewBox="0 0 70 71"
            className="icon icon-play-button"
          >
            <rect
              x="1"
              y="1.68164"
              width="68"
              height="68"
              rx="34"
              stroke="white"
              strokeWidth="2"
            ></rect>
            <path
              d="M44 35.6816L30.5 43.4759L30.5 27.8874L44 35.6816Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default YoutubePlayBtn;
