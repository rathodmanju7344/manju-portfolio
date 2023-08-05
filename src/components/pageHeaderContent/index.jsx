import './styles.scss';
const PageHeaderContent = (props) => {
    const { headerText, icon, extraIcon = null } = (props);
    return (
        <div className='wrapper'>
            <h2>{headerText}{extraIcon}</h2>
            <span>{icon}</span>
        </div>
    );
};

export default PageHeaderContent;
