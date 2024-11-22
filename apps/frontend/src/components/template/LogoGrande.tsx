import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({ weight: "400", subsets: ["latin"] });
export default function LogoGrande() {
  return (
    <Link
      href={"/"}
      className={`
        flex flex-col items-center gap-2
        ${font.className}`}
    >
      <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
      <h1 className="text-5xl">
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  );
}
