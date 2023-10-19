import { Link, useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "@/modules/main/bookApi.ts";
import { Image } from "@/components/image";
import { SanitizeHtml } from "@/components/sanitize-html";
import { Button } from "@/components/ui/button.tsx";
import { MainRouteEnum } from "@/modules/main/route";

const BookDetailsView = () => {
  const { id } = useParams<string>();

  const { data } = useFetchBookByIdQuery(id as string, {
    skip: !id,
  });

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100 py-16">
        <div className="container mx-auto max-w-screen-lg px-6 grid grid-cols-3 gap-8">
          <div className="col-span-full">
            <div>
              <Button size="sm" asChild>
                <Link to={MainRouteEnum.MAIN_VIEW}>Back</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full shadow-xl">
              <Image
                src={data?.volumeInfo?.imageLinks?.medium}
                alt={data?.volumeInfo.title}
                className="w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col  pt-8 col-span-2 ">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              {data?.volumeInfo.title}
            </h1>
            <p className="mt-3 text-3xl">{data?.volumeInfo.subtitle}</p>
            <p className="mt-2 text-lg">
              {data?.volumeInfo.authors?.join(", ")}
            </p>
            <p className="mt-2 text-lg">
              {data?.volumeInfo.publishedDate?.split("-")[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-lg py-16">
        <div>
          <h2 className="leading-6 text-4xl font-semibold mb-6">Overview</h2>
          <SanitizeHtml html={data?.volumeInfo?.description} />
        </div>
      </div>
    </>
  );
};

export default BookDetailsView;
