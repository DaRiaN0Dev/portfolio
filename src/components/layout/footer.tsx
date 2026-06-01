import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/shared/social-links";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/50 shadow-glass">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.title}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{profile.shortBio}</p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary"
            >
              Next.js
            </a>{" "}
            · {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
