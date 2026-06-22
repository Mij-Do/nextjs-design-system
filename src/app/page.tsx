import Button from "@/app/components/ui/Button";


export default function Home() {
  return (
    <div className="flex flex-col gap-10">
        <h1 className="bg-white px-3 py-3 w-fit rounded-lg mx-auto text-black text-5xl mt-2">
          Design System Basics
        </h1>
        <div className="border-white border rounded-lg p-2 flex flex-col items-center gap-5">
          <Button intent={"primary"} size={"xs"}>SOLID</Button>
          <Button intent={"destructive"} size={"sm"}>DESTRUCTIVE</Button>
          <Button intent={"secondary"} size={"md"}>SECONDARY</Button>
          <Button intent={"outline"} size={"lg"} fitWidth>OUTLINE</Button>
          <Button intent={"ghost"} size={"xl"}>GHOST</Button>
          <Button intent={"link"}>LINK</Button>
        </div>
        <Button intent={"ghost"} size={"xl"} fullWidth>Full Width</Button>

    </div>
  );
}
