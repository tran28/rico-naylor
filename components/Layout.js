const Layout = ({ children, className }) => {
    return (
        <div className={`w-full h-full inline-block z-0 px-36 py-32 ${className}`}>
            {children}
        </div>
    );
};
export default Layout;