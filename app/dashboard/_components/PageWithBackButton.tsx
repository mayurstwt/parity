import { Button } from "@/components/ui/button"
import { AlignLeft, ArrowBigLeft, ArrowLeftIcon, ArrowRightLeft } from "lucide-react"
import Link from "next/link"


export default function PageWithBackButton({
    backButtonHref,
    pageTitle,
    children,
}: {
    backButtonHref: string,
    pageTitle: string,
    children: React.ReactNode
}) {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-4 p-4">
            <Button size="icon" variant="outline" asChild>
                <Link href={backButtonHref}>
                    <div className="sr-only">Back</div>
                    <ArrowLeftIcon className="size-8" />
                </Link>
            </Button>

            <h1 className="text-2xl font-semibold self-center">{pageTitle}</h1>
            <div className="col-start-2">{children}</div>
        </div>
    )
}