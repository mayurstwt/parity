import { Button } from '@/components/ui/button'
import { SignUpButton } from '@clerk/nextjs'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { subscriptionTiersInOrder } from '../data/SubscriptionTiers'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCompactNumber } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import BrandLogo from '@/components/BrandLogo'

const Home = () => {
  return (
    <>
      <section className='min-h-screen bg-[radical-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4'>
        <h1 className='text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4'>Price, Smarter, Sell bigger!</h1>
        <p className='text-lg lg:text-3xl max-w-screen-xl'>Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">Get started for free <ArrowRightIcon className='size-5' /> </Button>
        </SignUpButton>
      </section>

      <section className='bg-primary text-primary-foreground'>
        <div className='container py-16 flex flex-col items-center gap-16 px-8 md:px-16'>
          <h2 className='text-3xl text-center text-balance'>Trusted by the top modern companies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399655/10.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link>
            <Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/9.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/2.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/1.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/4.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399637/7.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/8.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/5.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/6.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link><Link href="/">
              <Image src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735399636/3.svg" height={200} className='filter invert' width={200} alt="logo" />
            </Link>
          </div>
        </div>
      </section>

      <section className='px-8 py-16 bg-accent/5' id='pricing'>
        <h2 className='text-4xl text-center text-balance font-semibold mb-8'>
          Pricing software which pays for itself 20x over
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto'>
          {subscriptionTiersInOrder.map(tier => (
            <PricingCard key={tier.name}{...tier} />
          ))}
        </div>
      </section>

      <footer className='container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start'>
        <Link href={"/"}>
          <BrandLogo />
        </Link>

        <div className='flex flex-col sm:flex-row gap-16'>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "/red" },
                { label: "Discount API", href: "/ref" },
              ]}
            />

            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "/edff" },
                { label: "Saas Business", href: "/tef" },
                { label: "Online Courses", href: "/wef" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "/red" },
                { label: "Discount API", href: "/ref" },
              ]}
            />

            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "/edff" },
                { label: "Saas Business", href: "/tef" },
                { label: "Online Courses", href: "/wef" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "/red" },
                { label: "Discount API", href: "/ref" },
              ]}
            />

            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "/edff" },
                { label: "Saas Business", href: "/tef" },
                { label: "Online Courses", href: "/wef" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home


function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const ismostPopular = name === "Standard"
  return (
    <Card>
      <CardHeader>
        <div className='text-accent font-semibold mb-8'>
          {name}
        </div>
        <CardTitle className='text-xl font-bold'>${priceInCents / 100} /mo</CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button className='text-lg w-full rounded-lg' variant={ismostPopular ? "accent" : "default"}>
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className='flex flex-col gap-4 items-start'>
        <Feature className='font-bold'>
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP Discounts</Feature>
        {canCustomizeBanner && <Feature>Banner customiation</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
      </CardFooter>
    </Card>
  )
}


function Feature({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={cn("flex items-center gap-2", className)}>
    <CheckIcon className='size-4 stroke-accent bg-accent/25 rounded-full p-0.5' />
    <span>{children}</span>
  </div>
}


function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[]
}) {
  return (<div className='flex flex-col gap-4'>
    <h3 className='font-semibold'>{title}</h3>
    <ul className='flex flex-col gap-2 text-sm'>
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}