
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export function TopWinners() {
  
  return (
    <div className="space-y-8 max-h-[320px] overflow-scroll">

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>CQR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            0xCoq-runner
          </p>
          <p className="text-sm text-muted-foreground">0x22...890</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Coq Chad
          </p>
          <p className="text-sm text-muted-foreground">0x22...800</p>
        </div>
        <div className="ml-auto font-medium">+$245.20</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>VFR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Very Fast Runner
          </p>
          <p className="text-sm text-muted-foreground">0x22...820</p>
        </div>
        <div className="ml-auto font-medium">+$199.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Crazy Chicken
          </p>
          <p className="text-sm text-muted-foreground">0xa...420</p>
        </div>
        <div className="ml-auto font-medium">+180.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Mr Runner
          </p>
          <p className="text-sm text-muted-foreground">0xb...335</p>
        </div>
        <div className="ml-auto font-medium">+$155.00</div>
      </div>
    </div>
  );
}