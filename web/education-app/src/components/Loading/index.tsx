export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-purple-500 border-solid" />
    </div>
  )
}
