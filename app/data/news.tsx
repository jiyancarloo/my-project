interface ContentBlock {
  type: "paragraph" | "image";
  text?: string;
  imageIndex?: number;
}
interface NewsItem {
  title: string;
  slug: string;
  date: string;
  exerpt: string;
  coverImage: { src: string; alt: string };
  images: { src: string; alt: string }[];
  content: ContentBlock[];
}

export const news: NewsItem[] = [
  {
    title: "2025 Philippine Digestive Health Week Joint Annual Convention",
    slug: "philippine-digestive-health-week",
    date: "Mar 17, 2025",
    exerpt:
      "Panamed Philippines, Inc. proudly participated in the 2025 Philippine Digestive Health Week Joint Annual Convention",
    coverImage: {
      src: "/news_images/News_1/article_cover.jpg",
      alt: "article_cover",
    },

    images: [
      { src: "/news_images/News_1/article_cover.jpg", alt: "article_cover" },
      { src: "/news_images/News_1/image_1.jpg", alt: "image1" },
      { src: "/news_images/News_1/image_2.jpg", alt: "image2" },
      { src: "/news_images/News_1/image_3.jpg", alt: "image3" },
    ],
    content: [
      {
        type: "paragraph",
        text: "We showcased our latest and most innovative digestive healthcare solutions. Held at Grand Hyatt Manila, BGC, this prestigious gathering brought together leading medical professionals, industry experts, and healthcare innovators to discuss advancements in digestive health.Throughout the event, our booth became a hub for insightful discussions as doctors and healthcare practitioners explored our cutting-edge products designed to enhance patient care. ",
      },
      /* {
        type: "image",
        imageIndex: 1,
      },
      {
        type: "image",
        imageIndex: 2,
      }, */
      {
        type: "paragraph",
        text: "Our team was honored to connect with esteemed professionals, exchange knowledge, and highlight how our solutions contribute to the future of digestive healthcare. We extend our heartfelt gratitude to everyone who visited our booth and engaged with us. Your support and enthusiasm drive us to continue developing and providing top-tier medical solutions for the industry. We look forward to seeing you at future conventions as we remain committed to advancing healthcare innovations. ",
      },
    ],
  },
  {
    title:
      "PPI Corporate and Social Responsibility: Supporting Healthcare and Serving the Community",
    slug: "supporting-healthcare",
    date: "Jan 21, 2025",
    exerpt:
      "As part of our CSR initiatives, PPI recently donated essential medical devices to San Juan Medical Center.",
    coverImage: {
      src: "/news_images/News_2/article_cover.jpg",
      alt: "article_cover",
    },

    images: [
      { src: "/news_images/News_2/article_cover.jpg", alt: "article_cover" },
      { src: "/news_images/News_2/image_1.jpg", alt: "image1" },
      { src: "/news_images/News_2/image_2.jpg", alt: "image2" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Aiming to enhance healthcare services and support those in need. The donation was gratefully received by Dr. Joselito P. Lonzame, Assistant Medical Director, and Dra. Elenita Fernando, Chief of Clinics. At PPI, we are dedicated to making a positive impact, not only through our products but also through actions that truly make a difference in the community. ",
      },
      /*    {
        type: "image",
        imageIndex: 0,
      }, */

      {
        type: "paragraph",
        text: "Together, we can continue to serve and support those who need it most.",
      },
    ],
  },
  {
    title:
      "Redefining the Future of Pulmonary Care: Our Participation at Bronc and Beyond 2025",
    slug: "redefining-pulmonary-care",
    date: "Mar   19, 2025",
    exerpt:
      "The future of pulmonary care is here — and we’re proud to be part of the conversation.",
    coverImage: {
      src: "/news_images/News_3/image_1.jpg",
      alt: "article_cover",
    },

    images: [
      { src: "/news_images/News_3/article_cover.jpg", alt: "article_cover" },
      { src: "/news_images/News_3/image_3.jpg", alt: "image3" },
      { src: "/news_images/News_3/image_1.jpg", alt: "image1" },
      { src: "/news_images/News_3/image_2.jpg", alt: "image2" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Our team recently took part in this premier event that brought together respiratory experts, clinicians, and industry innovators dedicated to advancing pulmonary medicine and patient care. At our booth, we showcased our latest respiratory and critical care solutions, designed to meet the evolving demands of modern healthcare. Attendees had the opportunity to explore our cutting-edge technologies and engage directly with our team of experts, who shared insights into how our products are shaping the next generation of respiratory support. ",
      },

      /*  {
        type: "image",
        imageIndex: 2,
      }, */

      {
        type: "paragraph",
        text: "We extend our heartfelt thanks to everyone who stopped by our booth—your enthusiasm and interest drive us to continue innovating and improving. As we move forward, we remain steadfast in our commitment to delivering advanced healthcare solutions that empower medical professionals and improve the quality of life for patients everywhere.",
      },
    ],
  },
];
