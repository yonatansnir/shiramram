import { writeMeSection, picture, writeTome } from './writeMe.module.scss';

const WriteMe = () => (
    <div className={writeMeSection}>
        <div className={picture}></div>
        <div className={writeTome}>
            <h3>כתבו לי</h3>
            <p>shira@amran.com</p>
        </div>
    </div>
)

export default WriteMe;