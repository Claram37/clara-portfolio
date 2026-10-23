import { useId } from "react";
import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
}

const control =
  "w-full rounded-input bg-surface px-5 py-4 text-base placeholder:text-placeholder focus-ring aria-invalid:ring-2 aria-invalid:ring-alert";

const Field = ({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  multiline = false,
  error,
}: FieldProps) => {
  const id = useId();
  const errorId = `${id}-error`;
  const invalid = {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required
          {...invalid}
          className={cn(control, "h-42 resize-none")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          {...invalid}
          className={cn(control, "h-14")}
        />
      )}
      {error && (
        <p id={errorId} className="text-base text-alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;
