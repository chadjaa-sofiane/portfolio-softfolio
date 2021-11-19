const Loading = () => <h1> loading ... </h1>;

interface IProps {
  loading: boolean;
}

const withLoader =
  <T extends Object>(Component: React.ComponentType<T>): React.FC<T & IProps> =>
  ({ loading, ...props }: IProps) =>
    loading ? <Loading /> : <Component {...(props as T)} />;

// js versoin
const withLoaderJs =
  (Component) =>
  ({ loading, ...props }) =>
    loading ? <Loading /> : <Component {...props} />;

export default withLoader;
