export function pageResponse(
    rows: any[],
    count: number,
    currentPage: number,
    limit: number,
  ) {
    const total_pages = Math.ceil(count / limit);
    return {
      status: 200,
      data: {
        records: rows,
        pagination: {
          currentPage,
          total_pages: total_pages === 0 ? 1 : total_pages,
          total_count: count,
        },
      },
    };
  }