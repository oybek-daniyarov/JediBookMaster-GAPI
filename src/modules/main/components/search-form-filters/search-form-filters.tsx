import { FilterField } from "@/modules/main/components/filter-field";
import { FormField } from "@/modules/main/components";
import { Input } from "@/components/ui/input";
import { useDialog, useSearchParam } from "@/modules/core/hooks";
import { cx } from "class-variance-authority";
import { useFormContext } from "react-hook-form";

const SearchFormFilters = () => {
  const { isOpen, handleToggle } = useDialog();
  const { deleteParams } = useSearchParam();
  const form = useFormContext();

  const hasKey = Boolean(form.watch("queryKey"));

  const clearFilters = () => {
    form.setValue("queryKey", "");
    form.setValue("queryValue", "");
    deleteParams(["queryKey", "queryValue"]);
  };
  return (
    <>
      <div className="text-xs flex items-center justify-between">
        <a onClick={handleToggle} className=" cursor-pointer">
          Advanced filters
        </a>
        {hasKey && <a onClick={clearFilters}>Clear</a>}
      </div>
      <div
        className={cx({
          hidden: !isOpen,
        })}
      >
        <div className="flex flex-col gap-2">
          <FilterField />
          {hasKey && (
            <FormField name="queryValue">
              <Input placeholder="Search for books" />
            </FormField>
          )}
        </div>
      </div>
    </>
  );
};

export { SearchFormFilters };
