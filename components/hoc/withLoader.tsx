
interface IProps {
  loading: boolean;
}

const Loading: React.FC = () => {
  return <div> loading ... </div>;
};

const withLoader =
  <P extends Object>(Component: React.ComponentType<P>): React.FC<P & IProps> =>
  ({ loading, ...props }: IProps) =>
    loading ? <Loading /> : <Component {...(props as P)} />;

export default withLoader;
