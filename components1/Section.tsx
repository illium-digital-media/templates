const Section: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <section className={`p-section`}>
            {props.children}
        </section>
    );
};
export default Section;