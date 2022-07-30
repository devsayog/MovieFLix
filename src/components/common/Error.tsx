function Error({ message }: { message: string }) {
  return (
    <div className="rounded-md mt-10 bg-red-200 dark:bg-red-600 py-3 px-2">
      <p className="text-sm md:text-base lg:text-lg xl:text-xl">{message}</p>
    </div>
  )
}

export default Error
