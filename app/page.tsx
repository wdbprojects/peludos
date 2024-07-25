import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LandingImage from "@/public/images/dog.svg";

const Dashboard = () => {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-center justify-start gap-2">
          <PawPrint className="h-6 w-6" />
          <h1 className="text-2xl font-extralight uppercase">peludos</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-3xl md:text-7xl font-normal">
            Encuentra a tu peludo!!
          </h1>
          <p className="mt-4 text-sm">
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Button asChild className="mt-6" variant="default" size="lg">
            <Link href="/home">Ingresa</Link>
          </Button>
        </div>
        <Image src={LandingImage} alt="peludos logo" />
      </section>
    </main>
  );
};

export default Dashboard;
