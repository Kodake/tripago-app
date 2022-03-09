const LoadingSpinner = () => {
    return (
        <div className="mt-3">
            <div className="spinner-border text-primary mx-2" role="status"></div>
            <div className="spinner-border text-success mx-2" role="status"></div>
            <div className="spinner-border text-danger mx-2" role="status"></div>
        </div>
    )
}

export default LoadingSpinner;