const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 bg-white dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built by Shubham Jain © {currentYear}
            </p>
        </footer>
    );
};

export default Footer;