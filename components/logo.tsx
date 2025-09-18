import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
      alt="Vobile Logo"
      width={100}
      height={100}
    />
  );
}
