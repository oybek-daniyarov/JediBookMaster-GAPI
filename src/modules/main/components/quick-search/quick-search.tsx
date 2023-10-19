import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.tsx";
import { useEffect, useState } from "react";
import { useLazyFetchAllBooksQuery } from "@/modules/main/bookApi.ts";
import { useDebounce, useDialog, useKeyboardEvent } from "@/modules/core/hooks";
import { SanitizeHtml } from "@/components/sanitize-html";
import { Image } from "@/components/image";
import { generatePath, useNavigate } from "react-router-dom";
import { MainRouteEnum } from "@/modules/main/route";
import { CommandLoading } from "cmdk";
import { Icons } from "@/components/ui/icons";

const QuickSearch = () => {
  const [searchText, setSearchText] = useState("");
  const search = useDebounce(searchText, 500);
  const dialog = useDialog();
  useKeyboardEvent("j", dialog.handleToggle);

  const navigate = useNavigate();

  const [fetchSearch, books] = useLazyFetchAllBooksQuery();

  const isLoading = books.isLoading || books.isFetching;

  const navigateToBook = (id: string) => {
    id && navigate(generatePath(MainRouteEnum.BOOK_DETAILS_VIEW, { id }));
  };

  useEffect(() => {
    if (search) {
      fetchSearch({
        query: search,
        pagination: {
          maxResults: 8,
        },
      });
    }
  }, [fetchSearch, search]);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog
        open={dialog.isOpen}
        onOpenChange={dialog.handleOpenChange}
      >
        <CommandInput
          placeholder="Type book title..."
          onValueChange={setSearchText}
          value={searchText}
        />
        {search && (
          <CommandList>
            {isLoading && (
              <CommandLoading>
                <CommandItem>
                  <div className="flex gap-4 items-center">
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                </CommandItem>
              </CommandLoading>
            )}
            {search && Number(books.data?.totalItems) > 0 ? (
              books.data?.items?.map((book) => (
                <CommandItem
                  onSelect={() => navigateToBook(book.id)}
                  key={book.id}
                  value={book.id}
                  className="flex gap-2 items-start"
                >
                  <Image
                    alt={book.volumeInfo.title}
                    className="w-full max-w-[40px] rounded-sm"
                    src={book.volumeInfo?.imageLinks?.smallThumbnail}
                  />
                  <div className="flex flex-col gap-1">
                    <span>{book.volumeInfo.title}</span>
                    {book?.searchInfo?.textSnippet && (
                      <span className="text-xs text-gray-500">
                        <SanitizeHtml html={book.searchInfo.textSnippet} />
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
        )}
      </CommandDialog>
    </>
  );
};

export { QuickSearch };
