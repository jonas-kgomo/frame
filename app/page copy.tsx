import { BlogPosts } from "app/components/posts";
import Chart from "./components/ui/radial";
import Uhura from "./components/ui/area";

export default function Page() {
  return (
    <section>
      <h1 className="text-5xl font-bold   text-4xl">FRAME</h1>
      <h1 className="mb-4  font-bold   text-xl">
        {`Threat Research and Assessment for Critical Evaluations`}
      </h1>

      <h1 className="mb-4 font-medium">{`Partnerships`}</h1>

      <p className="mb-4">
        {`Our team brings together AI expertise, language preservation, cultural history, and justice to build a more inclusive digital future. We partner with OpenAI to enhance multilingual safety. Our mission? To safeguard language diversity and justice through AI. Need to track societal impacts in LLMs? We're on it. We offer flexible, short-term compute solutions tailored to your needs, without the burden of long-term contracts.`}
      </p>
      <h1 className="mb-4 font-medium">{`Partnerships`}</h1>
      <p className="mb-4">
        {`We have previously worked with OpenAI, and other companies to evaluate GPT-4o. These companies have also given us some kinds of non-public access and provided compute credits to support evaluation research.`}
      </p>

      <button> Button here </button>

      <h1 className="mb-4 font-medium">{`Benchmarks`}</h1>

      <p className="mb-4">
        {`Uhura Eval: This novel reading comprehension evaluation was created with fluent speakers of the languages and inspected for quality.`}
      </p>

      <Chart />

      <div className="my-8">
        <h1 className="mb-4 font-medium">{`Evaluations`}</h1>

        <BlogPosts />
      </div>

      <div>
        <Uhura />
      </div>
    </section>
  );
}
