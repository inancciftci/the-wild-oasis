import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" alt="Wild Oasis Logo" width="60" height="60" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
