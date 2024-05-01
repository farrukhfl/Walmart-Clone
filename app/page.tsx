import GridOptions from "@/components/GridOptions";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense m-6 gap-6">
        <GridOptions 
        title="Sweet Gift for less"
        image="https://links.papareact.com/1dy"
        className="bg-pink-200 h-full md:h-32"
        />

      <GridOptions 
        title="Sweet Wardrobe"
        image="https://links.papareact.com/8ko"
        className="bg-blue-100 col-span-2 row-span-2"
        />

        <GridOptions 
        title="Shop Home"
        image="https://links.papareact.com/szu"
        className="bg-pink-200 row-span-2"
        />

      <GridOptions 
        title="Shop Electronics"
        image="https://links.papareact.com/n7r"
        className="bg-yellow-100 h-64"
        />
        <GridOptions 
        title="Shop Toys"
        image="https://links.papareact.com/pj2"
        className="bg-green-100 h-64 col-span-2"
        />

        <GridOptions 
        title="All you need for match day"
        image="https://links.papareact.com/m8e"
        className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOptions 
        title="Shop Gadgets"
        image="https://links.papareact.com/gs1"
        className="bg-orange-100 h-64"
        />
        <GridOptions 
        title="Shop Beauty"
        image="https://links.papareact.com/4y0"
        className="bg-blue-100 h-64"
        />
        <GridOptions 
        title="Shop Sports"
        image="https://links.papareact.com/sq2"
        className="bg-blue-100 h-64"
        />
        <GridOptions 
        title="Enjoy Free Shipping"
        image="https://links.papareact.com/9fh"
        className="bg-rose-100 h-64"
        />
        <GridOptions 
        title="Flash Deals"
        image="https://links.papareact.com/qx7"
        className="bg-orange-200 h-64 col-span-2"
        />


      </div>
    </main>
  );
}
