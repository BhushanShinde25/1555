import dynamic from "next/dynamic";

const GardenScene = dynamic(() => import("@/components/GardenScene"), { ssr: false });

export default function ExplorePage() {
  return <GardenScene />;
}
