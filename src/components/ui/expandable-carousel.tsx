import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string; caption: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string; caption: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "space-y-10 overflow-hidden h-full w-20 min-w-[166px] cursor-pointer rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[1px]": index !== activeItem,
        })}
      />
    </div>
  );
};

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Recruitment Agencies",
    caption: "Automate bulk hiring and manage client pipelines with ease.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "HR Teams",
    caption: "Reduce hiring time and enhance candidate experience",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Enterpises",
    caption: "Scale hiring intelligent and AI driven insights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Statups",
    caption: "Find top talent without the hassle of manual process",
  },
];

export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <>
      <div className={cn("flex h-96 w-full gap-1", className)}>
        {list.map((item, index) => (
          <List
            key={item.title}
            item={item}
            index={index}
            activeItem={activeItem}
            onMouseEnter={() => {
              setActiveItem(index);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          />
        ))}
      </div>
      <div className="gap-4">
        <p className="text-grayscale-text-title font-semibold text-2xl leading-8">
          {list[activeItem].title}
        </p>
        <p className="text-grayscale-text-caption leading-6">
          {list[activeItem].caption}
        </p>
      </div>
    </>
  );
}
