import { useRouter } from "next/router";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (language: string) => {
    // Change de langue tout en restant sur la même page
    router.push(router.asPath, router.asPath, { locale: language });
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      {/* Drapeau français */}
      <button
        onClick={() => handleLanguageChange("fr")}
        className="flex items-center hover:opacity-75 active:opacity-75"
      >
        <Image
          src="/icon/fr.svg"
          alt="Français"
          width={42}
          height={32}
          className="cursor-pointer"
        />
      </button>

      {/* Drapeau anglais */}
      <button
        onClick={() => handleLanguageChange("en")}
        className="flex items-center hover:opacity-75 active:opacity-75"
      >
        <Image
          src="/icon/en.svg"
          alt="English"
          width={42}
          height={32}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
