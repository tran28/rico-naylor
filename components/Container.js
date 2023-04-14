const Container = ({children, className}) => {
    return (
        <div className={`${className} max-w-[1366px]`}>
            {children}
        </div>
    );
};
export default Container;