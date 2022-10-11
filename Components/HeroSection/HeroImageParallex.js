import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
export function HeroImageParallex() {
  return (
    <ParallaxProvider>
      <div className="h-screen w-full absolute left-0 top-0 -z-10 opacity-70">
        <ParallaxBanner
          layers={[
            { image: `/${Math.floor(Math.random() * 13)}.jpg`, speed: -30 },
          ]}
          className="w-screen min-h-screen object-cover object-center"
        ></ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
}
