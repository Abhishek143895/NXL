import { servicesData, getServiceBySlug } from "@/data/services";
import { ServicePageContent } from "./service-page-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — NexLoom`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return <ServicePageContent service={service} />;
}
