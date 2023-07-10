export const ErrorBoundary = () => {

  const handleClick = () => {
    throw new Error('I crashed!');
  }
  return (
    <div>
      <h1 onClick={() => { handleClick() }}>Click to raise error</h1>
    </div>
  )
};