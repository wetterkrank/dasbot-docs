import Image from "next/image";

import DasbotLogo from "@/components/DasbotLogo";
import TelegramButton from "@/components/TelegramButton";
import screenshot from "/public/img/screenshot.png";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <DasbotLogo height={"90px"} />

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Say hallo to Dasbot!
          </h1>
          <p className="mt-4 text-lg leading-8 text-sky-600 font-semibold sm:text-xl">
            Its mission is to help you learn German articles.
          </p>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            It will send you a short quiz on Telegram every day. With its
            guidance, you will learn the genders of the 2000 most frequently
            used German nouns.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <TelegramButton url="https://t.me/derdiedas_quizbot" />
            <a
              href="#"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Read the grammar <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none max-w-full sm:max-w-xl lg:max-w-xl">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={screenshot}
                className="w-[30rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                alt="Dasbot screenshot"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
