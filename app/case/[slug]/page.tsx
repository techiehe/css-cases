import { componentNames, components } from "@/components";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${params.slug} | 案例`,
  };
}

export default function Case({ params }: { params: { slug: string } }) {
  const Componenet = components[params.slug];
  return (
    <div className="flex justify-center items-center min-h-screen w-full scale-50 md:scale-100">
        <Componenet />
    </div>
  );
}

export async function generateStaticParams() {
  // 返回所有案例的名称
  return componentNames.map((slug) => ({ slug }));
}
