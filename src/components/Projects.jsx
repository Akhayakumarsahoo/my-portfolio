import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { GoProjectRoadmap } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { projImgs } from "@/assets/projImgs";
import { Fade, Tooltip } from "@mui/material";

export default function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div id="Projects" className="w-screen h-fit md:h-screen mb-16 pt-20">
      <h1 className="text-3xl md:text-4xl font-bold md:pt-10 pl-12 md:pl-36 flex pb-2">
        <span className="mr-2">
          <GoProjectRoadmap />
        </span>
        Projects
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="w-full pt-5 border-y-[2px] ml-2 md:ml-0"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="w-full">
          {projImgs.map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-10/12 md:basis-2/4 rounded-3xl"
            >
              <div className="roundeed-3xl">
                <Tooltip
                  title="Visit"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 400 }}
                  followCursor
                  placement="top-start"
                >
                  <Card className="rounded-3xl overflow-hidden cursor-pointer">
                    <a href={img.link}>
                      <CardContent className="flex items-center justify-center w-full aspect-video bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-neutral-900 rounded-3xl">
                        <img
                          src={img.src}
                          alt={img.title}
                          className="object-cover rounded-xl mt-5"
                          loading="lazy"
                        />
                      </CardContent>
                    </a>
                  </Card>
                </Tooltip>
              </div>
              <div className="p-4">
                <CardTitle className="text-lg">
                  <div className="flex items-center cursor-pointer gap-4">
                    {img.title}
                    <a href={img.link}>
                      <LuExternalLink />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>{img.desc}</CardDescription>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
