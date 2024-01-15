import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RaceCanvas = () => {
    const [runner1, setRunner1] = React.useState(13)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setRunner1((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='p-7 m-7'>
            <div className="flex justify-center">
                <Button className="btn bg-indigo-600 btn-primary px-6 mx-6 shadow-sm">🔥 Start Race</Button>
            </div>
            <div>
                <div className="flex items-center my-7">
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
                    <Progress value={runner1} className="w-[70%]" />
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
                    <Progress value={runner1} className="w-[70%]" />
                </div>
                <div className="flex items-center my-7">
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
                    <Progress value={runner1} className="w-[70%]" />
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
                    <Progress value={runner1} className="w-[70%]" />
                </div>
            </div>
        </div>
    );
};

export default RaceCanvas;
