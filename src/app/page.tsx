import { Meta } from "@once-ui-system/core";
import { about, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    path: about.path,
    image: about.image,
  });
}

export default function Home() {
  return <></>;
}
