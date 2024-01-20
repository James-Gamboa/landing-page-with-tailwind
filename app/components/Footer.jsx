import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-very-dark-blue py-24">
      <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch">
        <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
          <input type="email" placeholder="Updates in your inbox…" className="min-w-[50px] flex-1 rounded-full px-4" />
          <input type="submit" value="GO" className="py-3 px-8 bg-bright-red rounded-full text-white" />
        </form>
        <nav className="grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
          <Link href="/">Home</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Products</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Community</Link>
          <Link href="/">Privacy Policy</Link>
        </nav>
        <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">
        <Link href="/">
          <Image src="/img/icon-facebook.svg" width={500} height={200} className="w-8" alt="Facebook Icon" />
        </Link>
        <Link href="/">
          <Image src="/img/icon-youtube.svg" width={500} height={200} className="w-8" alt="YouTube Icon" />
        </Link>
        <Link href="/">
          <Image src="/img/icon-twitter.svg" width={500} height={200} className="w-8" alt="Twitter Icon" />
        </Link>
        <Link href="/">
          <Image src="/img/icon-pinterest.svg" width={500} height={200} className="w-8" alt="Pinterest Icon" />
        </Link>
        <Link href="/">
          <Image src="/img/icon-instagram.svg" width={500} height={200} className="w-8" alt="Instagram Icon" />
        </Link>
        </div>
        <Link href="/" className="[grid-area:logo]">
          <Image src="/img/logo-white.svg" width={500} height={200} alt="logo white" />
        </Link>
        <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">Copyright 2024. All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
