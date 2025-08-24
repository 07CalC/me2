
export const People = () => {
  const data = [
    { name: 'Sam', username: 'sam-23-eer' },
    { name: 'JoyBoy', username: 'joyboy1210', url: 'https://portfolio-lhnw.vercel.app' },
    { name: 'HGR', username: 'hgrgamer' },
    { name: 'BitFlipper', username: 'bitflipper19' }
  ]
  return (

    <div className="flex flex-col items-start  justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 ">People</h1>
      <div className="flex flex-wrap items-center sm:items-start gap-8 w-full">
        {data.map((person) => (
          <div className="w-20 h-20 relative flex flex-col gap-1" key={person.username}>
            <a
              key={person.username}
              target="_blank"
              rel="noopener noreferrer"
              href={person.url ? person.url : `https://github.com/${person.username}`}
              title={person.name}
            >
              <img
                src={`https://avatars.githubusercontent.com/${person.username}`}
                alt={person.name}
                className="w-20 h-20 object-cover rounded-full border-4 border-black dark:border-white hover:scale-105 transition-transform"
              />
            </a>
            <div className="bottom-0 left-0 right-0 text-center text-sm">
              {person.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
