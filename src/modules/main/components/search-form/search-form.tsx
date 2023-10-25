import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/modules/core/hooks";
import { useForm } from "react-hook-form";
import { formSchema, SearchFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormField, SearchFormFilters } from "@/modules/main/components";

const defaultValues = {
  query: "",
  queryKey: undefined,
  queryValue: "",
};

const SearchForm: FC = () => {
  const { getParams, setParams } = useSearchParam<SearchFormType>();

  const params = getParams();

  const form = useForm<SearchFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
      ...params,
    },
  });

  const handleSubmit = (values: SearchFormType) => {
    const filtered = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => Boolean(value))
    );

    setParams({
      ...filtered,
      page: "0",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField name="query">
          <Input placeholder="Search for books" />
        </FormField>
        <SearchFormFilters />
        <Button>Search</Button>
      </form>
    </Form>
  );
};

export { SearchForm };
