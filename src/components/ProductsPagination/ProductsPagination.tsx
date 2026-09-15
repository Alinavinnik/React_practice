import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/api";

const ProductsPagination = () => {
  const {
    data,
    isError,
    error,
    isFetching,
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
  const products = data?.pages.flatMap((page) => page.products);

  if (isError) {
    return <>Sorry, something went wrong, {error.message}</>;
  }

  return (
    <div className="flex flex-col justify-center container mx-auto px-6">
      <ul className="flex flex-wrap gap-6 my-8">
        {products.map((product) => (
          <li className="p-6 border" key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetching ? <p>Loading...</p> : <p>Load more</p>}
      </button>
    </div>
  );
};

export default ProductsPagination;
