
export type Icon<T extends Record<string, unknown> = Record<string, unknown>> =
  (
    props: {
      className?: string;
      active?: boolean;
      fill?: `${string}`;
      onClick?: () => void;
    } & T,
  ) => JSX.Element;
