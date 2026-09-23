import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/api";

const ProductsPagination = () => {
  const {
    data,
    isError,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => getProducts({ limit: 10, skip: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.total > lastPage.limit + lastPage.skip
        ? lastPage.limit + lastPage.skip
        : undefined,

    initialData: { pages: [], pageParams: [] },
  });
  const products = data?.pages.flatMap((page) => page.products) ?? [];

  if (isError) {
    return <p>Sorry, something went wrong, {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="flex flex-col justify-center container mx-auto px-6">
      <h1 className="text-text-accent text-2xl text-center pt-4 font-bold">
        Pagination with TanstackQuery- useInfiniteQuery
      </h1>
      <ul className="flex flex-wrap gap-6 my-8 ">
        {products.map((product) => (
          <li
            className="p-6 border border-gray-400 rounded-xl w-[calc((100%-24px)/2)]"
            key={product.id}
          >
            <h1 className="text-xl font-semibold mb-3">{product.title}</h1>
            <p className="text-[14px] text-gray-700">{product.description}</p>
          </li>
        ))}
      </ul>
      <button
        className="hover:opacity-[0.85] self-center min-w-40 py-3 px-6  rounded-xl bg-text-accent text-amber-50 text-lg font-medium disabled:opacity-[0.5] disabled:cursor-not-allowed mb-8"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default ProductsPagination;
