import Logo from "../ui/logo";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import MaxWidthWrapper from "./max-width-wrapper";
import { Typography } from "./typography";

const footerLinks = [
  {
    title: "Company",
    links: [
      "About Us",
      "Features",
      "Pricing",
      "Resources",
      "Blog",
      "Careers",
      "Start for Free",
      "Live Training",
      "ROI Calculator",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Integrations",
      "Documentation",
      "OpenAPI Integration",
      "Affiliate Program",
      "Security",
      "Changelog",
      "Non-Profits",
    ],
  },
];

const socialIcons = [
  { icon: Icons.facebook, name: "Facebook" },
  { icon: Icons.instagram, name: "Instagram" },
  { icon: Icons.youtube, name: "YouTube" },
  { icon: Icons.xTwitter, name: "Twitter" },
];

function FooterLinkSection({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="text-sm leading-6 text-grayscale-text-caption">
      <h4 className="font-medium mb-2">{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link} className="mb-1">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {socialIcons.map(({ icon: Icon, name }) => (
        <Button
          size="icon"
          key={name}
          className="size-10 bg-[#666DF233] hover:bg-[#666DF211]"
        >
          <Icon
            aria-label={name}
            className="text-grayscale-text-caption hover:text-blue-500 size-6"
          />
        </Button>
      ))}
    </div>
  );
}

export default function MarketingFooter() {
  return (
    <footer className="bg-gray-950 text-white py-16 px-8">
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6 max-w-sm">
          <Logo href />
          <Typography color="caption" type="sm">
            Appathon is an AI Recruitment Software enabling human resources
            departments and recruitment agencies to source and hire in the most
            effective way.
          </Typography>
          <Button className="w-fit">Try Appathon for FREE!</Button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-grayscale-text-caption">
              Follow Us
            </span>
            <SocialMedia />
          </div>
        </div>

        <div className="grid grid-cols-2">
          {footerLinks.map((section) => (
            <FooterLinkSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </MaxWidthWrapper>

      <div className="mt-12 text-center text-xs text-grayscale-text-body">
        <p>&copy; 2025 Appathon.ai &middot; All Rights Reserved.</p>
      </div>
    </footer>
  );
}
