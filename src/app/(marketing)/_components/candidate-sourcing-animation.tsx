import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CandidateSourcingAnimation() {
  return (
    <div className="w-[545px] h-[673px] relative size-full">
      {/* Background Images */}
      <Image
        width={223}
        height={411}
        className="max-w-[223px] max-h-[411px] absolute top-0 left-0 z-20 shadow-2xl rounded-2xl"
        alt="job post information"
        src="/_static/marketing/job-post.png"
      />
      <Image
        width={269}
        height={519}
        className="max-w-[271px] max-h-[521px] absolute top-10 right-28 shadow-2xl rounded-2xl"
        alt="job post information"
        src="/_static/marketing/description.png"
      />

      {/* Animated Avatars */}
      <motion.div
        className="absolute top-[35%] left-0 z-20"
        animate={{ x: [0, 15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Avatar className="border-2 border-background shadow-xl size-[85px]">
          <AvatarImage src="/_static/marketing/user2.jpg" />
        </Avatar>
      </motion.div>

      <motion.div
        className="absolute top-10 right-28 z-20"
        animate={{ x: [0, -10, 5, 0], y: [0, 10, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Avatar className="border-2 border-background shadow-xl size-[85px]">
          <AvatarImage src="/_static/marketing/user1.jpg" />
        </Avatar>
      </motion.div>

      <motion.div
        className="absolute top-[55%] right-28 z-20"
        animate={{ x: [0, 8, -8, 0], y: [0, -6, 6, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Avatar className="border-2 border-background shadow-xl size-[85px]">
          <AvatarImage src="/_static/marketing/user3.jpg" />
        </Avatar>
      </motion.div>

      <motion.div
        className="absolute top-[55%] right-[50%] z-20"
        animate={{ x: [0, -6, 6, 0], y: [0, 5, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Avatar className="border-2 border-background shadow-xl size-[85px]">
          <AvatarImage src="/_static/marketing/user4.jpg" />
        </Avatar>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 z-20"
        animate={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Avatar className="border-2 border-background shadow-xl size-[85px]">
          <AvatarImage src="/_static/marketing/user5.jpg" />
        </Avatar>
      </motion.div>
    </div>
  );
}
