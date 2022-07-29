/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Result } from "../utils/CriticsData.ts";
import { PageProps } from "$fresh/server.ts"

export default function ReviewComponent(result: Result) {
  const resultData = result
  return (
    <div class={tw`flex justify-between m-6`}>
      <div class={tw`flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg`}>
        <img
          class={tw`rounded-lg rounded-b-none"`}
          src={resultData.multimedia.src}
          alt="thumbnail"
          loading="lazy"
        />
        <div class={tw`flex justify-between -mt-4 px-4`}>
          <span
            class={tw`inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5`}
          >{resultData.display_title}</span>
          <span
            class={tw`flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium`}
          >
            <p class={tw`text-blue-500 font-semibold text-xs`}>
              {resultData.opening_date}
            </p>
          </span>
        </div>
        <div class={tw`py-2 px-4`}>
          <h1
            class={tw`text-xl font-medium leading-6 tracking-wide text-gray-300`}
          >
            <p href="blog/detail">{resultData.headline}</p>
          </h1>
        </div>
        <div class={tw`px-4 space-y-2`}>
          <p class={tw`text-gray-400 font-normal leading-5 tracking-wide`}>
            {resultData.summary_short}
          </p>
          <a class={tw`text-gray-300 hover:text-blue-500 cursor-pointer`} href={resultData.link.url}>{resultData.link.suggested_link_text}</a>
        </div>
        <div class={tw`flex flex-row items-end h-full w-full px-4 mt-4`}>
          <div class={tw`flex border-t border-gray-700 w-full py-4`}>
            <div
              class={tw`flex items-center space-x-3 border-r border-gray-700 w-full`}
            >
              <img
                class={tw`object-cover w-8 h-8 border-2 border-white rounded-full`}
                src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                alt="profile users"
                loading="lazy"
              />
              <div class="">
                <p class={tw`text-sm font-semibold tracking-wide text-gray-200`}>
                {resultData.byline}
                </p>
                <p class={tw`text-xs font-light tracking-wider text-gray-300`}>
                {resultData.date_updated}
                </p>
              </div>
            </div>
            <div class={tw`flex items-center flex-shrink-0 px-2`}>
              <div class={tw`flex items-center space-x-1 text-gray-400`}>
                <p class={tw`font-medium`}>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
