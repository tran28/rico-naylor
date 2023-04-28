const Layout = ({ children, className }) => {
    return (
        <div className={`w-full h-full inline-block px-36 py-32 xl:px-24 xl:py-20 lg:px-16 lg:py-12 md:px-12 sm:px-8 ${className}`}>
            {children}
        </div>
    );
};
export default Layout;