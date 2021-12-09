const Loading = () => <h1> loading ... </h1>;

interface IProps {
  loading: boolean;
}

const withLoader =
  <T extends Object>(Component: React.ComponentType<T>): React.FC<T & IProps> =>
  // eslint-disable-next-line react/display-name
  ({ loading, ...props }: IProps) =>
    loading ? <Loading /> : <Component {...(props as T)} />;


export default withLoader;
