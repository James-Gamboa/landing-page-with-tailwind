import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
return (
    <>
    <Header />
    <figure className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src="../img/bg-tablet-pattern.svg" width={500} height={200} className="absolute w-full -z-10 -top-24 -right-1/4 max-w-2xl" alt="Background pattern"/>
    </figure>
    <main>
        <section className="wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left">
        <article>
            <h2 className="text-3xl font-bold text-very-dark-blue mb-6 md:text-4xl">What’s different about Manage?</h2>
            <p className="text-dark-grayish-blue">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
            </p>
        </article>
        <div className="grid gap-12">
            <article className="space-y-4 md:space-y-6">
            <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">01</span>
                <span className="flex-1 p-2">Track company-wide progress</span>
            </p>
                <p className="text-dark-grayish-blue text-left">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
                </p>
            </article>
            <article className="space-y-4 md:space-y-6">
            <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">02</span>
                <span className="flex-1 p-2">Advanced built-in reports</span>
            </p>
            <p className="text-dark-grayish-blue text-left">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
            </p>
            </article>
            <article className="space-y-4 md:space-y-6">
            <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">03</span>
                <span className="flex-1 p-2">Everything you need in one place</span>
            </p>
            <p className="text-dark-grayish-blue text-left">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
            </p>
            </article>
        </div>
        </section>
        <section className="wrapper text-center py-24 max-w-lg mx-auto md:max-w-xl">
        <h2 className="text-3xl font-bold text-very-dark-blue md:text-4xl">What they’ve said</h2>
        <div className="mt-24 mb-14">
            <article className="bg-vary-light-gray pt-16 pb-12 px-4 relative">
            <Image src="/img/avatar-ali.png" width={500} height={200} className="absolute w-24 aspect-square -top-12 inset-x-0 mx-auto" alt="avatar ali"/>
            <h3 className="text-xl mb-4 pt-2 font-bold text-very-dark-blue">Ali Bravo</h3>
            <p className="text-dark-grayish-blue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
            </p>
            </article>
        </div>
        <Link href="/" className="button mx-auto shadow-xl shadow-bright-red/30">Get Started</Link>
        </section>
        <section className="bg-bright-red font-bold">
        <div className="wrapper py-24 text-center grid gap-6 md:grid-cols-[40%_40%] md:justify-between md:items-center md:text-left">
            <h2 className="text-4xl text-very-pale-red">Simplify how your team works today.</h2>
            <Link href="/" className="button text-bright-red bg-vary-light-gray mx-auto md:mx-0 md:justify-self-end"> Get Started</Link>
        </div>
        </section>
    </main>
    <Footer />
    </>
);
}
