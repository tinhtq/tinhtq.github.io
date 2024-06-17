import { personalData } from "@/utils/data/personal-data";

// Fetch blog data by slug
async function getBlog(slug) {
  const res = await fetch(
    `https://dev.to/api/articles/${personalData.devUsername}/${slug}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

// Fetch all slugs to generate static paths
async function fetchAllSlugs() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.map((article) => article.slug);
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Blog details component
export default async function BlogDetails({ params }) {
  const blog = await getBlog(params.slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}
