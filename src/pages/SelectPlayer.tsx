
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ldf_coq1 from "@/assets/ldf_coq1.jpeg";
import ldf_coq2 from "@/assets/ldf_coq2.jpeg";
import ldf_coq3 from "@/assets/ldf_coq3.jpeg";
import ldf_coq4 from "@/assets/ldf_coq4.jpeg";

const runnersArray = [ldf_coq1, ldf_coq2, ldf_coq3, ldf_coq4];

export function SelectPlayer() {
  return (
    <>
    <Carousel
      className="w-full"
    >
      <CarouselContent>
        {Array.from(runnersArray).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="runner">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <img src={_} alt={`runner_${index}`} width={512} height={512}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
