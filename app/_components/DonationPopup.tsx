import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


// interface DonationData {
//   name: string;
//   phone: string;
//   address: string;
//   additionalInfo: string;
// }

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationPopup({ isOpen, onClose }: DonationPopupProps) {
  // const [formData, setFormData] = useState<DonationData>({
  //   name: "",
  //   phone: "",
  //   address: "",
  //   additionalInfo: "",
  // });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donation Request</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input placeholder="Your Name" />
          <Input type="tel" placeholder="Your Phone Number" />
          <Input placeholder="Pickup Address" />
          <Textarea placeholder="Additional Information" />
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Submit Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
