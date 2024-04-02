
import Layout from "@/app/(common)/layout";
import {Container} from "@/components/Containers";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col items-center">
          <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link href="/">
            <Button variant="secondary" className="mt-4">
              Go back home
            </Button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
