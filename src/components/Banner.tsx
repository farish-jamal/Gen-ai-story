import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import banner from "../assets/banner.png";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <div className="flex items-center justify-center w-full mt-24 flex-col space-y-3">
        <Badge className="mb-5 rounded-sm text-xs font-thin px-3">
          Index 1.0 - Public Beta{" "}
        </Badge>
        <p className="mt-4 text-4xl font-bold text-center leading-snug">
          Turn your{" "}
          <span className="bg-[#6346fe] text-white px-4 py-1 rounded-lg shadow-md">
            ideas into stories
          </span>
          <br className="hidden sm:block" />
          instantly with AI.
        </p>
        <p className="text-center">
          Let your thoughts take flight, and we'll be the wind beneath their
          wings, <br /> transforming them into stories that soar 🚀
        </p>
        <Button className="w-32">
          Explore <ArrowRight />
        </Button>
      </div>
      <div className="w-[60%] mt-20">
        <AspectRatio ratio={16 / 9}>
          <img src={banner} alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
    </div>
  );
};

export default Banner;
