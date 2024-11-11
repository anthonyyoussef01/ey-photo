import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function CalendlyButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg"
          className="text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors"
        >
          Check Availability
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <iframe
          src="https://calendly.com/your-calendly-url"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </DialogContent>
    </Dialog>
  );
}