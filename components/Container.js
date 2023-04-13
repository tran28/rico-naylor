const Container = ({children, className}) => {
    return (
        <div className={`${className} max-w-[1920px]`}>
            {children}
        </div>
    );
};
export default Container;