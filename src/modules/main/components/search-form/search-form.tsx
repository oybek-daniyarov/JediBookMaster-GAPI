import { FC, useEffect } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Icons } from "@/components/ui/icons.tsx";
import { useSearchParam } from "@/modules/core/hooks";
import { useForm } from "react-hook-form";
import { formSchema, SearchFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form.tsx";
import { FormField } from "@/modules/main/components";
import { FilterField } from "@/modules/main/components/filter-field";

const SearchForm: FC = () => {
  const { getParam, setParams } = useSearchParam<SearchFormType>();
  const query = getParam("query");

  const form = useForm<SearchFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
      queryKey: undefined,
      queryValue: "",
    },
  });

  const handleSubmit = (values: SearchFormType) => {
    setParams(values);
  };

  useEffect(() => {
    if (query) {
      form.setValue("query", query);
    }
  }, [query, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full max-w-md gap-2"
      >
        <div className="w-full flex flex-col gap-2">
          <FormField name="query">
            <Input placeholder="Search for books" />
          </FormField>
          <FilterField />
          <FormField name="queryValue">
            <Input placeholder="Search for books" />
          </FormField>
        </div>
        <Button size="icon">
          <Icons.Search className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};

export { SearchForm };
