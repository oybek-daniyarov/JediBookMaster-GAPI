import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { QueryKeyEnum } from "@/modules/main/repo/fetch-all-books/query.enum";

const queryType = Object.values(QueryKeyEnum);

const labelMap = {
  [QueryKeyEnum.IN_TITLE]: "In Title",
  [QueryKeyEnum.IN_AUTHOR]: "In Author",
  [QueryKeyEnum.IN_PUBLISHER]: "In Publisher",
  [QueryKeyEnum.SUBJECT]: "Subject",
  [QueryKeyEnum.ISBN]: "ISBN",
  [QueryKeyEnum.LCCN]: "LCCN",
  [QueryKeyEnum.OCLC]: "OCLC",
};

const FilterField: FC = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="queryKey"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Search in" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {queryType.map((item) => (
                <SelectItem value={item} key={item}>
                  {labelMap[item]}
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
