import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { GoProjectRoadmap } from "react-icons/go";

import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { projImgs } from "@/assets/projImgs";

export default function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div id="Projects" className="w-screen md:h-screen mb-16 md:pt-20">
      <h1 className="text-3xl md:text-4xl font-bold md:pt-10 pl-12 md:pl-36 flex pb-2">
        <span>
          <GoProjectRoadmap />
        </span>
        &nbsp;&nbsp;Projects
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="w-full pt-5 border-y-[2px]"
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
              className="basis-4/5 md:basis-2/4 rounded-3xl hover:scale-105"
            >
              <div className="roundeed-3xl">
                <Card className="rounded-3xl">
                  <CardContent className="flex items-center justify-center w-full aspect-video bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-3xl">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="h-[80%] rounded-xl mt-5"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="p-4">
                <CardTitle className="text-lg">{img.title}</CardTitle>
                <CardDescription>{img.desc}</CardDescription>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
