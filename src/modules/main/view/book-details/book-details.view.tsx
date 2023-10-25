import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "@/modules/main/bookApi";
import { Image } from "@/components/image";
import { SanitizeHtml } from "@/components/sanitize-html";
import { Button } from "@/components/ui/button";
import { ImageContainer } from "@/modules/main/components";
import { getBookImage } from "@/modules/main/lib";

const BookDetailsView = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const { data } = useFetchBookByIdQuery(id as string, {
    skip: !id,
  });

  /// get one of the images
  const image = useMemo(() => getBookImage(data?.images), [data?.images]);

  const handleBack = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(-1, {
      unstable_viewTransition: true,
    });
  };
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100 py-8">
        <div className="container m-auto md:grid md:grid-cols-3 gap-8">
          <div className="col-span-full mb-6 md:mb-0">
            <div>
              <Button size="sm" onClick={handleBack}>
                Back
              </Button>
            </div>
          </div>
          {data && (
            <>
              <div className="flex flex-col gap-6">
                <div className="w-full shadow-xl">
                  <ImageContainer>
                    <Image src={image} alt={data?.title} />
                  </ImageContainer>
                </div>
              </div>
              <div className="flex-1 flex flex-col  pt-8 col-span-2 ">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                  {data?.title}
                </h1>
                <p className="mt-3 text-3xl">{data?.subtitle}</p>
                <p className="mt-2 text-lg">{data?.authors?.join(", ")}</p>
                <p className="mt-2 text-lg">
                  {data?.publishedDate?.split("-")[0]}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto  py-8">
        <div>
          <h2 className="leading-6 text-4xl font-semibold mb-6">Overview</h2>
          <SanitizeHtml html={data?.description} />
        </div>
      </div>
    </>
  );
};

export default BookDetailsView;
