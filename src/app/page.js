import Image from "next/image";

export default function Home() {
  return (
      <Image
        src="/carbon-web/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
  );
}
