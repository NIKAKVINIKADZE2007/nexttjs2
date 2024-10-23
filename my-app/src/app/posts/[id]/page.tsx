const CustomPost = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>This post id is {params.id}</div>;
};

export default CustomPost;
