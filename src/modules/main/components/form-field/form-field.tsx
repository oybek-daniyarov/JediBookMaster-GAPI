import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField as BaseFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  name: string;
  label?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const FormField: React.FC<Props> = ({
  name,
  label,
  description,
  children,
  className,
}) => {
  const { control } = useFormContext();
  return (
    <div className={className}>
      <BaseFormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              {React.cloneElement(children as React.ReactElement, field)}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export { FormField };
