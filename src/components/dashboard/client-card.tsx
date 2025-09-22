import Image from "next/image";

export default function ClientCard() {
  return (
    <div className="bg-Greyscale-Surface-White outline-Greyscale-Border-Default inline-flex flex-col items-start justify-start gap-4 self-stretch rounded-md p-6 outline outline-offset-[-1px]">
      <div className="inline-flex items-start justify-end gap-2.5 self-stretch">
        <div className="flex flex-1 items-start justify-start gap-2 self-stretch">
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="inline-flex items-center justify-start gap-2">
              <div
                data-size="lg"
                data-type="avatar image"
                className="relative h-16 w-16 shadow-md"
              >
                <Image
                  alt="avatar"
                  width={62}
                  height={62}
                  className="absolute top-0 left-0 h-16 w-16 rounded-full"
                  src="/_static/40x40.svg"
                />
              </div>
              <div className="justify-center font-['Roboto'] text-base leading-normal font-semibold text-gray-700">
                Rays IT Solutions
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-6 w-6 overflow-hidden">
          <div className="bg-Greyscale-Text-Title absolute top-[10px] left-[10px] h-1 w-1" />
          <div className="bg-Greyscale-Text-Title absolute top-[3px] left-[10px] h-1 w-1" />
          <div className="bg-Greyscale-Text-Title absolute top-[17px] left-[10px] h-1 w-1" />
        </div>
      </div>
      <div className="outline-Greyscale-Surface-White h-0 self-stretch outline outline-offset-[-0.50px]" />
      <div className="inline-flex w-96 items-center justify-start gap-2">
        <div className="bg-Greyscale-Surface-Default flex items-center justify-start gap-2.5 rounded-[999px] p-2">
          <div className="relative h-3 w-3 overflow-hidden">
            <div className="bg-Greyscale-Text-Body absolute top-[0.50px] left-[0.56px] h-2.5 w-2.5" />
          </div>
        </div>
        <div className="text-Greyscale-Text-Body justify-start font-['Roboto'] text-sm leading-tight font-normal">
          +97 300 344 333
        </div>
      </div>
      <div className="outline-Greyscale-Border-Lighter h-0 self-stretch outline outline-offset-[-0.50px]" />
      <div className="flex flex-col items-start justify-start gap-1">
        <div className="text-Greyscale-Text-Caption justify-start self-stretch text-[10px] leading-none font-normal">
          Assigned to
        </div>
        <div
          data-size="sm"
          className="inline-flex items-center justify-start gap-2"
        >
          <div
            data-size="sm"
            data-type="avatar image"
            className="relative h-10 w-10"
          >
            <Image
              width={40}
              height={40}
              alt="placeholder"
              className="absolute top-0 left-0 h-10 w-10 rounded-full"
              src="https://placehold.co/40x40"
            />
          </div>
          <div className="text-Greyscale-Text-Body justify-center font-['Roboto'] text-sm leading-tight font-normal">
            Walter White
          </div>
        </div>
      </div>
    </div>
  );
}
