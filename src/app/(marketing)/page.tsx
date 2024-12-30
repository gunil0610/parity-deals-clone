import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { ClerkIcon } from "./_icons/Clerk";
import { NeonIcon } from "./_icons/Neon";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatter";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center">
        <h1 className="m-4 text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">
          Price Smarter, Sell bigger!
        </h1>
        <p className="max-w-screen-xl text-lg lg:text-3xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="flex gap-2 rounded-xl p-6 text-lg">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
          <h2 className="text-balance text-center text-3xl font-semibold">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com" className="md:max-xl:hidden">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="bg-accent/5 px-8 py-16">
        <h2 className="mb-8 text-balance text-center text-4xl font-semibold">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid-cols2 mx-auto grid max-w-screen-xl gap-4 lg:grid-cols-4">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="mb-8 font-semibold text-accent">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            variant={isMostPopular ? "accent" : "default"}
            className="w-full rounded-lg text-lg"
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP Discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 rounded-full bg-accent/25 stroke-accent p-0.5" />
      <span>{children}</span>
    </div>
  );
}
