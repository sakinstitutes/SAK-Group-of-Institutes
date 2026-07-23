import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sakinstitutes.com";

// Every static page route in src/app. Add new pages here when they are created.
const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  // Core pages
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },

  // Admission
  { path: "/admission", priority: 0.9, changeFrequency: "weekly" },
  { path: "/admission/apply", priority: 0.9, changeFrequency: "weekly" },
  { path: "/admission/online-application", priority: 0.8, changeFrequency: "weekly" },
  { path: "/admission/procedure", priority: 0.8, changeFrequency: "monthly" },
  { path: "/admission/fees", priority: 0.8, changeFrequency: "monthly" },
  { path: "/admission/merit-list", priority: 0.7, changeFrequency: "weekly" },
  { path: "/admission/prospectus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/admission/bank-details", priority: 0.6, changeFrequency: "monthly" },

  // Courses
  { path: "/courses", priority: 0.9, changeFrequency: "monthly" },
  { path: "/courses/bsc", priority: 0.8, changeFrequency: "monthly" },
  { path: "/courses/gnm", priority: 0.8, changeFrequency: "monthly" },
  { path: "/courses/msc", priority: 0.8, changeFrequency: "monthly" },
  { path: "/courses/post-basic", priority: 0.8, changeFrequency: "monthly" },

  // Departments
  { path: "/department/community-health", priority: 0.6, changeFrequency: "monthly" },
  { path: "/department/medical-surgical", priority: 0.6, changeFrequency: "monthly" },
  { path: "/department/obg", priority: 0.6, changeFrequency: "monthly" },
  { path: "/department/pediatric", priority: 0.6, changeFrequency: "monthly" },
  { path: "/department/psychiatric", priority: 0.6, changeFrequency: "monthly" },

  // Facilities
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/facilities/clinical-training", priority: 0.6, changeFrequency: "monthly" },
  { path: "/facilities/hostel", priority: 0.6, changeFrequency: "monthly" },
  { path: "/facilities/laboratories", priority: 0.6, changeFrequency: "monthly" },
  { path: "/facilities/library", priority: 0.6, changeFrequency: "monthly" },
  { path: "/facilities/transport", priority: 0.6, changeFrequency: "monthly" },

  // Staff
  { path: "/staff/principal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/staff/faculty", priority: 0.6, changeFrequency: "monthly" },
  { path: "/staff/administration", priority: 0.6, changeFrequency: "monthly" },
  { path: "/staff/guest-lecturers", priority: 0.5, changeFrequency: "monthly" },

  // Rules
  { path: "/rules", priority: 0.5, changeFrequency: "yearly" },
  { path: "/rules/anti-ragging", priority: 0.5, changeFrequency: "yearly" },
  { path: "/rules/code-of-conduct", priority: 0.5, changeFrequency: "yearly" },
  { path: "/rules/hostel-rules", priority: 0.5, changeFrequency: "yearly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
