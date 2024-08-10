import Marquee from "@/components/ui/Marquee";
import { data } from "@/constants/mock";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative sm:h-[380px] sm:w-72 h-[250px] w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex- items-center gap-2 background">
        <Image className="" fill alt="" src={img} />
      </div>
    </figure>
  );
};

export default function Home() {
  return (
    <div className=" flex flex-col gap-4 w-full px-10">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Poke Cards
      </span>
      <Marquee className="[--duration:20s] w-full">
        {data.slice(40, 48).map((review) => (
          <ReviewCard key={review.id} img={review.images.small} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s] w-full">
        {data.slice(9, 17).map((review) => (
          <ReviewCard key={review.id} img={review.images.small} />
        ))}
      </Marquee>
    </div>
  );
}
