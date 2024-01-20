import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <header>
        <nav className="wrapper h-20 flex items-center justify-between">
          <Link href="/" className="w-1/3 max-w-[140px]">
            <Image src="/img/logo.svg" width={500} height={200} className="w-full" alt="Logo"/>
          </Link>
          <input type="checkbox" id="menu" className="peer hidden" />
          <label htmlFor="menu" className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"></label>
          <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 md:static md:bg-none md:translate-x-0">
            <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="button shadow-sm shadow-bright-red/30 hidden py-3 lg:block">Get Started</Link>
        </nav>
        <section className="wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md:py-24">
          <Image src="/img/illustration-intro.svg" width={500} height={200} className="w-full max-w-lg md:order-1" alt="illustration intro" />
          <article className="text-center space-y-6 md:text-left md:space-y-8">
            <h1 className="text-4xl font-bold text-very-dark-blue md:text-5xl">Bring everyone together to build better products.</h1>
            <p className="text-dark-grayish-blue">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Link href="/" className="button mx-auto shadow-xl shadow-bright-red/30 md:mx-0">Get Started</Link>
          </article>
        </section>
      </header>
    </>
  );
}

export default Header;
