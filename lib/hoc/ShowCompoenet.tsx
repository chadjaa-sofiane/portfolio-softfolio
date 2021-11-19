interface IProps {
  conditions: boolean[];
}

const ShowComponent: React.FC<IProps> = (props) => {
  const shouldRender: boolean = props.conditions.reduce(
    (p, value) => p && value,
    true
  );
  return <>{shouldRender && props.children}</>;
};

export default ShowComponent;
