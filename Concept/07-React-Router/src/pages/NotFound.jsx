function NotFound() {
    return (
        <div className="text-center py-20">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl mt-4">Oops! The page you are looking for doesn't exist.</p>
            <a href="/" className="text-blue-500 underline mt-4 block">Go back Home</a>
        </div>
    )
}

export default NotFound;