import * as React from "react";
import { cn } from "../../lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import { Building2, SearchIcon } from "lucide-react";
import { useRandomCompanies } from "../../hook/useRandomCompanies.hooks";
import { useDebounce } from "../../hook/useDebounce.hooks";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { searchResult, search } = useRandomCompanies();
    const [query, setQuery] = React.useState<string>("");

    const debounce = useDebounce(query, 500);

    React.useEffect(() => {
      search(debounce);
    }, [debounce, search]);

    return (
      <div className="w-fit m-auto">
        <Popover open={true}>
          <PopoverTrigger>
            <div
              className={cn(
                "flex h-10 w-[800px]  space-x-5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
            >
              <SearchIcon />
              <input
                type={type}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="w-full focus-visible:outline-none"
                ref={ref}
                {...props}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={`w-[800px] p-0 ${
              debounce.length > 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {debounce.length > 1 && (
              <Command>
                <CommandEmpty>"No framework found."</CommandEmpty>
                <CommandGroup>
                  {searchResult.map((framework) => (
                    <CommandList key={framework.id}>
                      <a href={`/company/${framework.id}`}>
                        <CommandItem value={framework.company_name}>
                          <Building2 className="mr-2 h-4 w-4" />
                          {framework.company_name}
                        </CommandItem>
                      </a>
                      <CommandSeparator />
                    </CommandList>
                  ))}
                </CommandGroup>
              </Command>
            )}
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
