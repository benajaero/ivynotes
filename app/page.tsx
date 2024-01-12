import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "green" })}>green notes&nbsp;</h1>
				<br />
				<h1 className={title()}>
					not paper notes. Create a sustainable future today.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					All profit and ad-revenue generated goes towards sustainable non-profits and green initiatives.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href="/editor"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Open Editor
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Contribute to our  <Link isExternal href={"https://github.com/benajaero/ivynotes"}><Code color="primary">open source project</Code></Link>
					</span>
				</Snippet>
			</div>
			
			<div className="mt-24">
				<h2 className={subtitle()}><Link href="/donate">Donate to Ivy Notes</Link></h2>
			</div>
		</section>
	);
}
