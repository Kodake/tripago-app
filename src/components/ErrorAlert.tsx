interface Props {
    error: string;
}

const ErrorAlert = ({ error }: Props) => {
    return (
        <div className="mt-3">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    )
}

export default ErrorAlert;
