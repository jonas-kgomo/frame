import { BlogPosts } from "app/components/posts";
import Chart from "./components/ui/radial";
import Uhura from "./components/ui/area";
import { Button } from "./components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <section>
      <h1 className="text-5xl font-bold text-4xl">FRAME</h1>
      <h1 className="mb-4 font-semibold text-xl">
        {`Foundation for Reasoning and Macrostrategy Engagement`}
      </h1>

      <div className="relative bg-white py-12 my-2">
        <img
          src="./direction.svg"
          alt="Background Image"
          className="absolute inset-0 w-full h-56  object-cover opacity-80"
        />
        <div className="relative bg-white">
          <p className="m-4 p-2">
            {`We leverage Forecasting and Elicitation technology (Forelicit) for social good, particularly in developing countries. Our platform aims to predict the impact of AI on economies, healthcare and public digital infrastructure. `}
          </p>
        </div>
      </div>

      <h1 className="my-4  font-medium">{`Partnerships`}</h1>
      <p className="mb-4">
        {`This initiative combines Metaculus' forecasting capabilities with deliberation tools using baseline data to inform our insights.`}
      </p>
      <Button className="bg-orange-300/80 text-orange-800 my-2">
        {" "}
        Sign up to Request Evaluations <ArrowUpRight width={16} height={16} />
      </Button>

      <h1 className="mb-4 font-medium">{`Benchmarks`}</h1>

      <p className="mb-4">
        {`Uhura Eval: This novel reading comprehension evaluation was created with fluent speakers of the languages and inspected for quality.`}
      </p>

      <Chart />

      <div className="">
        <h1 className="mb-4 font-medium">{`Evaluations`}</h1>

        <BlogPosts />
      </div>

      <div>
        <Uhura />
        Our mission? To safeguard language diversity and justice through AI.
        Need to track societal impacts in LLMs? We're on it. We offer flexible,
        short-term compute solutions tailored to your needs, without the burden
        of long-term contracts.
      </div>
    </section>
  );
}
