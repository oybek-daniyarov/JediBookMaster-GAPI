import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { FC } from "react";
import { QueryKeyEnum } from "@/modules/main/repo/fetch-all-books/query.enum.ts";

const queryType = Object.values(QueryKeyEnum);

const FilterField: FC = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="queryKey"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Search in" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {queryType.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export { FilterField };
