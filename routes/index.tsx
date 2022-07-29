/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ReviewComponent from "../static/SingleReviewComponent.tsx"
import Counter from "../islands/Counter.tsx";
import { CriticsRootObject } from "../utils/CriticsData.ts";
import { Handlers, PageProps } from "$fresh/server.ts"

export const handler: Handlers<CriticsRootObject | null> = {
  async GET(_req, ctx) {
    // get data
    const resp = await fetch("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=U0NXqOCdrOGD8htSehTuv4q5lUheTRHf")
    if (resp.status === 200) {
      const criticsData: CriticsRootObject = await resp.json()
      return ctx.render(criticsData)
    }
    return ctx.render(null)
  },
};

export default function Home(criticsData: PageProps<CriticsRootObject | null>) {
  if (!criticsData) {
    return <h1>Data was not available!</h1>
  }
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class={tw`my-6`}>
        New Washington Post Movie Critics are in:
      </h1>
      <ul>
        {criticsData.data?.results.map(crtic => {
          return <li>
            {ReviewComponent(crtic)}
          </li>
        })
        }
      </ul>
    </div>
  );
}
