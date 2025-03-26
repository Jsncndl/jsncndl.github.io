import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jsncndl.github.io/",
      lastModified: new Date(),
      priority: 1,
    },
/*     {
      url: "https://jsncndl.github.io/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://jsncndl.github.io/blog",
      lastModified: new Date(),
      priority: 0.5,
    }, */
  ];
}
