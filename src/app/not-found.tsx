import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faHome } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Looks Like This Fish Got Away!</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for has swum off. Let&apos;s get you back to the dock.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button>
              <FontAwesomeIcon icon={faHome} className="size-4 mr-2" />
              Back Home
            </Button>
          </Link>
          <Link href="/services" className="inline-flex">
            <Button variant="outline">
              <FontAwesomeIcon icon={faFish} className="size-4 mr-2" />
              Browse Charters
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
