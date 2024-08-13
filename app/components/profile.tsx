import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex w-full gap-4 md:w-[600px]">
      <Image
        src="/image.jpg"
        height={100}
        width={100}
        alt="Profile Image"
        className="aspect-square rounded-full object-cover"
      />
      <div className="space-y-2 pt-1 text-slate-600">
        <div className="text-lg font-bold">@Donghyun</div>
        <div className="text-sm">안녕하세요. 개발자 동현입니다.</div>
        <div className="flex space-x-4">
          <Image src="/github.svg" height={20} width={20} alt="Profile Image" />
          <Image
            src="/instagram.svg"
            height={20}
            width={20}
            alt="Profile Image"
          />
          <Image
            src="/linkedin.svg"
            height={20}
            width={20}
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
}
