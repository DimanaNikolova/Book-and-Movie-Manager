import Header from './Header/Header'
import StarsAnimation from './StarsAnimation/StarsAnimation'

const PageContainer = ({ children }) => {
    return (
        <div className='pagecontainer'>
            <Header />
            <StarsAnimation />
            {children}
        </div>
    )
}
export default PageContainer
