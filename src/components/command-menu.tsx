"use client";

import * as React from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon, LucideDownload } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Props {
  links: { url: string; title: string }[];
  cal?: string;
}

export const CommandMenu = ({ links, cal }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [openCal, setOpenCal] = React.useState(false);
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <a
        href="/static/resume.pdf"
        target="_blank"
        className="h-10 w-10 px-2 fixed bottom-4 right-16 border border-input bg-background hover:bg-accent hover:text-accent-foreground flex rounded-full shadow-2xl print:hidden"
      >
        <LucideDownload  className="size-6 place-self-center"/>
      </a>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
            {cal && (<CommandItem
              onSelect={(e) => {
                setOpenCal(true);
                console.log(openCal)
                setOpen(false);
              }}
            >
              <span>Lets Talk</span>
            </CommandItem>)}

          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

      <Dialog open={openCal} onOpenChange={setOpenCal} modal={true} >
        <DialogContent className="max-w-screen overflow-x-hidden print:hidden flex justify-center items-center  max-h-screen overflow-scroll  md:m-2  md:p-4 shadow-lg">
          {(cal) && <Cal calLink={cal} style={{ overflow: "scroll", width: "100%" }} config={{ layout: 'column_view' }} />}
        </DialogContent>
      </Dialog>
    </>
  );
};
