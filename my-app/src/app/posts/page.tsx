import Link from 'next/link';

const Posts = () => {
  const postLinks = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
  ];

  return (
    <div>
      <div>
        {postLinks.map((post, index) => (
          <Link
            className='block px-4 my-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
            href={`/posts/${post.id}`}
          >
            {' '}
            {post.title}{' '}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
