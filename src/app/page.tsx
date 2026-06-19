import Button from "@/components/ui/Button";


export default function Home() {
  return (
    <div className="flex flex-col gap-10">
        <h1 className="bg-white px-3 py-3 w-fit rounded-lg mx-auto text-black text-5xl mt-2">
          Design System Basics
        </h1>
        <div className="border-white border rounded-lg p-2 flex flex-col items-center gap-5">
          <Button>SOLID</Button>
          <Button>DESTRUCTIVE</Button>
          <Button>SECONDARY</Button>
          <Button>OUTLINE</Button>
          <Button>GHOST</Button>
          <Button>LINK</Button>
        </div>
    </div>
  );
}
